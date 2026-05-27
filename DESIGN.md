---
name: Culinary Fresh
colors:
  surface: '#fbf9f6'
  surface-dim: '#dcdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#f0edea'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#42493d'
  inverse-surface: '#30302f'
  inverse-on-surface: '#f3f0ed'
  outline: '#72796c'
  outline-variant: '#c2c9ba'
  surface-tint: '#3c692b'
  primary: '#3c692b'
  on-primary: '#ffffff'
  primary-container: '#7fb069'
  on-primary-container: '#174207'
  inverse-primary: '#a1d489'
  secondary: '#a33e14'
  on-secondary: '#ffffff'
  secondary-container: '#ff8254'
  on-secondary-container: '#6e2100'
  tertiary: '#5e5e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#a4a39f'
  on-tertiary-container: '#393a36'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bdf1a3'
  primary-fixed-dim: '#a1d489'
  on-primary-fixed: '#052100'
  on-primary-fixed-variant: '#255015'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59b'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#812800'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is centered on a "farm-to-table" digital aesthetic. It evokes a sense of organization, health, and culinary inspiration. By combining organic tones with a structured layout, it aims to make meal planning feel less like a chore and more like a creative ritual.

The style is **Modern Minimalist with Tactile accents**. It prioritizes high legibility and generous whitespace to reduce cognitive load during the cooking process. Soft, oversized radiuses and a warm color palette move the interface away from "utility software" and toward a "lifestyle companion" experience.

## Colors
The palette is rooted in natural ingredients. 
- **Primary (Sage Green):** Used for growth, health, and primary actions related to "finalizing" or "saving."
- **Secondary (Terracotta):** An appetizing accent used for high-energy actions like "Regenerate" or highlighting nutritional high-points.
- **Tertiary (Soft Cream):** The foundational surface color. It replaces pure white to reduce eye strain and provide a premium, paper-like feel.
- **Neutral (Charcoal Olive):** A softened dark tone for text to maintain high contrast without the harshness of pure black.

## Typography
This design system utilizes a high-contrast typographic pairing. **Playfair Display** provides an editorial, sophisticated feel for recipe titles and section headers, grounding the app in a traditional culinary context. **Inter** handles all functional data, ingredient lists, and instructional steps, ensuring maximum readability even in low-light kitchen environments. 

Headlines should use tight letter-spacing to maintain a modern look, while labels and small body text should have slightly increased tracking to assist legibility.

## Layout & Spacing
The layout follows a **Fluid Grid** model. On desktop, a 12-column system is used with generous 64px margins to keep content centered and digestible. On mobile, the system collapses to a single column with 16px side margins.

Spacing follows an 8px rhythmic scale. Components like recipe cards should use "Large" (48px) vertical stack spacing to ensure the interface feels airy and unhurried. Use "Medium" (24px) padding within containers to provide a luxurious amount of internal whitespace.

## Elevation & Depth
Depth is created through **Tonal Layering** supplemented by **Ambient Shadows**. 

Surfaces do not use harsh black shadows. Instead, shadows are diffused and carry a slight warm tint (`rgba(211, 97, 53, 0.08)`) to harmonize with the Terracotta and Cream palette. 
- **Level 0 (Floor):** Cream background.
- **Level 1 (Cards):** Pure white surface with a soft 16px blur shadow.
- **Level 2 (Modals/Popovers):** Pure white surface with a 32px blur shadow and 10% more spread to indicate high priority.

## Shapes
The shape language is defined by **Softness and Circularity**. 
- Standard components (Inputs, Small Cards) use a **16px (1rem)** radius.
- Large containers (Recipe Hero Cards, Section Dividers) use a **24px (1.5rem)** radius.
- Interactive elements like Avatars and "Add" buttons are **Fully Circular (Pill)** to distinguish them from informational content.

## Components
- **Buttons:** Primary buttons use the Sage Green background with white text. The "Regenerate" button is a special high-visibility component using the Terracotta color to signify a major state change. All buttons feature a 1px inner stroke for crispness.
- **Cards:** Recipe cards feature a top-aligned image with a bottom-heavy text container. Padding inside cards is strictly 24px.
- **Avatars:** User and family member icons are always perfectly circular with a 2px Sage Green border when active.
- **Lists:** Ingredient lists use custom circular checkboxes. When checked, the item should have a 30% opacity and a strike-through to provide clear visual feedback of progress.
- **Input Fields:** Search and ingredient inputs use the Soft Cream color as a fill, with a subtle 1px border that shifts to Sage Green on focus.
- **Chips:** Used for dietary tags (e.g., "Vegan," "Gluten-Free"), these use a low-opacity version of the Primary color with dark green text for a "natural label" look.