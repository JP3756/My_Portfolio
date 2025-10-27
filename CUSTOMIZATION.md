# Customization Guide

This guide will help you personalize your portfolio to match your brand and showcase your work.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Styling & Branding](#styling--branding)
3. [Content Management](#content-management)
4. [Adding Features](#adding-features)

---

## Personal Information

All personal data is centralized in **`src/data/portfolioData.js`**. This makes updates easy and consistent.

### Update Your Details

```javascript
export const portfolioData = {
  personal: {
    name: "Your Full Name",
    title: "Your Professional Title",
    tagline: "Your professional tagline or mission statement",
    email: "your.email@example.com",
    location: "Your City, Country",
    avatar: "/avatar.jpg", // Add your image to public folder
  },
  // ... rest of config
};
```

### About Section

```javascript
about: {
  description: `Your professional bio. Talk about your background, 
  specialization, and what drives you as a developer.`,
  highlights: [
    "Key achievement or skill #1",
    "Key achievement or skill #2",
    "Key achievement or skill #3",
    "Key achievement or skill #4"
  ]
},
```

### Skills

Update skill categories with your actual proficiencies:

```javascript
skills: {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    // Add more languages
  ],
  frameworks: [
    { name: "React.js", level: 90 },
    // Add more frameworks
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    // Add more tools
  ],
  soft: [
    "Problem Solving",
    "Team Leadership",
    // Add soft skills
  ]
},
```

**Level Guide:**
- 90-100: Expert/Advanced
- 75-89: Proficient
- 60-74: Intermediate
- Below 60: Beginner

### Projects

Add your real projects:

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Detailed description of what the project does",
    technologies: ["Tech1", "Tech2", "Tech3"],
    image: "/projects/project-image.jpg",
    liveUrl: "https://live-demo-url.com",
    githubUrl: "https://github.com/username/repo",
    featured: true // Shows in featured filter
  },
  // Add more projects
]
```

### Social Links

```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "mailto:your.email@example.com",
},
```

---

## Styling & Branding

### Color Scheme

Edit **`tailwind.config.js`**:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',   // Lightest
        100: '#e0f2fe',
        // ... adjust to your brand colors
        500: '#0ea5e9',  // Main brand color
        600: '#0284c7',
        900: '#0c4a6e',  // Darkest
      },
    },
  },
}
```

**Tools to help:**
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors.co](https://coolors.co/)

### Fonts

**Change fonts** in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;700&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  display: ['Display Font', 'system-ui', 'sans-serif'],
},
```

**Recommended font combinations:**
- Inter + Poppins (current)
- Roboto + Montserrat
- Open Sans + Raleway
- Work Sans + Merriweather

### Dark Mode Colors

Customize dark theme in `tailwind.config.js`:

```javascript
dark: {
  bg: '#0f172a',      // Background
  card: '#1e293b',    // Card background
  border: '#334155',  // Border color
}
```

### Custom Animations

Add custom animations in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in',
  'slide-up': 'slideUp 0.5s ease-out',
  // Add your own
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  // Add custom keyframes
}
```

---

## Content Management

### Adding Images

1. **Profile Picture**
   - Add to `public/` folder
   - Update in `portfolioData.js`: `avatar: "/your-photo.jpg"`

2. **Project Images**
   - Create `public/projects/` folder
   - Add images there
   - Reference: `image: "/projects/project-name.jpg"`

3. **Favicon**
   - Replace `public/favicon.ico`
   - Update sizes: 16x16, 32x32, 192x192

### SEO Optimization

Update **`public/index.html`**:

```html
<meta name="description" content="Your portfolio description" />
<meta name="keywords" content="Your, Key, Skills, Here" />
<meta name="author" content="Your Name" />

<!-- Open Graph -->
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="%PUBLIC_URL%/og-image.jpg" />
```

**Create og-image.jpg:**
- Size: 1200x630px
- Add to `public/` folder
- Include your name and title

### Navigation

Add/remove sections in `src/data/portfolioData.js`:

```javascript
navigation: [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" }, // New section
  { name: "Contact", href: "#contact" },
]
```

---

## Adding Features

### 1. Blog Section

**Create** `src/components/Blog.js`:

```javascript
import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "Blog Post Title",
      excerpt: "Brief description",
      date: "2025-01-01",
      url: "https://your-blog.com/post"
    }
  ];

  return (
    <section id="blog" className="section-padding">
      {/* Blog content */}
    </section>
  );
};

export default Blog;
```

**Add to App.js:**

```javascript
import Blog from './components/Blog';

// In JSX
<Blog />
```

### 2. Testimonials

Create `src/components/Testimonials.js` following the same pattern as other components.

### 3. Resume Download

Add to Hero section:

```javascript
<a
  href="/resume.pdf"
  download
  className="btn btn-primary"
>
  Download Resume
</a>
```

Add `resume.pdf` to `public/` folder.

### 4. Google Analytics

Add to `public/index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Contact Form Email

**Configure in `.env`:**

```
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your.email@gmail.com
```

**Gmail Setup:**
1. Enable 2FA on Google Account
2. Generate App Password
3. Use that as EMAIL_PASS

**Uncomment code in `server.js`** (lines 60-80).

### 6. Loading Animation

Create `src/components/Loader.js`:

```javascript
import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-bg z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-500"></div>
  </div>
);

export default Loader;
```

Add to App.js with lazy loading.

---

## Component Customization

### Navbar

**Change logo/branding:**

```javascript
// In Navbar.js
<a href="#home" className="font-display text-2xl font-bold">
  YourLogo {/* Or use <img> */}
</a>
```

### Hero

**Adjust layout:**
- Change text sizes in className
- Modify button styles
- Add background effects

### Projects

**Change grid layout:**

```javascript
// In Projects.js
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 3 columns instead of 2 */}
</div>
```

### Skills

**Use different visualization:**
- Replace progress bars with pie charts
- Use icon-based display
- Create animated cards

---

## Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress with TinyPNG
   - Lazy load images

2. **Code Splitting**
   ```javascript
   const Blog = React.lazy(() => import('./components/Blog'));
   ```

3. **Minimize Bundle Size**
   - Tree-shake unused dependencies
   - Use production builds

4. **Cache Strategy**
   - Configure service workers
   - Set proper cache headers

---

## Advanced Customization

### Custom Hooks

Create `src/hooks/useScrollSpy.js` for advanced scroll tracking.

### Context for Global State

Extend `ThemeContext` or create new contexts for app-wide state.

### Animation Library Integration

Install and use:
- GSAP for advanced animations
- Lottie for JSON animations
- Three.js for 3D effects

---

## Testing Your Changes

1. **Run locally:**
   ```bash
   npm start
   ```

2. **Check responsiveness:**
   - Test on mobile, tablet, desktop
   - Use Chrome DevTools device emulator

3. **Test dark mode:**
   - Toggle theme multiple times
   - Check all sections in both modes

4. **Validate:**
   - HTML validator
   - Lighthouse score
   - Cross-browser testing

---

## Getting Help

- Check the main README
- Review component code comments
- Open an issue on GitHub
- Join community discussions

Happy customizing! 🎨
