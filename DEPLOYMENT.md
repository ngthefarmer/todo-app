# Deployment Guide

## Deploy to Vercel

### Quick Deploy (Recommended)

1. Visit https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `ngthefarmer/todo-app`
5. Select branch: `claude/add-claude-documentation-UDbsU`
6. Click "Deploy"

Vercel will automatically:
- Detect Vite configuration
- Run `npm run build`
- Deploy to a public URL

### Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Confirm settings
# - Deploy
```

### Environment Variables

If you need environment variables:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add variables

### Custom Domain

To add a custom domain:
1. Go to Project Settings
2. Navigate to Domains
3. Add your domain
4. Update DNS records as instructed

## Deploy to Netlify

### Drag & Drop Deploy

```bash
# Build the project
npm run build

# Go to https://app.netlify.com/drop
# Drag the 'dist' folder to the drop zone
```

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

## Deploy to GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

## Environment Configuration

For production builds, create a `.env.production` file if needed:

```env
VITE_API_URL=https://api.yourapp.com
```

## Auto-Deploy on Push

Both Vercel and Netlify support automatic deployments:
- Connect your GitHub repository
- Every push to main/selected branch triggers deployment
- Preview deployments for pull requests

## Build Settings

Default Vite build settings (auto-detected):

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x or higher

## Troubleshooting

### Build Fails
- Check Node.js version (should be 16+)
- Clear cache: `npm clean-install`
- Check build logs for specific errors

### App Not Loading
- Verify all dependencies are in `package.json`
- Check browser console for errors
- Ensure environment variables are set

### Routing Issues (404 on refresh)
Vite handles this automatically with its routing setup. If using custom routing:
- Add `vercel.json` for Vercel
- Add `_redirects` for Netlify
