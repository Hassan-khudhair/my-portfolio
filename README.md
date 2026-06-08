# Frontend Developer Portfolio 🚀

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and an infinite scrolling skills showcase.

![Portfolio Preview](https://via.placeholder.com/1200x600/9333ea/ffffff?text=Your+Portfolio+Preview)

## ✨ Features

- **🎨 Modern Design**: Beautiful UI with gradients, glassmorphism, and smooth animations
- **🌓 Dark/Light Mode**: Automatic theme switching with localStorage persistence
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Performance**: Built with Next.js for optimal loading speed
- **♿ Accessible**: WCAG compliant with proper ARIA labels
- **🎭 Animations**: Smooth transitions, blob animations, and infinite scroll
- **📧 Contact Form**: Integrated email functionality
- **🎯 SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: SVG (customizable)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Add your assets** (See [SETUP.md](SETUP.md) for details)
   - Add your profile image to `public/profile.jpg`
   - Add skill icons to `public/skills/`
   - Add project screenshots to `public/projects/`

4. **Customize your data**
   - Edit `app/data/portfolioData.ts` with your information
   - Update personal info, skills, and projects

5. **Run the development server**

```bash
npm run dev
```

6. **Open** [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section with intro
│   │   ├── Skills.tsx      # Infinite scrolling skills
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Navigation.tsx  # Header navigation
│   │   └── Footer.tsx      # Footer
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/               # Data files
│   │   └── portfolioData.ts # Your portfolio data
│   ├── globals.css         # Global styles & animations
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── public/
│   ├── skills/             # Skill icons (SVG)
│   ├── projects/           # Project screenshots
│   └── profile.jpg         # Your photo
├── SETUP.md                # Detailed setup guide
└── README.md               # This file
```

## 🎨 Customization

### Update Personal Information

Edit `app/data/portfolioData.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  profileImage: "/profile.jpg",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  // ... etc
};
```

### Add Skills

```typescript
export const skills: Skill[] = [
  {
    name: "React",
    icon: "/skills/react.svg",
    category: "framework",
  },
  // Add more skills...
];
```

### Add Projects

```typescript
export const projects: Project[] = [
  {
    id: 1,
    name: "Project Name",
    description: "Project description",
    images: ["/projects/project-1.jpg"],
    demoLink: "https://demo.com",
    repoLink: "https://github.com/username/repo",
    technologies: ["React", "TypeScript"],
  },
  // Add more projects...
];
```

### Change Colors

The portfolio uses a purple-pink-cyan gradient theme. To customize:

1. **Update component files** - Search for color classes like `purple-600`, `pink-600`, `cyan-600`
2. **Update globals.css** - Modify gradient definitions and custom colors

### Modify Animations

All animations are defined in `app/globals.css`:

- `animate-blob` - Floating blob effect
- `animate-fade-in` - Fade in animation
- `animate-scroll-infinite` - Infinite horizontal scroll
- And more...

## 📧 Email Form Setup

The contact form currently uses `mailto:`. For production, integrate:

**Option 1: EmailJS** (Recommended for frontend-only)

```bash
npm install @emailjs/browser
```

See: https://www.emailjs.com/docs/

**Option 2: Next.js API Route**
Create `app/api/contact/route.ts` with your email service

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Deploy from GitHub
- **GitHub Pages**: Requires static export (`next export`)

## 📱 Sections

1. **Hero** - Introduction with name, title, and profile picture
2. **Skills** - Infinite scrolling carousel of technology logos
3. **Projects** - Showcase with images, descriptions, and links
4. **Contact** - Form to send emails directly

## 🎯 SEO

The portfolio includes:

- Meta descriptions
- Open Graph tags
- Semantic HTML
- Proper heading structure
- Alt text for images

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Icons: [Simple Icons](https://simpleicons.org/)
- Fonts: [Geist](https://vercel.com/font)
- Framework: [Next.js](https://nextjs.org/)

## 📞 Support

For detailed setup instructions, see [SETUP.md](SETUP.md)

If you have questions or need help:

- Open an issue on GitHub
- Contact via the portfolio contact form

---

Made with ❤️ and ☕ by [Your Name]

**⭐ If you found this helpful, please give it a star!**
