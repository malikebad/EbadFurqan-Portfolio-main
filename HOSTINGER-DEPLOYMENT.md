# Hostinger Deployment Configuration

## Project Structure
This is a React/TypeScript application built with Vite for static hosting on Hostinger shared hosting.

## Deployment Requirements
- Node.js 18+ (automatically detected from package.json)
- Static file hosting capability
- .htaccess support (for SPA routing)

## Deployment Steps for Hostinger

### Method 1: Using Hostinger File Manager (Recommended)

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Hostinger:**
   - Compress the `dist` folder contents
   - Upload via Hostinger File Manager to your domain's public_html folder
   - Extract the contents

3. **Alternative - Git deployment:**
   - If you have SSH access, clone the repository
   - Run `npm install && npm run build`
   - Copy `dist` contents to public_html

### Method 2: Automated Deployment Script

For continuous deployment, you can set up a deployment script:

```bash
#!/bin/bash
# deploy.sh
echo "Starting deployment..."
npm install
npm run build
echo "Build complete. Upload dist/ contents to your web server."
```

### Important Notes

- The `dist` folder contains all files needed for production
- The `.htaccess` file is included for proper SPA routing
- No server-side processing is required (Node.js/PHP)
- All assets are optimized and minified

## Environment Variables
- Set `GEMINI_API_KEY` in your hosting environment if using server-side features
- For client-side API calls, the key is injected during build

## Troubleshooting
- Ensure .htaccess is uploaded (enables proper routing)
- Check browser console for any resource loading errors
- Verify all files from dist/ are uploaded correctly