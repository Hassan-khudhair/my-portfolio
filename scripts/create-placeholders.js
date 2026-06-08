/**
 * Script to create placeholder project images
 * Run: node scripts/create-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, '..', 'public', 'projects');

// Create directory if it doesn't exist
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

const placeholders = [
  { name: 'ecommerce-1.svg', title: 'E-Commerce', color: '#9333ea' },
  { name: 'ecommerce-2.svg', title: 'E-Commerce', color: '#ec4899' },
  { name: 'dashboard-1.svg', title: 'Dashboard', color: '#06b6d4' },
  { name: 'weather-1.svg', title: 'Weather App', color: '#10b981' },
  { name: 'weather-2.svg', title: 'Weather App', color: '#f59e0b' },
  { name: 'tasks-1.svg', title: 'Task Manager', color: '#8b5cf6' },
  { name: 'blog-1.svg', title: 'Blog Platform', color: '#ef4444' },
  { name: 'blog-2.svg', title: 'Blog Platform', color: '#3b82f6' },
  { name: 'blog-3.svg', title: 'Blog Platform', color: '#14b8a6' },
];

function createPlaceholderSVG(title, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <!-- Background -->
  <defs>
    <linearGradient id="grad-${color.substring(1)}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color}dd;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1200" height="800" fill="url(#grad-${color.substring(1)})"/>
  
  <!-- Grid pattern -->
  <defs>
    <pattern id="grid-${color.substring(1)}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="url(#grid-${color.substring(1)})"/>
  
  <!-- Browser window mockup -->
  <g transform="translate(100, 100)">
    <!-- Window -->
    <rect width="1000" height="600" rx="10" fill="rgba(255,255,255,0.95)"/>
    
    <!-- Browser bar -->
    <rect width="1000" height="50" rx="10" fill="rgba(0,0,0,0.05)"/>
    <rect y="50" width="1000" height="1" fill="rgba(0,0,0,0.1)"/>
    
    <!-- Browser dots -->
    <circle cx="25" cy="25" r="6" fill="#ff5f56"/>
    <circle cx="50" cy="25" r="6" fill="#ffbd2e"/>
    <circle cx="75" cy="25" r="6" fill="#27c93f"/>
    
    <!-- Content area -->
    <rect y="80" x="40" width="920" height="40" rx="5" fill="rgba(0,0,0,0.05)"/>
    <rect y="140" x="40" width="600" height="200" rx="5" fill="${color}22"/>
    <rect y="140" x="660" width="300" height="95" rx="5" fill="rgba(0,0,0,0.05)"/>
    <rect y="245" x="660" width="300" height="95" rx="5" fill="rgba(0,0,0,0.05)"/>
    <rect y="360" x="40" width="920" height="20" rx="5" fill="rgba(0,0,0,0.03)"/>
    <rect y="395" x="40" width="920" height="20" rx="5" fill="rgba(0,0,0,0.03)"/>
    <rect y="430" x="40" width="700" height="20" rx="5" fill="rgba(0,0,0,0.03)"/>
  </g>
  
  <!-- Project title -->
  <text x="600" y="750" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" opacity="0.9">
    ${title}
  </text>
  
  <!-- Placeholder text -->
  <text x="600" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="white" opacity="0.7">
    PROJECT SCREENSHOT PLACEHOLDER
  </text>
</svg>`;
}

placeholders.forEach(({ name, title, color }) => {
  const filePath = path.join(projectsDir, name);
  const svgContent = createPlaceholderSVG(title, color);
  fs.writeFileSync(filePath, svgContent);
  console.log(`✓ Created ${name}`);
});

console.log('\n✅ All project placeholders created!');
console.log(`📁 Placeholders saved to: ${projectsDir}`);
console.log('\n💡 Replace these with actual project screenshots for your portfolio');
