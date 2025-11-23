# Chandrudu Bugude - Portfolio Website

A modern, fully responsive portfolio website featuring cutting-edge animations, 3D graphics, and a professional dark theme with neon accents. Built with React, TypeScript, Tailwind CSS, and Three.js.

## 🌟 Features

- **3D Animated Hero Section** - Interactive Three.js sphere with smooth animations
- **AI-Generated Avatar** - Professional futuristic avatar with toggle option
- **Dark Neon Theme** - Electric cyan and magenta accents on dark navy base
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Smooth Animations** - Framer Motion powered transitions and interactions
- **SEO Optimized** - Complete meta tags and JSON-LD schema markup
- **Performance Optimized** - Lazy loading and optimized assets

## 📄 Sections

- **Hero** - Animated introduction with 3D background
- **About** - Professional summary and background
- **Skills** - Interactive skill tags with animations
- **Experience** - Timeline of professional experience
- **Projects** - Showcase of key projects with 3D hover effects
- **Achievements** - Awards and recognition
- **DSA Stats** - LeetCode and GeeksforGeeks statistics
- **Contact** - Contact form and social links
- **Footer** - Quick links and copyright

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## 🎨 Customization

### Replace Avatar

1. Replace the file at `src/assets/avatar.jpg` with your photo
2. Ensure the image is 512x512px or larger for best quality
3. The avatar toggle button allows switching between AI and real photo

### Replace Resume

1. Replace the file at `public/Chandrudu_Bugude_Resume.pdf` with your resume
2. Ensure the filename matches or update the links in:
   - `src/components/Hero.tsx`
   - `src/components/Navigation.tsx`
   - `index.html`

### Update Content

All content is sourced from the resume. To modify:

1. Edit component files in `src/components/`
2. Update personal information in:
   - `src/components/Hero.tsx` - Name, tagline, social links
   - `src/components/About.tsx` - Professional summary
   - `src/components/Skills.tsx` - Skills and technologies
   - `src/components/Experience.tsx` - Work experience
   - `src/components/Projects.tsx` - Project showcase
   - `src/components/Achievements.tsx` - Awards and certifications
   - `src/components/DSAStats.tsx` - Competitive programming stats
   - `src/components/Contact.tsx` - Contact information

### Customize Colors

The design system uses semantic tokens. To change colors:

1. Edit `src/index.css` - Update HSL color values
2. Main colors:
   - `--primary`: Electric cyan (default: `190 95% 60%`)
   - `--secondary`: Magenta (default: `320 85% 65%`)
   - `--accent`: Purple (default: `280 80% 70%`)
   - `--background`: Dark navy (default: `220 30% 8%`)

## 📊 Analytics Setup

### Option 1: Plausible Analytics (Free)

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Uncomment and update in `index.html`:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

### Option 2: GoatCounter (Free)

1. Sign up at [goatcounter.com](https://www.goatcounter.com)
2. Create your site
3. Uncomment and update in `index.html`:
```html
<script data-goatcounter="https://YOURNAME.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
```

## 🌐 Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the button above
2. Connect your GitHub repository
3. Site will auto-deploy on every push

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the button above
2. Import your repository
3. Deploy with default settings

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

2. Build and deploy:
```bash
npm run build
npm run deploy
```

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers
- **Framer Motion** - Animations
- **Shadcn/ui** - UI components
- **Lucide React** - Icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized animations with GPU acceleration
- Lazy loading for heavy assets

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contact

- **Email**: chandrudu461@gmail.com
- **Phone**: +91 93816 22291
- **LinkedIn**: [Chandrudu Bugude](https://www.linkedin.com/in/chandrudu-bugude-509773210)
- **GitHub**: [chandrudu](https://github.com/chandrudu)
- **LeetCode**: [Chandrudu](https://leetcode.com/Chandrudu)

---

Built with ❤️ using React & Tailwind CSS
