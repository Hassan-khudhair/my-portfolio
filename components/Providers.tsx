"use client";

import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import IOSInstallBanner from './IOSInstallBanner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <IOSInstallBanner />
    </ThemeProvider>
  );
}
