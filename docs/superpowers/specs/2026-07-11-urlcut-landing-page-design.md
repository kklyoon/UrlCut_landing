# UrlCut Landing Page Design

## Goal

Create a premium, responsive static landing page that explains UrlCut's link-cleaning value, builds confidence in its privacy model, and guides visitors to the macOS download section.

## Scope

- One self-contained static page, using the supplied copy in `landing_page_content.md` and an English translation.
- Bilingual Korean/English content with accessible semantic HTML and responsive CSS.
- Header navigation to Features, How it Works, Download, and FAQ sections, plus an EN/KO language switcher.
- Interactive FAQ accordions that work with keyboard and pointer input.
- A visual before/after URL cleaner comparison and a lightweight illustrative app panel.
- macOS calls to action scroll to the download section. The final installer URL is intentionally deferred.

## Visual Direction

Use a white, spacious canvas with UrlCut blue (`#0064ff`) as the brand anchor and `#3182f6` for primary actions. Use soft gray surfaces, charcoal typography, 12–16px rounded cards, and restrained shadows. The page should feel like a polished utility product: focused, trustworthy, and easy to scan.

The hero is centered with the headline first, two calls to action, and a compact product-panel illustration beneath. The link-cleaning section puts a red-tinted "before" URL card alongside a green-tinted "after" URL card. Features use a responsive 2×2 card grid. Privacy is a blue-tinted trust panel; download is a distinct card with the macOS action and disabled-looking mobile-platform badges.

## Structure

1. Sticky header with logo, desktop anchor navigation, and download action.
2. Hero with message, two CTAs, and an illustrative UrlCut app panel.
3. How-it-works link comparison, showing the removal of tracking parameters.
4. Four feature cards: share extension, media downloader, local sync, and link folders.
5. Privacy and offline-first trust section.
6. Download center with macOS requirements and forthcoming iOS/Android badges.
7. FAQ accordion built from native `details` elements.
8. Footer with contact and copyright.

## Interaction and Responsiveness

- Header links use section anchors and smooth scrolling.
- All download CTAs route to `#download` until a distribution URL is supplied.
- Use Korean by default only when the browser language begins with `ko`; show English for every other browser language. Persist a visitor's EN/KO choice in `localStorage` and honor it on later visits.
- FAQ accordions expose only one answer at a time through a small enhancement script; native `details` behavior remains available without JavaScript.
- On small screens, the navigation collapses to a compact menu button, paired layouts stack, touch targets remain at least 44px, and long URLs wrap safely.

## Implementation

Create `index.html`, `styles.css`, and `script.js` with no framework or dependency. Reuse the supplied SVG assets where appropriate. Use CSS custom properties for design tokens and progressive enhancement for JavaScript interactions.

## Verification

- Open the page in a browser and inspect desktop and narrow mobile layouts.
- Confirm every header/CTA anchor resolves to the intended section.
- Confirm FAQ toggles through mouse, keyboard, and without JavaScript fallback.
- Confirm no console errors and that the document has a meaningful title and meta description.

## Non-goals

- Real installer hosting or release management.
- User accounts, analytics, or remote data collection.
- A fabricated mobile app store link.
