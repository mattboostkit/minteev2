/**
 * Mintee Deployment Script
 * 
 * This script provides guidance for deploying the Mintee website to various platforms.
 * Run with: node deploy.js
 */

console.log('\n=== Mintee Deployment Guide ===\n');
console.log('The production build has been created in the "dist" directory.');
console.log('You can deploy this website using one of the following methods:\n');

console.log('1. Netlify Deployment:');
console.log('   - Install Netlify CLI: npm install -g netlify-cli');
console.log('   - Run: netlify deploy');
console.log('   - Follow the prompts to deploy your site');
console.log('   - For production deployment: netlify deploy --prod\n');

console.log('2. Vercel Deployment:');
console.log('   - Install Vercel CLI: npm install -g vercel');
console.log('   - Run: vercel');
console.log('   - Follow the prompts to deploy your site');
console.log('   - For production deployment: vercel --prod\n');

console.log('3. GitHub Pages Deployment:');
console.log('   - Create a GitHub repository for your project');
console.log('   - Push your code to the repository');
console.log('   - Enable GitHub Pages in the repository settings');
console.log('   - Set the source to the "gh-pages" branch');
console.log('   - Run: npm install -g gh-pages');
console.log('   - Run: gh-pages -d dist\n');

console.log('4. Manual Deployment:');
console.log('   - Upload the contents of the "dist" directory to your web server');
console.log('   - Ensure all files are properly transferred');
console.log('   - Configure your server to handle client-side routing\n');

console.log('Important Notes:');
console.log('- Make sure to configure environment variables on your hosting platform');
console.log('- For Stripe integration, set up the required API keys');
console.log('- For Supabase integration, configure the Supabase URL and anonymous key');
console.log('- Ensure the Gazpacho font files are properly included in the fonts directory\n');

console.log('For more information, refer to the documentation in the "docs" directory.');
