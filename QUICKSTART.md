# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites

Before you begin, ensure you have:
- ✅ Node.js (v18 or higher) - [Download](https://nodejs.org/)
- ✅ npm (comes with Node.js)
- ✅ A code editor (VS Code recommended)
- ✅ Git (optional, for version control)

## Setup Steps

### 1. Install Dependencies

**If you encounter PowerShell execution policy error on Windows:**

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Then run:

```bash
npm install
```

This installs all required packages including:
- React 19.2.0
- Express.js
- Tailwind CSS
- Framer Motion
- AOS (Animate On Scroll)
- React Icons
- Express Validator
- And more...

### 2. Customize Your Content

**IMPORTANT:** Before running, personalize your portfolio!

Edit `src/data/portfolioData.js`:

```javascript
personal: {
  name: "Your Full Name",           // ⭐ CHANGE THIS
  title: "Your Title",               // ⭐ CHANGE THIS
  email: "your.email@example.com",   // ⭐ CHANGE THIS
  // ... update all fields
}
```

Update:
- ✅ Personal information
- ✅ About section
- ✅ Skills and levels
- ✅ Your actual projects
- ✅ Social media links

### 3. Run Development Server

Start the React development server:

```bash
npm start
```

🌐 Opens at: [http://localhost:3000](http://localhost:3000)

### 4. Start Backend Server (Optional)

For contact form functionality, in a **new terminal**:

```bash
npm run server
```

🔌 Backend runs at: [http://localhost:5000](http://localhost:5000)

**Or run both together:**

```bash
npm run dev
```

## First-Time Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Update `src/data/portfolioData.js` with your info
- [ ] Replace placeholder text in `public/index.html` meta tags
- [ ] Add your profile photo to `public/` folder
- [ ] Add project images to `public/projects/` folder
- [ ] Test the site locally (`npm start`)
- [ ] Check mobile responsiveness
- [ ] Test dark/light mode toggle
- [ ] Verify all links work

## Common Issues & Solutions

### Issue: "npm command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: "Port 3000 already in use"
**Solution:** 
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Issue: PowerShell script execution disabled
**Solution:**
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Issue: Contact form not working
**Solution:** Make sure backend is running (`npm run server`)

### Issue: Styling not applied
**Solution:** Tailwind CSS is installed. Restart dev server if needed.

## Project Structure Overview

```
my_portfolio/
├── public/               # Static files
│   ├── index.html       # ⭐ Update meta tags here
│   └── ...
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── data/
│   │   └── portfolioData.js  # ⭐ CUSTOMIZE THIS FILE
│   ├── App.js
│   └── index.js
├── server.js            # Express backend
├── package.json         # Dependencies
└── tailwind.config.js   # Styling config
```

## Next Steps

1. **Customize Content** - Update all text and images
2. **Test Locally** - Make sure everything works
3. **Build for Production** - Run `npm run build`
4. **Deploy** - Follow DEPLOYMENT.md guide
5. **Share** - Send your portfolio link to the world!

## Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server (React) |
| `npm run build` | Build for production |
| `npm run server` | Start Express backend |
| `npm run dev` | Run frontend + backend together |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm test` | Run tests |

## Key Files to Customize

| File | What to Update |
|------|----------------|
| `src/data/portfolioData.js` | All your content ⭐ |
| `public/index.html` | SEO meta tags, title |
| `tailwind.config.js` | Colors, fonts, branding |
| `.env` | Email configuration (optional) |
| `package.json` | Homepage URL for deployment |

## Tips for Success

1. **Start Small** - Get the basic info updated first
2. **Test Often** - Check after each change
3. **Mobile First** - Always test responsive design
4. **Dark Mode** - Ensure both themes look good
5. **Real Projects** - Use actual project data, not placeholders
6. **Professional Photos** - Use high-quality images
7. **Proofread** - Check all text for typos

## Getting Help

- 📖 Check `README.md` for full documentation
- 🎨 See `CUSTOMIZATION.md` for styling guide
- 🚀 Read `DEPLOYMENT.md` for deployment help
- 🐛 Review component code comments for details

## Development Workflow

```bash
# 1. Make changes to components or data
# Edit files in src/

# 2. See changes live (auto-reload)
# npm start (if not already running)

# 3. Test thoroughly
# Check all sections, links, responsiveness

# 4. Build for production
npm run build

# 5. Deploy
npm run deploy
```

## Pro Tips

💡 **Use Git for version control:**
```bash
git init
git add .
git commit -m "Initial portfolio setup"
```

💡 **Create a .env file for sensitive data:**
```bash
cp .env.example .env
```

💡 **Keep dependencies updated:**
```bash
npm outdated
npm update
```

💡 **Optimize images before adding:**
- Use TinyPNG for compression
- Recommended formats: WebP, JPG
- Max size: 500KB per image

## Ready to Launch? 🚀

1. ✅ Content updated
2. ✅ Images added
3. ✅ Tested locally
4. ✅ Everything works
5. 🚀 **Deploy following DEPLOYMENT.md**

---

**Need more help?** Check the full documentation or open an issue!

**Happy coding! 💻✨**
