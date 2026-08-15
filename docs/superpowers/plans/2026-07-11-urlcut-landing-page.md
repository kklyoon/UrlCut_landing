# UrlCut Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive bilingual static landing page that explains UrlCut and automatically serves Korean or English based on the visitor's browser language.

**Architecture:** `index.html` supplies a semantic, single-page shell and decorative product UI. `styles.css` owns the visual system and responsive layouts. `script.js` owns the small stateful enhancements: localized copy, language preference persistence, mobile navigation, and FAQ coordination.

**Tech Stack:** Semantic HTML5, vanilla CSS, vanilla JavaScript; no dependencies or build tooling.

## Global Constraints

- Use the supplied brand colors: `#0064ff`, `#3182f6`, `#ffffff`, `#f2f4f6`, `#191f28`, `#4e5968`, `#e5e8eb`, `#03b26c`, `#f04452`.
- Do not add dependencies or a framework.
- Route all download actions to `#download` until an installer URL exists.
- Default to Korean only for browsers whose language begins with `ko`; default every other language to English.
- Persist an explicit EN/KO choice with `localStorage`.
- Preserve native, usable FAQ behavior when JavaScript is unavailable.

---

### Task 1: Build the semantic bilingual page shell

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`

**Interfaces:**
- Consumes: `app_icon.svg` and `splash_logo.svg` as local brand assets.
- Produces: Elements marked with `data-i18n` keys and a `lang-switcher` button group consumed by `script.js`.

- [ ] **Step 1: Create the testable page structure**

Create `index.html` with a Korean fallback document language, title, meta description, linked stylesheet and deferred script. Include semantic `header`, `main`, `section`, and `footer` regions. Give primary sections stable IDs: `features`, `how-it-works`, `privacy`, `download`, and `faq`. Add `data-i18n` attributes to text nodes and `data-i18n-aria-label` to controls. Add both language buttons with `data-language="ko"` and `data-language="en"`.

- [ ] **Step 2: Verify the initial page loads**

Run: `python3 -m http.server 4173`

Expected: the server reports `Serving HTTP on ... port 4173`; opening `http://localhost:4173` returns the HTML page.

- [ ] **Step 3: Add the landing-page content**

Implement the hero, product UI illustration, before/after comparison, four feature cards, privacy trust panel, download card, FAQ `details` elements, and contact footer. Supply Korean fallback copy from `landing_page_content.md`; reserve stable keys such as `hero.title`, `features.share.title`, and `faq.q1` for English replacement. Set every download CTA `href="#download"`.

- [ ] **Step 4: Verify page semantics**

Run: `rg 'id="(features|how-it-works|privacy|download|faq)"|data-language="(ko|en)"|<details' index.html`

Expected: output includes all five section IDs, both language buttons, and FAQ `details` elements.

### Task 2: Implement the responsive visual system

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes: class names from `index.html`.
- Produces: responsive layouts for the header, hero, comparison cards, feature grid, trust panel, download card, and FAQ.

- [ ] **Step 1: Add design tokens and base rules**

Define CSS custom properties for all global color constraints, spacing, 12px/16px radii, 2px 8px card shadow, typography, focus outlines, and smooth anchor scrolling. Reset box sizing and constrain `.container` to a readable centered width.

- [ ] **Step 2: Style desktop sections**

Implement an elevated sticky header, blue primary buttons, outlined secondary buttons, a centered hero, two-column comparison cards, a two-column feature grid, a blue privacy panel, and download/FAQ cards. Apply safe URL wrapping with `overflow-wrap: anywhere`.

- [ ] **Step 3: Add responsive and accessible behavior**

At widths under 760px, hide the desktop nav until the mobile menu opens, stack paired content, make CTAs full width where needed, retain at least 44px control heights, and keep the language switcher visible. Add `prefers-reduced-motion` rules to disable nonessential animation.

- [ ] **Step 4: Verify stylesheet coverage**

Run: `rg '@media|prefers-reduced-motion|overflow-wrap|:focus-visible' styles.css`

Expected: output confirms mobile layout, motion preference, safe long-link wrapping, and a visible keyboard focus rule.

### Task 3: Add localization and progressive enhancement

**Files:**
- Modify: `script.js`

**Interfaces:**
- Consumes: `data-i18n`, `data-i18n-aria-label`, `data-language`, `data-menu-toggle`, and FAQ `details` elements from `index.html`.
- Produces: `setLanguage(language)` and `getInitialLanguage()` functions, a `urlcut-language` localStorage preference, and updated `document.documentElement.lang`.

- [ ] **Step 1: Define complete English and Korean message maps**

Create a `messages` object with `ko` and `en` values for every `data-i18n` key. Translate all user-facing headings, descriptions, calls to action, feature copy, privacy text, download labels, FAQ questions and answers, and footer labels.

- [ ] **Step 2: Implement language selection**

Implement `getInitialLanguage()` to return a valid stored `urlcut-language` value when present; otherwise return `ko` when `navigator.language.toLowerCase().startsWith('ko')`, else `en`. Implement `setLanguage(language)` to update each translated element, the root `lang` attribute, language-button `aria-pressed` values, and the localStorage value.

- [ ] **Step 3: Implement enhanced controls**

Bind language buttons to `setLanguage`. Bind the mobile menu toggle to its `aria-expanded` state and close the menu after a navigation click. On FAQ toggle, close all other open FAQ `details` elements; without JavaScript, each native disclosure remains independently usable.

- [ ] **Step 4: Verify script syntax**

Run: `node --check script.js`

Expected: exit code 0 with no output.

### Task 4: Run browser-level validation

**Files:**
- Verify: `index.html`, `styles.css`, `script.js`

**Interfaces:**
- Consumes: completed page files.
- Produces: manual verification evidence for layout, language behavior, navigation, and interactive controls.

- [ ] **Step 1: Start the static server**

Run: `python3 -m http.server 4173`

Expected: local server starts without errors.

- [ ] **Step 2: Check desktop and mobile page rendering**

Open `http://localhost:4173` at a desktop viewport and a 390px-wide viewport. Confirm the header, hero, comparison, features, privacy, download, FAQ, and footer are visible without horizontal overflow.

- [ ] **Step 3: Check language logic and interactions**

In a non-Korean browser locale, verify English initially appears. Select KO, reload, and verify Korean persists. Select EN, reload, and verify English persists. Confirm each download CTA scrolls to `#download`, the mobile menu opens/closes, and opening an FAQ closes the previously open FAQ.

- [ ] **Step 4: Perform final static checks**

Run: `node --check script.js && rg 'href="#download"' index.html | wc -l`

Expected: JavaScript syntax check passes and the command prints a positive CTA count.
