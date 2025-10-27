# 🚀 Professional Node.js Portfolio

A modern, production-ready portfolio website built with **Node.js**, **Express.js**, **React**, and **Tailwind CSS**. This portfolio features a clean, professional design with dark mode support, smooth animations, and a fully functional contact form.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express)

## ✨ Features

### 🎨 **Design & UX**
- **Professional Minimalist Design** - Clean, spacious layout with elegant typography
- **Dark/Light Mode** - Theme toggle with persistence via localStorage
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Smooth Animations** - Framer Motion and AOS for engaging user experience
- **Interactive Elements** - Hover effects, transitions, and scroll animations

### 🛠️ **Technical Features**
- **React 19** - Modern React with hooks and context API
- **Express.js Backend** - API routes for contact form handling
- **Tailwind CSS** - Utility-first styling with custom configuration
- **Form Validation** - Client and server-side validation with express-validator
- **SEO Ready** - Semantic HTML and meta tags for search optimization
- **Production Ready** - Optimized build with React Scripts

### 📋 **Sections**
- **Hero** - Eye-catching landing with name, title, and social links
- **About** - Personal introduction and key highlights
- **Skills** - Interactive skill bars for languages, frameworks, and tools
- **Projects** - Portfolio showcase with filtering and live demo links
- **Contact** - Functional contact form with validation and API integration
- **Footer** - Social links and quick navigation

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables** (Optional)
   ```bash
   cp .env.example .env
   ```
   Edit `.env` to configure email settings if needed.

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Start the Express backend** (in a new terminal)
   ```bash
   npm run server
   ```
   Backend API will run at [http://localhost:5000](http://localhost:5000)

5. **Run both simultaneously**
   ```bash
   npm run dev
   ```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### 🌐 Deploy to GitHub Pages

1. **Update `package.json`** - Add your repository URL:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

   This automatically builds and pushes to the `gh-pages` branch.

### ☁️ Deploy to Vercel

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Or use the Vercel dashboard:
   - Connect your GitHub repository
   - Vercel will auto-detect the React setup
   - Click Deploy!

## 🎨 Customization

### Personalizing Your Portfolio

All content is centralized in **`src/data/portfolioData.js`**. Update this file to customize:

- **Personal Information** - Name, title, email, location
- **About Section** - Description and highlights
- **Skills** - Languages, frameworks, tools, soft skills
- **Projects** - Your portfolio projects with links and descriptions
- **Social Links** - GitHub, LinkedIn, Twitter, etc.

### Styling

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Customize in `tailwind.config.js` keyframes section

### Adding Email Functionality

To enable email notifications for contact form submissions:

1. **Configure environment variables** in `.env`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

2. **Uncomment email code** in `server.js` contact endpoint (lines 60-80)

3. **Install additional dependencies** (already included):
   - nodemailer for email sending
   - Use Gmail app password or SMTP service

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.js       # Navigation with theme toggle
│   │   ├── Hero.js         # Landing section
│   │   ├── About.js        # About section
│   │   ├── Skills.js       # Skills showcase
│   │   ├── Projects.js     # Projects portfolio
│   │   ├── Contact.js      # Contact form
│   │   └── Footer.js       # Footer section
│   ├── context/
│   │   └── ThemeContext.js # Theme management
│   ├── data/
│   │   └── portfolioData.js # Content configuration ⭐
│   ├── App.js              # Main app component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── server.js               # Express backend
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies & scripts
└── README.md               # This file
```

## 🔧 Available Scripts

- `npm start` - Start React development server (port 3000)
- `npm run build` - Build for production
- `npm run server` - Start Express backend (port 5000)
- `npm run dev` - Run both frontend and backend concurrently
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests

## 🎯 Advanced Enhancements

### 1. **Theme Persistence** ✅
Theme choice is automatically saved to localStorage and restored on page load.

### 2. **Contact Analytics** 📊
Add Google Analytics or custom tracking:

```javascript
// In Contact.js, add to handleSubmit
if (window.gtag) {
  window.gtag('event', 'contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form'
  });
}
```

### 3. **CMS Integration** 📝
Integrate with headless CMS like Contentful or Strapi:

```bash
npm install contentful
```

Then update `portfolioData.js` to fetch from CMS.

### 4. **Blog Section** ✍️
Add a blog using MDX or integrate with Dev.to/Medium APIs.

### 5. **Performance Monitoring** 📈
- Google Lighthouse
- Web Vitals reporting
- Sentry for error tracking

## 🔒 Security Best Practices

- ✅ Never commit `.env` files
- ✅ Use environment variables for sensitive data
- ⚠️ Consider adding rate limiting for contact form
- ⚠️ Configure CORS for production
- ✅ Always use HTTPS in production

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **React** - UI library
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **AOS** - Scroll animations
- **React Icons** - Icon library

---

**Made with ❤️ using React & Node.js**

⭐ **If you like this project, please give it a star!**


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
