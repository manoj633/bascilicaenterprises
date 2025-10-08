# AI Agent Instructions for Bascilica Enterprises Project

## Project Overview

This is a React-based single-page marketing website for Bascilica Enterprises, built using Vite. The project follows a component-based architecture with a focus on smooth animations and responsive design.

## Key Technical Aspects

### Architecture

- Built with React 19 and Vite 6
- Uses ES modules (`type: "module"` in package.json)
- Component-based structure in `src/components/`
- Static assets managed in `public/attached_assets/`
- Data separation pattern using `src/data/` for content configuration

### Component Structure

The main application (`App.jsx`) serves as the composition root, rendering these key sections in order:

```jsx
<Header/> → <Hero/> → <About/> → <Services/> → <WhyChoose/> →
<Portfolio/> → <Gallery/> → <Testimonials/> → <GoogleReviews/> →
<Contact/> → <Footer/>
```

### Animation Patterns

The project uses Intersection Observer for scroll-based animations:

- Elements with classes `.service-card`, `.about__feature`, `.why-choose__item`, `.testimonial`, `.portfolio__item` receive fade-in animations
- Header has dynamic transparency based on scroll position
- Animation setup happens in `App.jsx` useEffect hook

### Data Management

Content is configured through JavaScript data files in `src/data/`:

- Gallery items follow this structure:

```javascript
{
  src: string,       // Path to image in public/attached_assets
  title: string,     // Display title
  category: string,  // Filtering category
  isWide?: boolean, // Optional layout modifier
  isTall?: boolean  // Optional layout modifier
}
```

## Development Workflows

### Local Development

```bash
npm install    # Install dependencies
npm run dev    # Start dev server with HMR
npm run build  # Production build
npm run preview # Preview production build
```

### Code Style

- ESLint configuration provided via `eslint.config.js`
- React-specific rules enabled via `eslint-plugin-react-hooks`
- Component files use `.jsx` extension

### Asset Management

- Place new images in `public/attached_assets/`
  - Use `gallery/` for gallery section images
  - Use `generated_images/` for AI-generated content
- Reference assets in components using absolute paths from public root

## Common Tasks

### Adding a New Gallery Image

1. Add image file to `public/attached_assets/gallery/`
2. Add entry to `src/data/galleryData.js` following the existing structure
3. Use `isWide` or `isTall` flags if image needs special layout treatment

### Creating a New Section

1. Create component in `src/components/`
2. If needed, add data file in `src/data/`
3. Import and add component to the sequence in `App.jsx`
4. Add appropriate animation classes if scroll animations are desired

### Style Guidelines

#### BEM Naming Convention

- Follow BEM (Block Element Modifier) pattern strictly:

```css
.block {
} /* Component-level block */
.block__element {
} /* Elements within block */
.block__element--modifier {
} /* Variations of elements */

/* Example: */
.service-card {
} /* Block */
.service-card__title {
} /* Element */
.service-card--featured {
} /* Modifier */
```

#### Component Styling

- Global styles in `src/styles.css` for theme variables and resets
- Component-specific styles co-located with components
- Animation classes: `fade-in-up` for scroll animations
- Theme variables for consistent styling:

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --spacing-unit: 8px;
  --border-radius: 4px;
}
```

#### Responsive Design Rules

- Mobile-first approach using min-width media queries
- Standard breakpoints:

```css
/* Mobile (default) */
.block {
  /* styles */
}

/* Tablet (768px) */
@media (min-width: 48em) {
  /* styles */
}

/* Desktop (1024px) */
@media (min-width: 64em) {
  /* styles */
}

/* Large Desktop (1280px) */
@media (min-width: 80em) {
  /* styles */
}
```

- Use relative units (rem, em, %) over fixed units
- Flexbox/Grid for responsive layouts
- Max-width containers for content sections:

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}
```
