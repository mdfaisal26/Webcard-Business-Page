# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 single-page application (SPA) for a web card/invitation business page. The application uses Vue Router for navigation and is built with Vue CLI 5.

**Live deployment**: https://iwedsite.netlify.app/

## Development Commands

### Setup
```bash
npm install
```

### Development server
```bash
npm run serve
```
Starts the development server with hot-reload at `http://localhost:8080` (default).

### Production build
```bash
npm run build
```
Compiles and minifies for production to the `dist/` directory.

### Linting
```bash
npm run lint
```
Runs ESLint with auto-fix. Configuration follows `plugin:vue/vue3-essential` and `eslint:recommended`.

## Architecture

### Application Structure

The app follows a simple hierarchical component structure:

```
App.vue
└── HomePage.vue (layout container)
    ├── HeaderBar.vue (sticky navigation)
    ├── <router-view> (dynamic route content)
    │   ├── ContentPage.vue (path: /)
    │   ├── AboutUs.vue (path: /about)
    │   └── FAQ.vue (path: /FAQ)
    ├── ScrollToTopButton.vue
    └── FooterPage.vue
```

**Key architectural notes**:
- `App.vue` directly renders `HomePage.vue` (not part of the router)
- `HomePage.vue` serves as the persistent layout shell containing the header, footer, and `<router-view>`
- Router changes only swap the content in the middle `<router-view>` section
- The navigation HeaderBar uses programmatic scrolling to specific section IDs on the page

### Directory Organization

- **`src/components/`**: Reusable UI components (HeaderBar, FooterPage, CarouselOne, EasySteps, WhyWedCard, FAQ, AboutUs, ContentPage, ScrollToTopButton)
- **`src/pages/`**: Page-level components (currently only HomePage.vue which acts as layout)
- **`src/assets/`**: Static assets (images, logos)
  - `CarousalPics/`: Image gallery for carousel component
- **`src/routes.js`**: Route definitions for Vue Router
- **`src/main.js`**: Application entry point with router setup

### Path Aliases

The `@` alias points to the `src/` directory (configured in `jsconfig.json`):
```javascript
import Component from '@/components/Component.vue'
```

## Styling

### Global Styles

Global styles are defined in `HomePage.vue` and apply to the entire application:

```css
:root {
  --accent-color: #a876aa;  /* Primary brand color (purple) */
  --main-transition: all 0.3s ease-in-out;
}
```

- **Font**: Montserrat (Google Fonts)
- **CSS Methodology**: Scoped styles in components with some global base styles
- **Responsive**: Mobile breakpoint at `max-width: 700px`

### Navigation Behavior

The HeaderBar implements a scroll-based sticky navigation:
- Initially transparent with dark background (`bg-dark`)
- Becomes white with shadow when scrolled past navigation height
- Transition triggered in `HomePage.vue` mounted hook via DOM manipulation
- Uses `nav.classList.add('active')` to toggle styles

## Routing and Navigation

Routes are defined in `src/routes.js`:
```javascript
{ path: '/', component: ContentPage }
{ path: '/about', component: AboutUs }
{ path: '/FAQ', component: FAQ }
```

**Custom scroll behavior**: The HeaderBar component implements programmatic scrolling to page sections using `window.scrollTo()` with smooth behavior and offset calculations (130px for fixed header).

## Configuration

- **Vue CLI**: Standard configuration in `vue.config.js` with `transpileDependencies: true`
- **Babel**: Uses `@vue/cli-plugin-babel/preset`
- **ESLint**: Configured inline in `package.json` with Vue 3 and recommended rules
- **Browser support**: Modern browsers (> 1%, last 2 versions, excluding IE 11)

## When Making Changes

- Component styles are scoped by default - use `<style scoped>` to prevent style leakage
- When adding new routes, update both `src/routes.js` and add navigation links in `HeaderBar.vue`
- Maintain the scroll offset calculation (130px) when adding scroll-to-section functionality
- Follow existing component naming: PascalCase for files, kebab-case for custom scroll target IDs
- The app uses Vue 3 Composition API is available but current components use Options API - maintain consistency with existing patterns
