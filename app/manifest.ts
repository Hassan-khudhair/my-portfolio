import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hassan – Frontend Developer Portfolio',
    short_name: 'Portfolio',
    description: 'Passionate Frontend Developer specializing in React, Next.js, and modern web technologies.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#09090b',
    theme_color: '#9333ea',
    categories: ['portfolio', 'developer'],
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshot.png',
        sizes: '1280x720',
        type: 'image/png',
      },
    ],
  };
}
