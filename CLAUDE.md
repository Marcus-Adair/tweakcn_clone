# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production (outputs to build/)
npm run preview      # Preview production build
npm run check        # Run svelte-check for type checking
npm run check:watch  # Run type checking in watch mode
```

## Project Overview

This is a SvelteKit 2 landing page showcasing a theme customization system. It's a static site (prerendered via `@sveltejs/adapter-static`) demonstrating 22 different color themes with smooth GSAP animations.

## Architecture

### Tech Stack
- **SvelteKit 2** with Svelte 5 (uses runes syntax: `$props()`, `$state()`, etc.)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **GSAP** for scroll animations, smooth scrolling, and infinite carousels
- **bits-ui** for headless UI primitives
- **tailwind-variants** (`tv()`) for component variant systems

### Key Directories
- `src/routes/` - Single-page app with `+page.svelte` as main content
- `src/lib/components/` - Reusable components
- `src/lib/components/ui/` - Shadcn-style UI primitives (button, card, accordion, etc.)
- `src/lib/stores.ts` - Svelte stores (theme state)
- `src/lib/consts.ts` - Theme names and utility classes
- `src/routes/layout.css` - All theme CSS variable definitions (OKLCH colors)

### Theming System

Themes are applied by adding a class to `<html>` (e.g., `class="bold-tech dark"`):
1. Add theme name to `THEMES` array in `src/lib/consts.ts`
2. Add CSS custom properties in `src/routes/layout.css` for both light and dark variants
3. Add `@custom-variant` declarations in layout.css for theme-specific Tailwind variants

Theme state is managed via a simple writable store in `src/lib/stores.ts`.

### Styling Patterns
- Use `cn()` utility from `src/lib/utils.ts` (combines clsx + tailwind-merge)
- Component variants use `tv()` from tailwind-variants
- Colors use OKLCH color space: `oklch(0.208 0.042 265.755)`

### Animation Patterns
- GSAP plugins: `ScrollTrigger`, `ScrollToPlugin`
- Animations initialized in `onMount()` with DOM refs via `bind:this`
- Infinite carousels use GSAP timelines with pause/resume on hover

## Static Build Configuration

The site is fully prerendered. The `BASE_PATH` environment variable controls the base path for non-dev builds (configured in `svelte.config.js`).
