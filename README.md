# Classic Retro Portfolio

A timeless business portfolio website with a classic retro theme, built with React.js and CSS3.

## Features

- **5 Pages**: Home, About, Projects, Templates, Contact
- **Classic Retro Theme**: Inspired by Swiss International Style and vintage print design
- **Responsive Design**: Works on all device sizes
- **Smooth Navigation**: React Router for seamless page transitions

## Tech Stack

- React.js
- CSS3 (No Tailwind)
- React Router

## Design Elements

### Color Palette
- **Cream** (#F5F2EB) - Primary background
- **Charcoal** (#1A1A1A) - Primary text
- **Gold** (#D4A574) - Accents
- **Rust** (#C73E1D) - Highlight accents
- **Paper** (#FAF8F3) - Card backgrounds

### Typography
- **Primary**: Helvetica Neue, Helvetica, Arial, sans-serif
- **Mono**: Courier New, Courier, monospace

### Key Styling
- Grid-based layouts
- Generous white space
- Left-aligned text
- Vintage borders and frames
- Subtle paper texture overlay

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.js
│   └── Footer.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Projects.js
│   ├── Templates.js
│   └── Contact.js
├── styles/
│   └── main.css
└── App.js
```

## Pages

### Home
- Hero section with animated title
- Featured projects preview
- Services showcase
- Call to action

### About
- Profile section
- Skills grid
- Work history timeline

### Projects
- Filterable project grid
- Hover effects with project details
- Category-based organization

### Templates
- Template marketplace
- Product cards with pricing
- License information

### Contact
- Contact information
- Functional contact form
- Response time expectations

## Customization

To customize the portfolio:

1. **Colors**: Edit CSS custom properties in `src/styles/main.css`
2. **Content**: Update text in respective page components
3. **Images**: Replace placeholder divs with actual image tags
4. **Projects**: Modify the `projects` array in `Projects.js`

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in the interactive watch mode.

## License

MIT
