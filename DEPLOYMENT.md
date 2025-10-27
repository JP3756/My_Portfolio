# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio to various platforms.

## Table of Contents
1. [GitHub Pages](#github-pages)
2. [Vercel](#vercel)
3. [Netlify](#netlify)
4. [Custom Server](#custom-server)

---

## GitHub Pages

### Prerequisites
- GitHub account
- Git installed locally
- Repository created on GitHub

### Steps

1. **Update package.json**
   
   Add your GitHub Pages URL to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name"
   }
   ```

2. **Install gh-pages** (already included)
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Repository**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select `gh-pages` branch as source
   - Save and wait for deployment

5. **Access Your Site**
   Visit `https://yourusername.github.io/repository-name`

### Troubleshooting
- **404 Error**: Ensure homepage URL in package.json matches your repo
- **Blank Page**: Check browser console for errors, may need to adjust paths
- **Build Fails**: Run `npm run build` locally first to check for errors

---

## Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts to configure your project.

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. **Visit** [vercel.com](https://vercel.com)

2. **Import Project**
   - Click "New Project"
   - Import from your GitHub repository
   - Vercel auto-detects React configuration

3. **Configure**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel provides a production URL

5. **Environment Variables** (Optional)
   - Add in Vercel dashboard under Settings → Environment Variables
   - Add `EMAIL_USER`, `EMAIL_PASS`, etc.

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Netlify

### Method 1: Drag & Drop

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Visit** [app.netlify.com/drop](https://app.netlify.com/drop)

3. **Drag & Drop**
   - Drag the `build` folder to the drop zone
   - Netlify deploys immediately

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Method 3: GitHub Integration

1. **Visit** [app.netlify.com](https://app.netlify.com)

2. **New Site from Git**
   - Connect to GitHub
   - Select your repository

3. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `build`

4. **Deploy**
   - Click "Deploy site"
   - Netlify provides a URL

### Environment Variables
- Go to Site Settings → Build & Deploy → Environment
- Add variables like `EMAIL_USER`, `EMAIL_PASS`

### Custom Domain
1. Domain Settings → Add custom domain
2. Configure DNS records as instructed

---

## Custom Server (VPS/Cloud)

### Prerequisites
- Ubuntu/Linux server (DigitalOcean, AWS EC2, etc.)
- SSH access
- Domain name (optional)

### Setup Steps

1. **Connect to Server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install Nginx**
   ```bash
   sudo apt-get update
   sudo apt-get install nginx
   ```

4. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

5. **Install Dependencies**
   ```bash
   npm install
   ```

6. **Build Project**
   ```bash
   npm run build
   ```

7. **Install PM2** (Process Manager)
   ```bash
   sudo npm install -g pm2
   ```

8. **Start Backend with PM2**
   ```bash
   pm2 start server.js --name portfolio
   pm2 save
   pm2 startup
   ```

9. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/portfolio
   ```

   Add:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           root /home/user/portfolio/build;
           try_files $uri /index.html;
       }

       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

10. **Enable Site**
    ```bash
    sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

11. **Setup SSL with Let's Encrypt**
    ```bash
    sudo apt-get install certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

12. **Firewall**
    ```bash
    sudo ufw allow 'Nginx Full'
    sudo ufw allow ssh
    sudo ufw enable
    ```

---

## Post-Deployment Checklist

- ✅ Test all pages and links
- ✅ Verify contact form functionality
- ✅ Check responsive design on mobile
- ✅ Test dark/light mode toggle
- ✅ Verify SEO meta tags
- ✅ Test page load speed
- ✅ Configure analytics (Google Analytics, etc.)
- ✅ Set up custom domain
- ✅ Enable HTTPS
- ✅ Test cross-browser compatibility

---

## Continuous Deployment

### GitHub Actions (for GitHub Pages)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy
      run: npm run deploy
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Vercel/Netlify
- Automatic deployment on git push when connected via GitHub integration

---

## Monitoring & Maintenance

1. **Performance Monitoring**
   - Google Lighthouse
   - GTmetrix
   - WebPageTest

2. **Error Tracking**
   - Sentry
   - LogRocket
   - Rollbar

3. **Analytics**
   - Google Analytics
   - Plausible
   - Fathom

4. **Uptime Monitoring**
   - UptimeRobot
   - Pingdom
   - StatusCake

---

Need help? Check the main README or open an issue on GitHub.
