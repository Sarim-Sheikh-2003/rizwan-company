## Site Content and Configuration

Site text and company details are stored in [`site-config.js`](site-config.js). The config is a JavaScript object, grouped by area of the site, so you can update content without changing the layout or styles.

Common updates:
- `company`: company name, brand text, and page description
- `hero`, `about`, `process`, `benefits`, and `regulation`: section text and content
- `board`: board member names, roles, and initials
- `contact`: office address, map link, phone numbers, and email addresses
- `logoSvg`: the inline SVG logo used in the header, hero, and footer

Keep the existing object structure and punctuation when editing values. Each benefits group needs a unique `id`, which is used to connect its tab to its content panel. When replacing the logo, keep the SVG symbol ID as `logo` so the page can find it.

`index.html` loads `site-config.js` before `script.js`. The script uses the config to render the page and handles the menu and benefit tabs. Styling remains in `styles.css`.# rizwan-company
