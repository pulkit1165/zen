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

/*
 * WEB3FORMS_KEY — access key for web3forms.com. The ERP lead form posts to
 * the Web3Forms API with this key, which emails each submission to the address
 * the key is registered to (currently digitalpulkit1165@gmail.com). To change
 * the destination, create a new key at web3forms.com under the desired inbox
 * and swap it here. No backend/deploy needed.
 */
export const WEB3FORMS_KEY = '11657e7d-46ee-4637-afec-035d333b9bc1'
