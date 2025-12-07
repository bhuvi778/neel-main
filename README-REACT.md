# HighTech IT Solutions - React Version

This is a modern React conversion of the HighTech IT Solutions website template, built with:
- ⚛️ React 19
- ⚡ Vite 7
- 🎨 Tailwind CSS 4
- 🔄 React Router DOM 7

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Main layout wrapper
│   ├── Navbar.jsx          # Navigation bar
│   ├── Topbar.jsx          # Top info bar
│   ├── Footer.jsx          # Footer component
│   ├── Spinner.jsx         # Loading spinner
│   └── home/               # Home page components
│       ├── Hero.jsx
│       ├── Facts.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Projects.jsx
│       ├── BlogPreview.jsx
│       ├── TeamPreview.jsx
│       └── TestimonialPreview.jsx
├── pages/
│   ├── Home.jsx           # Home page
│   ├── About.jsx          # About page
│   ├── Services.jsx       # Services page
│   ├── Projects.jsx       # Projects page
│   ├── Team.jsx           # Team page
│   ├── Testimonial.jsx    # Testimonials page
│   ├── Blog.jsx           # Blog page
│   ├── Contact.jsx        # Contact page
│   └── NotFound.jsx       # 404 page
├── App.jsx                # Main app with routing
├── main.jsx               # App entry point
└── index.css              # Global styles with Tailwind

## Features Converted

✅ Responsive navigation with mobile menu
✅ Hero carousel with automatic rotation
✅ Statistics/Facts counter section
✅ About section with overlapping images
✅ Services grid with hover effects
✅ Projects gallery with hover overlays
✅ Blog cards with author info
✅ Team member cards with social links
✅ Testimonials carousel
✅ Contact form with validation
✅ Footer with multiple columns
✅ Smooth page transitions
✅ Tailwind CSS utility classes

## Running the Project

### Development Server
```bash
npm run dev
```
Access at: http://localhost:5173/

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Pages

- **Home** (`/`) - Complete homepage with all sections
- **About** (`/about`) - Company information
- **Services** (`/services`) - IT services offered
- **Projects** (`/projects`) - Portfolio showcase
- **Team** (`/team`) - Team members
- **Testimonials** (`/testimonial`) - Client reviews
- **Blog** (`/blog`) - Latest articles
- **Contact** (`/contact`) - Contact form and info
- **404** - Page not found

## Key Differences from Original

1. **No jQuery** - Pure React implementation
2. **No Bootstrap** - Replaced with Tailwind CSS
3. **No Owl Carousel** - Custom React carousel components
4. **Client-side Routing** - React Router for navigation
5. **Component-based** - Modular, reusable components
6. **Modern Stack** - Latest React and Vite features

## Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#06A3DA',    // Main brand color
  secondary: '#191C24',  // Secondary color
}
```

### Fonts
Fonts are loaded from Google Fonts:
- Inter (body text)
- Saira (headings)

## Notes

- All images are referenced from the `img/` folder in the public directory
- Font Awesome icons are loaded via CDN in `index-react.html`
- The site is fully responsive and works on all device sizes
- All animations use Tailwind's built-in utilities or CSS transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Same as original template - ISC License
