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
