---
primary_color: "#0064ff"
tokens:
  source: reconciled
  extracted: "2026-06-08"
  note: "primary = live UI Blue blue500 (#3182f6); brand = official Pantone 2175C (#0064ff)"
  colors:
    primary: "#3182f6"
    primary-hover: "#2272eb"
    brand: "#0064ff"
    brand-gray: "#202632"
    canvas: "#ffffff"
    foreground: "#191f28"
    grey-700: "#333d4b"
    grey-600: "#4e5968"
    muted: "#8b95a1"
    surface: "#f2f4f6"
    border: "#e5e8eb"
    on-primary: "#ffffff"
    error: "#f04452"
    success: "#03b26c"
    warning: "#fe9800"
  typography:
    display-hero: { size: 30, weight: 700, lineHeight: 1.33, use: "Splash screens, hero moments" }
    display-lg:   { size: 26, weight: 700, lineHeight: 1.38, use: "Section headers, key metrics" }
    heading-lg:   { size: 22, weight: 700, lineHeight: 1.36, use: "Feature titles, modal headers" }
    heading:      { size: 20, weight: 600, lineHeight: 1.40, use: "Card headings, sub-sections" }
    subtitle:     { size: 16, weight: 600, lineHeight: 1.50, use: "Navigation titles, list headers" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.50, use: "Descriptions, explanations" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, use: "Standard reading text" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.54, use: "Secondary information" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    subtle: "0px 1px 3px rgba(0,0,0,0.06)"
    standard: "0px 2px 8px rgba(0,0,0,0.08)"
    elevated: "0px 4px 12px rgba(0,0,0,0.12)"
  components_harvested: true
  components:
    button-fill-primary: { type: button, bg: "#3182f6", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Primary CTA on light surfaces, 56px tall" }
    button-fill-dark: { type: button, bg: "#4e5968", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Strong action where primary too playful" }
    button-fill-danger: { type: button, bg: "#f04452", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Destructive confirmation" }
    input-box: { type: input, fg: "#333d4b", radius: 14, padding: "14px 16px", font: "17/400", use: "Standard form input, most-used variant" }
    card: { type: card, bg: "#ffffff", radius: 16, use: "White surface with standard shadow" }
---

## 1. Visual Theme & Atmosphere

This design system is a universal framework that defines an interface that feels calm, confident, and deceptively simple. The interface opens on a clean white canvas (`#ffffff`) with deep charcoal headings (`#191f28`) and a signature blue (`#3182f6`) that functions as the universal interactive accent. This isn't a cold, institutional blue; it's a bright, optimistic cerulean that signals clarity, simplicity, and ease of use.

The system supports multiple weights, but the UI exercises restraint, primarily using 400, 600, and 700. The system supports both variable-width numerals for display and fixed-width (tabular) numerals for data tables -- context determines the mode.

What defines the system visually is its OKLCH-based color system, built for perceptual uniformity. Colors at the same scale level appear equally bright regardless of hue, enabling consistent semantic coloring where blue-500, red-500, and green-500 carry identical visual weight without manual tuning.

**Key Characteristics:**
- Primary Blue (`#3182f6`) as the primary interactive color -- bright, optimistic, trustworthy
- Tabular numeral support for display and data tables
- OKLCH color space for perceptual uniformity across all hue scales
- 10-step grey scale (grey50-grey900) with warm undertones
- Three-tier token architecture: primitive → semantic → component
- Minimal shadow system -- trust comes from clarity, not depth
- Mobile-first at 375px design baseline with accessibility scaling up to 310%

## 2. Color Palette & Roles

### Primary
- **Primary Blue** (`#3182f6`): `blue500`. Primary interactive color -- CTAs, links, active states, selection highlights. The workhorse of every interactive element.
- **Blue Hover** (`#2272eb`): `blue600`. Hover/pressed state for blue500 elements.
- **Blue Light** (`#e8f3ff`): `blue50`. Informational backgrounds, subtle blue-tinted surfaces.
- **Pure White** (`#ffffff`): `background`, `layeredBackground`. Page background, card surfaces.
- **Dark Charcoal** (`#191f28`): `grey900`. Primary heading color, strongest text. Warm near-black with subtle blue undertone.

### Brand (Logo/Marketing Only)
- **Brand Blue** (`#0064FF`): Official brand color (Pantone 2175 C). Logo and marketing materials only -- distinct from UI blue500.
- **Brand Gray** (`#202632`): Official secondary brand color (Pantone 433 C). Corporate contexts.

### Semantic
- **Error Red** (`#f04452`): `red500`. Error states, destructive actions, negative indicators.
- **Success Green** (`#03b26c`): `green500`. Positive status indicators, confirmations.
- **Warning Orange** (`#fe9800`): `orange500`. Pending states, attention-needed indicators.
- **Caution Yellow** (`#ffc342`): `yellow500`. Soft warnings, highlight moments.
- **Info Teal** (`#18a5a5`): `teal500`. Informational accent, alternative categorization.
- **Premium Purple** (`#a234c7`): `purple500`. Premium features, special highlights.

### Neutral Scale
- **Grey 50** (`#f9fafb`): Lightest gray, `greyBackground` surface.
- **Grey 100** (`#f2f4f6`): Secondary background, card fills, disabled surfaces.
- **Grey 200** (`#e5e8eb`): Default border color, dividers, input backgrounds.
- **Grey 400** (`#b0b8c1`): Placeholder text, disabled icon fills.
- **Grey 500** (`#8b95a1`): Caption text, secondary labels.
- **Grey 600** (`#6b7684`): Body text, descriptions, metadata.
- **Grey 700** (`#4e5968`): Emphasized body text, sub-headings.
- **Grey 800** (`#333d4b`): Strong labels, navigation text.

### Surface & Borders
- **Border Default**: `#e5e8eb` (grey200). Standard card borders, input borders, dividers.
- **Border Strong**: `#d1d6db` (grey300). Emphasized borders, active input outlines.
- **Background Float**: `#ffffff`. `floatBackground`. Floating elements -- tooltips, dropdowns.
- **Overlay Scrim**: `rgba(2,9,19,0.5)` to `rgba(2,9,19,0.91)`. `greyOpacity` scale. Blue-tinted dark overlays.

## 3. Typography Rules

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display Hero | 30px | 700 | 40px (1.33) | normal | Splash screens, hero moments |
| Display Large | 26px | 700 | 36px (1.38) | normal | Section headers, key metrics |
| Heading Large | 22px | 700 | 30px (1.36) | normal | Feature titles, modal headers |
| Heading | 20px | 600 | 28px (1.40) | normal | Card headings, sub-sections |
| Subtitle | 16px | 600 | 24px (1.50) | normal | Navigation titles, list headers |
| Body Large | 16px | 400 | 24px (1.50) | normal | Descriptions, explanations |
| Body | 14px | 400 | 22px (1.57) | normal | Standard reading text |
| Body Small | 13px | 400 | 20px (1.54) | normal | Secondary information |
| Caption | 12px | 400 | 18px (1.50) | normal | Timestamps, fine print |
| Number Display | 30px+ | 700 | tight | normal | Primary numerical metrics -- tabular nums |

### Principles
- **Eight weights, three used**: Multiple weights available, but UI primarily uses 400 (body), 600 (emphasis), and 700 (headings). Restraint over variety.
- **Dual numeral modes**: Variable-width for display, fixed-width (tabular) for structured data and tabular metrics. Context determines mode.
- **Symbol optimization**: %, comma separators, ±, currency symbols, and status indicators are given enhanced legibility at small sizes.

## 4. Component Stylings

### Buttons

The `<Button>` is a 2-axis component: **variant** × **color** × size. Default size is `xlarge` (the values below); see the size-scale paragraph at the end for `small`/`medium`/`large`.

**Fill / Primary**
- Background: `#3182f6`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600
- Pressed: dim overlay via `--button-pressed-background-color` + `--button-pressed-opacity`
- Disabled: bg opacity scaled by `--button-disabled-opacity-color`
- Loading: 3-dot indicator replacing label, button width preserved
- Use: Primary CTA on light surfaces (확인, 시작하기) — 56px tall

**Fill / Dark**
- Background: `#4e5968`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600
- Use: Strong action where primary color would feel too playful (admin/settings CTA)

**Fill / Danger**
- Background: `#f04452`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600
- Use: Destructive confirmation (삭제, 취소)

**Fill / Light**
- Background: `#ffffff`
- Text: `#1b64da`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600
- Use: CTA on dark / colored surfaces (sits on non-white bg to be legible)

**Weak / Primary**
- Background: `rgba(100, 168, 255, 0.15)`
- Text: `#2272eb`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600
- Use: Secondary action paired with Fill / Primary on the same screen

**Weak / Dark**
- Background: `rgba(2, 32, 71, 0.05)`
- Text: `#4e5968`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600
- Use: Neutral / cancel-style secondary (취소, 닫기)

**Weak / Danger**
- Background: `rgba(251, 136, 144, 0.15)`
- Text: `#e42939`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600
- Use: Subtle destructive action (archive instead of delete)

**Weak / Light**
- Background: `rgba(255, 255, 255, 0.15)`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600
- Use: Secondary on dark / colored surfaces

Display modes — `inline` (auto-width), `block` (full-width with line break), `full` (fills parent). Size scale (height · font · radius): `small` 32px · 13px / 600 · 8px; `medium` 38px · 15px / 600 · 10px; `large` 48px · 17px / 600 · 14px; `xlarge` (default) 56px · 17px / 600 · 16px. CSS-var customization: `--button-color`, `--button-background-color`, `--button-pressed-background-color`, `--button-pressed-opacity`, `--button-disabled-opacity-color`, `--button-loader-color`, `--button-loading-background-color`, `--button-gradient-color`.

### Inputs

The `<TextField>` has 4 variants: `box` (default), `line`, `big`, `hero`. `hasError` toggles error state.

**Box (default)**
- Background: `rgba(0, 23, 51, 0.02)`
- Text: `#333d4b`
- Border: 1px solid `rgba(2, 32, 71, 0.05)`
- Radius: 14px
- Padding: 14px 16px
- Font: 17px / 400
- Placeholder: `#b0b8c1`
- Focus: border `#3182f6`
- Use: Standard form input — most-used variant

**Line**
- Background: transparent
- Text: `#333d4b`
- Border: 1px solid `#e5e8eb` (bottom only)
- Radius: 0px
- Padding: 0px 0px 4px
- Font: 17px / 400
- Use: Underline-style input on dense forms

**Big**
- Background: transparent
- Text: `#333d4b`
- Border: 1px solid `#e5e8eb` (bottom only)
- Radius: 0px
- Padding: 0px 0px 4px
- Font: 22px / 600
- Use: Highlighted single-line input (value, name)

**Hero**
- Background: transparent
- Text: `#333d4b`
- Border: 1px solid `#e5e8eb` (bottom only)
- Radius: 0px
- Padding: 0px 0px 4px
- Font: 30px / 600
- Use: Eye-catching hero input — large value entry, sign-up moment

**Error**
- Background: `rgba(0, 23, 51, 0.02)` (box variant base)
- Text: `#333d4b`
- Border: 1px solid `#f04452`
- Radius: 14px
- Padding: 14px 16px
- Font: 17px / 400
- Use: `hasError` state — paired with inline help message in `#f04452`

`SplitTextField` (OTP), security PIN pad inputs, and `TextArea` reuse the same focus ring and base radii.

### Cards

**Standard**
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 20px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`
- Use: Content panel, informational summary — the workhorse surface

**Featured**
- Background: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 24px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`
- Use: Hero/promotional cards on primary dashboards

**Compact**
- Background: `#ffffff`
- Border: 1px solid `#e5e8eb`
- Radius: 8px
- Padding: 12px
- Shadow: none
- Use: Inline list items where a softer 1px edge replaces shadow

### Badges

The `<Badge>` is a 3-axis component: **variant** × **color** × **size**. Variants `fill | weak`. Colors `blue | teal | green | red | yellow | neutral`. Sizes `xsmall | small | medium | large` (each shifts radius/font/padding).

**Fill / Blue (medium default)**
- Background: `#3182f6`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700
- Use: Primary status / category emphasis ("NEW", "BEST")

**Fill / Green**
- Background: `#22c55e`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700
- Use: Success / completion state (완료, 성공)

**Fill / Red**
- Background: `#ef4444`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700
- Use: Negative / error state (실패, 오류)

**Fill / Yellow**
- Background: `#eab308`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700
- Use: Caution / pending (검토 중, 대기)

**Weak / Blue**
- Background: `rgba(100, 168, 255, 0.15)`
- Text: `#2272eb`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700
- Use: Subtle informational badge

**Weak / Green**
- Background: `rgba(34, 197, 94, 0.15)`
- Text: `#16a34a`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700
- Use: Subtle success state

**Weak / Red**
- Background: `rgba(239, 68, 68, 0.15)`
- Text: `#dc2626`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700
- Use: Subtle error/negative state

**Weak / Neutral**
- Background: `rgba(2, 32, 71, 0.05)`
- Text: `#4e5968`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700
- Use: Neutral metadata badge

Size scale (height · font · radius · padding): `xsmall` 21px · 10px / 600 · 9px · 3px 7px; `small` 24px · 12px / 700 · 11px · 3px 7px; `medium` 26px · 13px / 700 · 12px · 3px 7px; `large` 29px · 14px / 700 · 13px · 4px 8px. Color also supports `teal` and full mapping for each color name; values above show the most-used 4 fills + 4 weaks at medium size.

### Tabs

**Bottom Tab (Active)**
- Background: `#ffffff`
- Text: `#191f28`
- Border: 1px solid `#e5e8eb` (top border only)
- Active: `#3182f6` (icon and label)
- Disabled: `#b0b8c1` (icon) + `#8b95a1` (label)
- Font: 11px / 500
- Use: Bottom navigation bar — fixed white background, no shadow

**Segmented**
- Background: `#f2f4f6`
- Text: `#8b95a1`
- Border: none
- Radius: 12px
- Padding: 8px 16px
- Active: `#ffffff` background + `#191f28` text + `0px 2px 4px rgba(0,0,0,0.06)` shadow
- Font: 14px / 600
- Use: Section switching within a screen (월/주/일 전환)

### Toasts

**Default**
- Background: `#191f28`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0px 4px 12px rgba(0,0,0,0.12)`
- Font: 14px / 500
- Use: Auto-dismissing transient notification ("복사되었습니다"). Primary success confirmations use a dedicated screen or structured view, never just a simple toast.

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Text: `#191f28`
- Border: none
- Radius: 16px
- Padding: 24px
- Shadow: `0px 4px 12px rgba(0,0,0,0.12)`
- Use: AlertDialog / ConfirmDialog for confirmation prompts

**Bottom Sheet**
- Background: `#ffffff`
- Text: `#191f28`
- Border: none
- Radius: 16px (top corners only)
- Padding: 24px 20px
- Shadow: `0px -4px 12px rgba(0,0,0,0.08)`
- Use: Bottom-attached overlay for selection, picker, or secondary inputs

### Toggles

**Default**
- Background: `#3182f6` (on) / `#d1d6db` (off)
- Border: none
- Radius: 9999px
- Thumb: `#ffffff` 18px circle with `0px 1px 2px rgba(0,0,0,0.1)` shadow
- Use: Boolean settings (알림 켜기, 자동 실행)

---

**Verified:** 2026-05-08 (full-depth validation loop)
**System Architecture:** The component geometry (e.g. 16px button radius, 17px/600 typography) coexists seamlessly across web and mobile layouts. Base geometries and interactive behaviors are designed to preserve absolute interface alignment.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Horizontal padding: 20px (slightly wider than typical 16px)
- Content grids: tighter 4px internal spacing for dense data layouts

### Grid & Container
- Design baseline: 375px mobile width
- Content: full-width with 20px horizontal padding
- No explicit multi-column grid -- single-column, mobile-first
- Data lists: full-width rows with consistent layout structure

### Whitespace Philosophy
- **Breathing room for content**: Critical metrics and main titles get extra surrounding space. A layout with 30px headings and 32px margins communicates structure and readability through spaciousness.
- **Progressive density**: Summary screens are spacious; detail and list screens are denser. The deeper you navigate, the more information-dense the layout.
- **Grouped by function**: Related actions are separated by 24px+ gaps; related items within a group use 8-12px gaps.

### Border Radius Scale
- Compact (4px): Small badges, inline elements
- Standard (8px): Inputs, small buttons, compact cards
- Comfortable (12px): Standard cards, dialog corners
- Large (16px): Featured cards, bottom sheet top corners
- Pill (9999px): Toggle switches, floating chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Subtle (Level 1) | `0px 1px 3px rgba(0,0,0,0.06)` | Slight lift, list item separation |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Cards, content panels |
| Elevated (Level 3) | `0px 4px 12px rgba(0,0,0,0.12)` | Dropdowns, popovers, floating buttons |
| Modal (Level 4) | `0px 8px 24px rgba(0,0,0,0.16)` | Bottom sheets, dialogs, modals |

**Shadow Philosophy**: Shadows are kept minimal and neutral. Visual noise undermines user experience -- elevation is communicated through subtle opacity differences rather than dramatic depth. Pure black with low opacity creates clean, clinical precision. Restraint is the key visual statement.

### Blur Effects
- Overlay components use backdrop blur for lightweight floating panels
- Navigation bar applies subtle blur on scroll for the sticky header

## 7. Do's and Don'ts

### Do
- Use Primary Blue (`#3182f6`) for all interactive elements -- links, buttons, toggles, selections
- Apply the full font stack with fallback system fonts
- Use tabular (fixed-width) numerals for structured data tables and metrics
- Use 700 weight for primary numbers and headings, 400 for body, 600 for emphasis
- Keep border-radius between 8px-16px for most elements
- Show positive changes or states in green (`#03b26c`), errors in red (`#f04452`)
- Use blue50 (`#e8f3ff`) for subtle informational backgrounds

### Don't
- Don't confuse marketing Brand Blue (`#0064FF`) with interactive UI Blue (`#3182f6`)
- Don't use heavy shadows -- rely on background color layering, not depth
- Don't use bold (700) for body text -- reserved for headings and primary metrics
- Don't mix variable-width and tabular numerals in the same data context
- Don't use warm accent colors (orange, pink) for primary actions -- blue is the sole interactive hue
- Don't use border-radius > 16px except for pills/toggles
- Don't add decorative elements to dense data displays -- clarity is the primary aesthetic

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full design fidelity, 375px baseline |
| Tablet | 480-768px | Expanded cards, optional side margins |
| Desktop (Web) | >768px | Centered column, max-width ~480px for mobile-web parity |

### Touch Targets
- Buttons: xlarge (~56px), large (~48px), medium (~40px), small (~36px)
- List items: minimum 52px row height for primary interactive actions
- Input buttons: large targets (56-64px) for secure actions

### Collapsing Strategy
- Desktop web layouts mirror mobile layouts in a centered column
- Bottom sheets transform to centered modal dialogs on larger screens
- Sticky bottom CTA bar with safe area insets on all devices
- Horizontal scrolling card carousels for content discovery

### Image Behavior
- Service and icon logos: 24-40px with consistent sizing within context
- Inline status icons: render at text size; larger display sizes for decorative use
- Charts/graphs: full-width, responsive, maintaining aspect ratio

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Primary Blue (`#3182f6`)
- CTA Hover: Blue 600 (`#2272eb`)
- Background: Pure White (`#ffffff`)
- Background Surface: Light Gray (`#f2f4f6`)
- Heading text: Dark Charcoal (`#191f28`)
- Body text: Medium Gray (`#6b7684`)
- Caption text: Gray (`#8b95a1`)
- Placeholder: Soft Gray (`#b0b8c1`)
- Border: Gray 200 (`#e5e8eb`)
- Success/Positive: Green (`#03b26c`)
- Error/Negative: Red (`#f04452`)
- Warning: Orange (`#fe9800`)

### Example Component Prompts
- "Create a metrics card: white bg, 12px radius, 20px padding. Label 14px weight 400, #8b95a1. Value 30px weight 700, #191f28, tabular numerals. Unit '개' 20px weight 400. Shadow 0px 2px 8px rgba(0,0,0,0.08)."
- "Build a primary button: #3182f6 bg, white text, 16px weight 600, min-height 56px, 12px radius, full-width. Pressed: overlay dim. Loading: 3-dot white animation."
- "Design a content row: full-width, 16px h-padding, 52px min-height. Left: 32px circle icon + name (14px weight 600, #191f28) + category (13px weight 400, #8b95a1). Right: status value (14px weight 600, #f04452 negative / #03b26c positive)."
- "Create an input group: 6 boxes, each 48px wide, 56px tall, 8px radius, 1px border #e5e8eb. Active: 2px border #3182f6. Character: 24px weight 700, centered, #191f28."
- "Design a bottom tab bar: white bg, top border 1px #e5e8eb. 4 tabs evenly spaced. Active: #3182f6 icon + #191f28 label 11px weight 500. Inactive: #b0b8c1 icon + #8b95a1 label. Tab height 56px with safe area."

### Iteration Guide
1. Always use the full typography font stack with standard fallback fonts
2. Primary interactive color is `#3182f6` (blue500) -- never `#0064FF` (marketing brand blue)
3. Numeric metrics: 700 weight, tabular numerals, aligned properly in lists
4. Grey scale has warm undertones: grey900 `#191f28`, grey50 `#f9fafb`
5. Border-radius: 8px inputs, 12px cards, 16px sheets, pill for toggles
6. Shadows are single-layer, pure black opacity, no colored tints
7. Mobile-first: design at 375px, 20px horizontal padding

---

## 10. Voice & Tone

The interface tone is calm, unhurried, zero jargon, and uses direct statements without hedging. Values and states are presented with absolute clarity. Korean is the primary voice — English UI strings are secondary translations. Sentences end in periods; buttons do not. No emoji in critical interaction contexts. 

| Context | Tone |
|---|---|
| CTAs | Imperative, short Korean verb form (`확인`, `등록하기`, `시작하기`) |
| Success toasts | Past-tense single sentence (`설정이 완료되었어요`). |
| Error messages | Specific + blameless + actionable. Never `문제가 발생했습니다`. |
| Onboarding screens | Second-person, one key concept per screen, no bullet lists. |
| Primary metrics | Bare numerals with comma separators, then the unit. `1,240,000개`, never `1.24M`. |
| Empty states | Explain the *why* in one line, offer one action. Never `데이터가 없습니다`. |
| Legal / disclosure | Formal and objective regulatory/compliance tone — formal `합니다` endings. |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `Oops`, `죄송하지만`, and vague approximations. Exact values and actionable guidance should always be preferred on primary interfaces.

## 11. Design Philosophy

This design system was created to challenge the complexity and visual noise of traditional interfaces. Traditional systems often rely on multi-colored layouts, heavy shadows, and decorative elements that compete for the user's attention. This system rejects those practices in favor of a clean, simplified aesthetic. 

The primary cerulean blue (`#3182f6`) was selected as the sole interactive color, communicating optimism and clarity. By ensuring that blue only appears where action is possible, users can navigate the interface instinctively. The system flatlines complexity by promoting one primary action per view. This requires extreme visual restraint -- shadows are single-layer black, typography is structured around a single sans-serif family, and colors are optimized through the OKLCH space for perceptual uniformity.

Every element is intentionally placed to optimize task completion, readability, and speed. The system bridges the gap between high functionality and spacious, calm presentation.

## 12. Principles

1. **Breathing room for metrics.** Key figures and data display get ≥1.5× the surrounding spacing of normal text. Generous spacing communicates stability and clarity.
2. **Progressive density.** Summary screens are spacious; detail and list views are dense. The deeper the user navigates, the more information-dense the layout.
3. **One action per screen.** If a screen has two primary buttons, it should be split into two views. Secondary actions are acceptable, but two primary CTAs are not.
4. **Blue is interaction, not decoration.** `#3182f6` appears only where the user can interact. It never decorates backgrounds, borders, or non-interactive headings.
5. **Restraint communicates stability.** Shadows are single-layer, pure black, low opacity. Visual noise is avoided to keep the interface highly credible.
6. **Korean and Latin are co-equal.** Font stacks, weights, and tabular formatting assume both scripts render simultaneously in the same context.
7. **Numbers are typography.** Primary metrics and figures use 700 weight and tabular numerals with the same care as headings, never inheriting default body-text weights.
8. **Negative space is a design asset.** If reducing padding is required to fit content, the information architecture should be simplified instead of packing elements too tightly.

## 13. Personas

*Personas below are fictional archetypes representing general product users.*

**정민 (Jeongmin), 28, Seoul.** Software engineer. Opens the app multiple times a day to check daily stats and perform routine actions. Expects immediate load times and instant feedback. Prefers clean, uncluttered interfaces.

**이선생님 (Mr. Lee), 54, Busan.** Small business owner. Uses the app to monitor workflow logs and verify client requests. Needs simple, repeatable flows without distractions. Distrusts promotional banners and values clean, detailed histories.

**예은 (Yeeun), 21, Daegu.** University student. Expects modern, responsive interfaces. Uses the app for daily communications and task scheduling. Treats the interface as an intuitive, fast messaging and productivity tool.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | Single paragraph of `grey700` body text explaining *why* the screen is empty (`아직 데이터가 없어요`), plus one suggested action as a secondary button (blue50 bg, blue500 text). Never `데이터가 없습니다`. |
| **Empty (filter cleared)** | Single line of `grey500` caption (`조건에 맞는 결과가 없어요`). No button — user resets the filter. |
| **Loading (first paint)** | Skeleton blocks matching final layout at `#f2f4f6` (grey100). Primary numeric values show `--` until resolved to prevent placeholder flicker. |
| **Loading (refresh)** | Top bar pull-down spinner in blue500. No overlay. Content stays visible with its previous values. |
| **Error (inline field)** | `#f04452` (red500) 2px border on input, error text below in 13px. One actionable sentence (`입력 정보를 다시 확인해주세요`). |
| **Error (toast)** | `#191f28` background, white 14px 400 text, 3s auto-dismiss. No icons. Bottom inset of 20px. |
| **Error (screen-blocking)** | White screen, centered message in `grey900` 16px weight 600, retry button in blue500 below. |
| **Success (inline flash)** | Brief flash of `#e8f3ff` (blue50) background behind the updated element, 300ms fade to default. |
| **Success (action confirmed)** | Dedicated confirmation screen. `#03b26c` (green500) checkmark top-center, exact value/status in 30px weight 700 below, timestamp. Single button: `확인`. |
| **Skeleton** | `#f2f4f6` blocks at exact final dimensions. 1.2s shimmer as `linear-gradient` with 8% white highlight. Rounded at component radius. |
| **Disabled** | Button opacity drops per `--button-disabled-opacity-color`. Disabled inputs keep `grey200` border to maintain layout stability. |
| **Loading inside pressed button** | Text is replaced by a 3-dot animation. Button width remains fixed to prevent double-submissions. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, small reveals, button press overlay |
| `motion-standard` | 250ms | The default — sheet opens, card expands, tab switches |
| `motion-slow` | 400ms | Emphasized transitions — success checkmarks, onboarding step advances |
| `motion-page` | 350ms | Full-screen transitions between top-level routes |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — collapsible cards, tab content |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved. Only for success checkmarks. Nowhere else. |

**Signature motions.**

1. **Metric-moves.** When a primary metric updates, the old value slides up 20px and fades out (`motion-fast / ease-exit`), and the new value slides in from below 20px (`motion-standard / ease-enter`).
2. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter` and backdrop fade to `rgba(2,9,19,0.5)`. Dismissal uses `motion-fast / ease-exit`.
3. **Success checkmark.** On confirmation screens, the checkmark draws over `motion-slow` with `ease-spring`.
4. **Reduce motion.** If `prefers-reduced-motion: reduce` is active, all `motion-*` tokens collapse to `motion-instant`.

---

## Included Components

The following components are part of this design system:

- Button
- Input
- Table
- Card
- Badge
- Tabs
- Dialog


---

## Iconography & SVG Guidelines

### Icon Library

Use a single, consistent icon library throughout the project. Recommended options:

- **Lucide React** (`lucide-react`): Default for shadcn/ui projects. 1,400+ icons, tree-shakeable, consistent 24x24 grid.
- **Radix Icons** (`@radix-ui/react-icons`): 300+ icons, 15x15 grid, minimal and geometric.
- **Heroicons** (`@heroicons/react`): 300+ icons by Tailwind team, outline and solid variants.

Pick ONE library and use it everywhere. Do not mix icon libraries within the same project.

### SVG Usage Rules

- All icons must be inline SVG components (not `<img>` tags) for color and size control.
- Icon size follows the type scale: 16px (inline), 20px (buttons), 24px (standalone).
- Icon color inherits from `currentColor` -- never hard-code fill/stroke colors.
- For custom/brand icons, export as SVG components with `currentColor` fills.
- Stroke width: 1.5px-2px for outline icons. Keep consistent across the project.

### Icon Sizing Scale

| Context | Size | Usage |
|---------|------|-------|
| Inline text | 16px (1rem) | Badges, labels, breadcrumbs |
| Button icon | 18px (1.125rem) | Icon buttons, CTA icons |
| Standalone | 24px (1.5rem) | Navigation, card icons |
| Feature | 32-48px | Hero sections, empty states |

### SVG Optimization

- Run all custom SVGs through SVGO before committing.
- Remove unnecessary attributes: `xmlns`, `xml:space`, editor metadata.
- Use `viewBox` instead of fixed `width`/`height` for scalability.


---

## Document Policies

### No Emojis

This design system must not use emojis in any UI element, component, label, status indicator, or documentation.
Use SVG icons from the chosen icon library instead. Emojis render inconsistently across platforms and break visual coherence.

- Status indicators: use colored dots or icon components, not emoji.
- Section markers: use text prefixes ("DO:" / "DON'T:") or icons, not checkmark/cross emojis.
- Navigation: use icon components, not emoji.

### Format Compliance

This document follows the Google Stitch DESIGN.md 9-section format:
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Extended with:
- Iconography & SVG Guidelines
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.
