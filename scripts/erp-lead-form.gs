/**
 * Zenvora Labs — ERP lead-form backend (Google Apps Script)
 * ---------------------------------------------------------------------------
 * Receives POSTs from the ERP page form, appends each lead to the bound Google
 * Sheet, and emails a notification to NOTIFY_EMAIL.
 *
 * ONE-TIME SETUP
 *   1. Create a Google Sheet (e.g. "Zenvora — ERP Leads").
 *   2. In that sheet: Extensions → Apps Script.
 *   3. Delete the starter code, paste THIS file, Save.
 *   4. (Optional) change NOTIFY_EMAIL below.
 *   5. Deploy → New deployment → gear icon → "Web app".
 *        • Description: ERP lead form
 *        • Execute as:  Me
 *        • Who has access: Anyone
 *      Click Deploy, authorise when prompted.
 *   6. Copy the "Web app" URL (it ends in /exec) and send it back to wire into
 *      the site (it goes into src/config.js → ERP_FORM_ENDPOINT).
 *
 * Re-deploying after edits: Deploy → Manage deployments → edit → Version: New.
 */

var NOTIFY_EMAIL = 'growth@zenvoralabs.xyz';
var SHEET_NAME = 'Leads';
var HEADERS = ['Timestamp', 'Name', 'Business', 'Email', 'Phone', 'Industry',
  'Team size', 'Current system', 'What to automate', 'Source'];

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    // Honeypot: bots fill hidden fields. Accept silently, store nothing.
    if (data._gotcha) return json({ ok: true });

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    var ts = new Date();
    sheet.appendRow([
      ts,
      data.name || '',
      data.business || '',
      data.email || '',
      data.phone || '',
      data.industry || '',
      data.teamSize || '',
      data.currentSystem || '',
      data.message || '',
      data.source || 'ERP page'
    ]);

    notify(data, ts);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json({ ok: true, service: 'Zenvora ERP lead form' });
}

function notify(data, ts) {
  var subject = 'New ERP lead: ' + (data.name || 'Unknown') +
    (data.business ? ' — ' + data.business : '');

  var fields = [
    ['Name', data.name],
    ['Business', data.business],
    ['Email', data.email],
    ['Phone / WhatsApp', data.phone],
    ['Industry', data.industry],
    ['Team size', data.teamSize],
    ['Current system', data.currentSystem],
    ['What to automate', data.message],
    ['Source', data.source || 'ERP page'],
    ['Received', ts]
  ];

  var html = '<div style="font-family:Arial,sans-serif;color:#1a1a1a">' +
    '<h2 style="margin:0 0 12px">New ERP lead — Zenvora Labs</h2>' +
    '<table style="border-collapse:collapse;font-size:14px">';
  for (var i = 0; i < fields.length; i++) {
    var val = fields[i][1] ? String(fields[i][1]) : '—';
    html += '<tr>' +
      '<td style="border:1px solid #e3e3e3;padding:6px 10px;background:#faf8f2"><b>' + fields[i][0] + '</b></td>' +
      '<td style="border:1px solid #e3e3e3;padding:6px 10px">' + val + '</td></tr>';
  }
  html += '</table></div>';

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    htmlBody: html,
    name: 'Zenvora Labs Website',
    replyTo: data.email || NOTIFY_EMAIL
  });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
