# Global Reviews Press - React Website

A complete, production-ready React website for Global Reviews Press, featuring 7 main pages covering journals, authors, reviewers, editors, and contact information.

## Features

✓ **Pixel-Perfect Design** - Faithfully recreated from reference screenshots
✓ **Responsive Layout** - Fully responsive for desktop (1440px), tablet (768px), and mobile (360px)
✓ **Smooth Animations** - Framer Motion animations for engaging UI
✓ **React Router** - Complete SPA routing with 10+ pages
✓ **Tailwind CSS** - Modern styling with custom color palette
✓ **Performance Optimized** - Production build optimized and minified
✓ **Accessible** - Semantic HTML with ARIA attributes
✓ **SEO Ready** - Proper heading structure and meta information

## Pages

- **Home** (`/`) - Hero, features, journal categories, news & events
- **About Us** (`/about`) - Mission, vision, values, team information
- **Journals & Magazines** (`/journals`) - Complete journal listing with categories
- **Why Publish With Us** (`/why-publish-us`) - Benefits, process, testimonials
- **Information for Reviewers** (`/reviewer`) - Reviewer benefits and guidelines
- **Information for Editors** (`/editors-information`) - Editor roles and responsibilities
- **Contact Us** (`/contact`) - Contact form, office locations, FAQ
- **For Authors** (`/authors`) - Submission information
- **Indexing** (`/indexing`) - Database indexing information
- **News & Events** (`/news`) - Latest updates
- **404 Page** (`/*`) - Custom not found page

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JavaScript (ES6+)** - No TypeScript

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Server

```bash
npm run dev
```

Runs the app at `http://localhost:5173`

The dev server supports hot module replacement (HMR) for instant updates during development.

## Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

## Project Structure

```
grp-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation & top bar
│   │   ├── Footer.jsx          # Footer with links & info
│   │   ├── Logo.jsx            # Logo component
│   │   └── ScrollToTop.jsx     # Auto-scroll to top on route change
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Journals.jsx
│   │   ├── WhyPublishUs.jsx
│   │   ├── Reviewer.jsx
│   │   ├── EditorsInformation.jsx
│   │   ├── Contact.jsx
│   │   ├── Authors.jsx
│   │   ├── Indexing.jsx
│   │   ├── News.jsx
│   │   └── NotFound.jsx
│   ├── assets/
│   │   └── logo/
│   │       └── logo.png        # Company logo
│   ├── App.jsx                 # Main app with routing
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── public/
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── README.md
```

## Responsive Design

Tested and optimized for:
- **Desktop**: 1440px, 1280px, 1024px
- **Tablet**: 768px, 768px
- **Mobile**: 430px, 390px, 360px

No horizontal scrolling on any device. All content is properly accessible and readable.

## Color Palette

- **Primary Dark**: #0d47a1
- **Primary Medium**: #2563eb
- **Primary Light**: #4b9ef5
- **Accent Green**: #22a447
- **Accent Orange**: #ff8c42
- **Accent Yellow**: #ffc107
- **Accent Red**: #d32f2f
- **Accent Purple**: #7c3aed
- **Accent Teal**: #0891b2

## Components

### Header
- Sticky navigation with active link highlighting
- Mobile hamburger menu with smooth animations
- Top information bar with contact details
- Submit Manuscript button

### Footer
- Multi-column footer with organized links
- Social media icons
- Copyright and policy links
- Contact information

### Pages
Each page includes:
- Unique hero section
- Content sections with animations
- Responsive grid layouts
- Call-to-action buttons
- Database indexing logos

## Forms

### Contact Form
- Client-side validation
- Name, email, subject, inquiry type, message
- Privacy policy checkbox
- Success state feedback
- No backend required (frontend only)

## Animations

- **Hero text entrance** - Fade and slide animations
- **Section reveals** - Scroll-triggered animations with Framer Motion
- **Card hover effects** - Subtle lift and shadow on hover
- **Button interactions** - Smooth transitions
- **Mobile menu** - Smooth slide-in animation
- **Reduced motion support** - Respects user preferences

## Performance

- **Optimized CSS**: 7.17 kB (gzipped: 2.10 kB)
- **Optimized JS**: 449 kB (gzipped: 129 kB)
- **Fast load times**: Vite's lightning-fast development experience
- **Code splitting**: Automatic route-based splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML structure
- ARIA labels for navigation
- Focus-visible states on interactive elements
- Proper heading hierarchy
- Descriptive alt text
- Keyboard navigation support

## Customization

### Colors
Edit color values in `src/index.css` or use Tailwind classes in components.

### Fonts
Change font families in `src/index.css`:
- Heading: 'Lora' (serif)
- Body: 'Inter' (sans-serif)

### Content
Update text and links in respective component files. All content is hardcoded for simplicity.

### Logo
Replace `src/assets/logo/logo.png` with your custom logo.

## Known Issues

None - the project builds and runs successfully with no console errors.

## Future Enhancements

- Backend integration for form submissions
- CMS integration for dynamic content
- Advanced search functionality
- User authentication
- Journal submission portal
- Analytics integration

## License

This project is created for Global Reviews Press. All rights reserved.

## Support

For questions or issues, contact: info@globalreviewspress.com

---

**Built with React, Vite, Tailwind CSS, and Framer Motion**
