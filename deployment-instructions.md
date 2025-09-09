# Manual Deployment Instructions

## Steps to deploy to your existing Netlify site:

1. **Download all project files** from this Bolt environment
2. **Zip the entire project folder**
3. **Go to your Netlify dashboard**
4. **Find your site: shimmering-sprite-28aed0.netlify.app**
5. **Go to "Deploys" tab**
6. **Drag and drop the zip file** to deploy

## Alternative: Connect to GitHub

1. **Create a new GitHub repository**
2. **Upload all these files to GitHub**
3. **In Netlify, go to Site Settings**
4. **Connect to your GitHub repository**
5. **Set build command: `npm run build`**
6. **Set publish directory: `dist`**

## Files included in this project:
- All React/TypeScript source files
- Tailwind CSS configuration
- Vite build configuration
- Contact form with Supabase integration
- Responsive design optimized for mobile

## Environment Variables (if using contact form):
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY
- RESEND_API_KEY (for email functionality)