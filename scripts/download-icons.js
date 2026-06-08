/**
 * Script to download skill icons from Simple Icons CDN
 * Run: node scripts/download-icons.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const skills = [
  'html5',
  'css3',
  'javascript',
  'typescript',
  'tailwindcss',
  'sass',
  'bootstrap',
  'react',
  'nextdotjs',
  'vuedotjs',
  'nuxtdotjs',
  'angular',
  'git',
  'github',
  'webpack',
  'vite',
  'npm',
  'figma',
  'redux',
  'jquery',
  'mui',
  'styledcomponents',
  'graphql',
];

const outputDir = path.join(__dirname, '..', 'public', 'skills');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadIcon(iconName, fileName) {
  return new Promise((resolve, reject) => {
    const url = `https://cdn.simpleicons.org/${iconName}`;
    const filePath = path.join(outputDir, `${fileName}.svg`);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded ${fileName}.svg`);
          resolve();
        });
      } else if (response.statusCode === 404) {
        console.log(`✗ Icon not found: ${iconName} (${fileName})`);
        resolve();
      } else {
        console.log(`✗ Error downloading ${iconName}: ${response.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      console.error(`✗ Error downloading ${iconName}:`, err.message);
      resolve();
    });
  });
}

// Mapping of icon names to file names
const iconMap = {
  'html5': 'html',
  'css3': 'css',
  'javascript': 'javascript',
  'typescript': 'typescript',
  'tailwindcss': 'tailwind',
  'sass': 'sass',
  'bootstrap': 'bootstrap',
  'react': 'react',
  'nextdotjs': 'nextjs',
  'vuedotjs': 'vue',
  'nuxtdotjs': 'nuxt',
  'angular': 'angular',
  'git': 'git',
  'github': 'github',
  'webpack': 'webpack',
  'vite': 'vite',
  'npm': 'npm',
  'figma': 'figma',
  'redux': 'redux',
  'jquery': 'jquery',
  'mui': 'mui',
  'styledcomponents': 'styled-components',
  'graphql': 'graphql',
};

async function downloadAllIcons() {
  console.log('🚀 Starting icon download...\n');
  
  for (const [iconName, fileName] of Object.entries(iconMap)) {
    await downloadIcon(iconName, fileName);
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Create placeholder icons for custom ones
  const customIcons = ['api', 'responsive', 'accessibility'];
  customIcons.forEach(iconName => {
    const filePath = path.join(outputDir, `${iconName}.svg`);
    const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <text x="12" y="12" text-anchor="middle" font-size="8" fill="currentColor">${iconName.toUpperCase()}</text>
</svg>`;
    fs.writeFileSync(filePath, placeholderSvg);
    console.log(`✓ Created placeholder ${iconName}.svg`);
  });

  console.log('\n✅ All icons processed!');
  console.log(`📁 Icons saved to: ${outputDir}`);
}

downloadAllIcons().catch(console.error);
