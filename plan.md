# Plan: Hulegeb Restaurant Website

## Overview
Build a premium, modern Ethiopian-inspired restaurant website for "Hulegeb" using React 19, Tailwind CSS (v4), and Framer Motion. The site will be a single-page application with smooth scrolling, responsive design, and Netlify Forms integration.

## Style & Branding
- **Colors**: Deep Green (#1B3022), Warm Gold (#D4AF37), Cream (#FDFCF0), Dark Brown (#3C2A21).
- **Typography**: Elegant serif for headings (Playfair Display or similar via Google Fonts), clean sans-serif for body (Inter).
- **Animations**: Subtle fade-ins, slide-ups using Framer Motion.

## Components & Structure
- `src/components/layout/Navbar.tsx`: Sticky, responsive navigation.
- `src/components/layout/Footer.tsx`: Links, social media, and copyright.
- `src/sections/Hero.tsx`: Catchy headline, CTA, and high-quality background.
- `src/sections/About.tsx`: Narrative about Hulegeb's tradition and quality.
- `src/sections/Menu.tsx`: Filterable menu (Starters, Main, Drinks, Desserts).
- `src/sections/Specials.tsx`: Signature dishes carousel/grid.
- `src/sections/Gallery.tsx`: Visual showcase of food and ambiance.
- `src/sections/Reservation.tsx`: Netlify-compatible form.
- `src/sections/Testimonials.tsx`: Customer reviews.
- `src/sections/Contact.tsx`: Address, map placeholder, hours.

## Technical Tasks
1. **Assets**: Generate high-quality images for Hero, Food items, and Restaurant interior.
2. **Setup**: Configure custom colors in `src/index.css` (Tailwind 4 uses CSS variables).
3. **Implementation**: Build sections one by one, ensuring responsiveness.
4. **Interactivity**: Add Framer Motion for scroll reveals and button hover effects.
5. **Form**: Ensure `data-netlify="true"` and proper attributes on the reservation form.
6. **Validation**: Check build and accessibility.

## Dependencies to Install
- `lucide-react` (already common)
- `framer-motion`
- `sonner` (already in UI components but ensure usage)
- `clsx`, `tailwind-merge` (utility for classes)
