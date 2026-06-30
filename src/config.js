/*
 * Site-wide feature flags.
 *
 * SHOW_MARKETING — when false, all performance-marketing / ads content is
 * hidden and the site focuses on custom software + AI ERP development:
 *   - Home route ("/") shows the Solutions (software/ERP) page
 *   - Services / Pricing / Portfolio redirect to /solutions
 *   - Navbar + Footer drop marketing links and copy
 *
 * To bring marketing back, set this to true (single switch — nothing else
 * needs to change).
 */
export const SHOW_MARKETING = false

/*
 * ERP_FORM_ENDPOINT — the Google Apps Script Web App URL (ends in /exec) that
 * receives ERP lead-form submissions, appends them to a Google Sheet and emails
 * growth@zenvoralabs.xyz. Deploy scripts/erp-lead-form.gs, then paste the URL
 * here. While empty, the form still works visually but does not store leads.
 */
export const ERP_FORM_ENDPOINT = ''
