# Portfolio Setup Instructions

## 📁 Required Assets

You need to add the following images to your portfolio:

### 1. Profile Image

- **Location**: `public/profile.jpg`
- **Recommended size**: 400x400px or larger (square)
- **Description**: Your professional photo

### 2. Skill Icons

Create a `public/skills` folder and add the following SVG icons:

You can download free SVG icons from these sources:

- [Simple Icons](https://simpleicons.org/) - Brand logos
- [Devicon](https://devicon.dev/) - Developer icons
- [Iconify](https://icon-sets.iconify.design/) - Large collection

Required skill icons (save as lowercase .svg):

- `html.svg`
- `css.svg`
- `javascript.svg`
- `typescript.svg`
- `tailwind.svg`
- `sass.svg`
- `bootstrap.svg`
- `react.svg`
- `nextjs.svg`
- `vue.svg`
- `nuxt.svg`
- `angular.svg`
- `git.svg`
- `github.svg`
- `webpack.svg`
- `vite.svg`
- `npm.svg`
- `figma.svg`
- `redux.svg`
- `jquery.svg`
- `mui.svg`
- `styled-components.svg`
- `graphql.svg`
- `api.svg`
- `responsive.svg`
- `accessibility.svg`

### 3. Project Images

Create a `public/projects` folder and add screenshots of your projects:

- `ecommerce-1.jpg`, `ecommerce-2.jpg`
- `dashboard-1.jpg`
- `weather-1.jpg`, `weather-2.jpg`
- `tasks-1.jpg`
- `blog-1.jpg`, `blog-2.jpg`, `blog-3.jpg`

**Note**: Use actual screenshots of your projects or create placeholder images (1200x800px recommended)

## 🔧 Configuration

Edit the following file to customize your portfolio:

### `app/data/portfolioData.ts`

1. **Update Personal Information**:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description...",
  profileImage: "/profile.jpg",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

2. **Add/Remove Skills**:
   Update the `skills` array with your actual skills

3. **Add Your Projects**:
   Update the `projects` array with your real projects

## 🎨 Quick Setup with Placeholders

If you want to see the portfolio immediately, you can:

1. Create a simple profile image or use a placeholder
2. For skill icons, you can temporarily use emoji or download from the sources above
3. For project images, use placeholder services like:
   - https://via.placeholder.com/1200x800
   - https://picsum.photos/1200/800

## 🚀 Running the Project

```bash
npm run dev
```

Then open http://localhost:3000

## 📧 Email Form Setup

The contact form currently uses `mailto:` which opens the user's email client.

For a production setup, consider these options:

1. **EmailJS**: Free email service for frontend
   - Visit https://www.emailjs.com/
   - Follow their React integration guide

2. **FormSpree**: Simple form backend
   - Visit https://formspree.io/

3. **Custom Backend**: Create your own API route in Next.js

## 🎨 Customization

### Colors

The portfolio uses a purple-pink-cyan gradient theme. To change:

- Edit colors in component files
- Modify CSS variables in `globals.css`

### Fonts

Currently using Geist Sans. To change:

- Edit `app/layout.tsx`
- Import from Google Fonts or use system fonts

### Animations

All animations are in `globals.css`. Adjust timing and effects as needed.

## 📱 Features

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode with localStorage persistence
✅ Smooth scrolling navigation
✅ Infinite scrolling skills carousel
✅ Project image carousel
✅ Contact form with validation
✅ SEO optimized
✅ Accessible (WCAG compliant)
✅ Modern animations and effects

## 🐛 Troubleshooting

### Images not showing

- Make sure images are in the `public` folder
- Check file names match exactly (case-sensitive)
- Restart dev server after adding images

### Dark mode not working

- Clear localStorage: `localStorage.clear()`
- Check browser console for errors

### Animations not smooth

- Ensure you're using modern browser
- Check browser hardware acceleration settings

## 📝 Notes

- All data is stored in `app/data/portfolioData.ts` for easy maintenance
- Components are in `app/components/`
- The portfolio is a single page application with smooth scrolling
- All sections have unique IDs for navigation
- Theme persists across browser sessions
