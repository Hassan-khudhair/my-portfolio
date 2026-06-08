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
  authors: [{ name: "Hassan" }],
  creator: "Hassan",
  applicationName: "Hassan Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Portfolio",
  },
  openGraph: {
    title: "Hassan – Frontend Developer Portfolio",
    description:
      "Passionate Frontend Developer specializing in building exceptional digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan – Frontend Developer Portfolio",
    description: "Passionate Frontend Developer specializing in React, Next.js, and modern web.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
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
