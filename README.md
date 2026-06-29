# Saved-View Selector Component

## Overview

Built a reusable, system-ready dropdown component for switching between saved filtered workspace views in the canvas header. The component supports four variations (default, open, active/selected view, empty state) and uses design tokens throughout for consistency with the design system.

## Design Approach

I explored the live Integrate platform to understand UX patterns and identify where a saved-view selector would add value. The header controls the canvas, so I decided that was the right place for this feature.

I went into the Figma file to find components that would suit what I was trying to build. I looked at the existing UI control patterns already demonstrated in the header—primarily buttons with outlines. I thought about how I could differentiate this top-level control and create hierarchy with the design components already in the system. That's why I decided to go with a ghost outline style instead of adhering to the gray outlines used elsewhere—to differentiate and establish visual hierarchy.

I quickly prototyped the trigger and selector, then transitioned to code to set up my environment and configure the design tokens.

## How AI Was Used

I used Figma via MCP to extract all of the different design variants into tokens. There were some inconsistencies between the Figma file and the live app, but I was able to reconcile those through the MCP integration and working with Claude. Claude then gave me boilerplate for the buttons based on my initial Figma design. I worked with Claude to implement all of the additional functionality, like the dropdown, active states, and focus states. I had to go in and fix the errors and ensure the right styles were added correctly.

I also used Claude to help with this writeup.

## What I'd Do With More Time

1. **Storybook integration:** Document all variations and use cases
2. **Animation polish:** Smooth dropdown open/close transitions
3. **Cursor event listeners:** Close the dropdown when a user clicks outside the button or dropdown
4. **Keyboard shortcuts:** Quick-access shortcuts for switching between views
5. **Responsive behavior:** Shrink the button based on viewport size; on smaller viewports, the button becomes just an icon instead of showing the full label

## Assumptions

**Current Product Context:**
- Currently, saved views can only be toggled from the nav bar (which pulls out)
- Each saved view appears as its own sidebar menu item when nav is open
- When nav is closed, each view collapses to an icon (all identical icons)
- At scale (e.g., 100+ views), users see 100 identical icons with no affordance to differentiate without opening the nav bar
- Opening the nav bar is a required step to discover and navigate to a specific saved view
- This creates friction: users must open nav → scan for view → select it

**Design Context:**
- A dropdown/menu selector works well for the canvas header (compact, quick access)
- A dropdown may add friction in the sidebar context, where a dedicated scrollable section of saved views could allow quicker navigation
- When the sidebar is collapsed, a single saved-view icon appears (not 100 identical icons)
- The saved-view icon shows its **active variant** if the user is currently viewing a saved view, and inactive if not

## Token Usage

All styling uses design tokens from the Integrate Design System:
- **Color tokens:** Primary, secondary, background, border, text
- **Spacing tokens:** Gap, padding, margin values
- **Radius tokens:** Border radius for consistency
- **Type tokens:** Font family, size, weight, line-height

This ensures the component will adapt if the design system tokens change, and maintains visual consistency across the product.

## Build & Run

```bash
npm install
npm run dev
```

Component renders with all four variations visible side-by-side for easy comparison.