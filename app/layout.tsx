import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)",  color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // Extends content into iPhone notch / Dynamic Island safe area
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Hassan – Frontend Developer Portfolio",
    template: "%s | Hassan Portfolio",
  },
  description:
    "Passionate Frontend Developer specializing in building exceptional digital experiences. Expert in React, Next.js, Vue.js, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Portfolio",
  ],
  authors:         [{ name: "Hassan" }],
  creator:         "Hassan",
  applicationName: "Hassan Portfolio",

  // ── iOS PWA ──────────────────────────────────────────────
  // app/apple-icon.tsx auto-generates the <link rel="apple-touch-icon">
  // so we only configure the behaviour here:
  appleWebApp: {
    capable:         true,
    title:           "Portfolio",
    statusBarStyle:  "black-translucent",
    startupImage: [
      // iPhone 14 Pro Max (430×932 @3x)
      {
        url: "/apple-icon",
        media:
          "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      // iPhone 14 / 13 / 12 (390×844 @3x)
      {
        url: "/apple-icon",
        media:
          "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      // iPhone SE / 8 (375×667 @2x)
      {
        url: "/apple-icon",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
  },

  // ── Open Graph / Twitter ─────────────────────────────────
  openGraph: {
    title:       "Hassan – Frontend Developer Portfolio",
    description: "Passionate Frontend Developer specializing in building exceptional digital experiences.",
    type:        "website",
    locale:      "en_US",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Hassan – Frontend Developer Portfolio",
    description: "Passionate Frontend Developer specializing in React, Next.js, and modern web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
