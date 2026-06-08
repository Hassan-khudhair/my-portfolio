'use client';

import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'ios-pwa-banner-dismissed';

// ── Safe localStorage helpers (throws in Safari Private Browsing) ──
function storageGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function storageSet(key: string, val: string) {
  try { localStorage.setItem(key, val); } catch { /* private mode */ }
}

// ── Detection helpers ─────────────────────────────────────────────
function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) return true;
  // iPadOS 13+ shows as MacIntel but has touch support
  return /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
}

function isSafariBrowser(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  // Must include "Safari" and must NOT include any of the iOS browser wrappers
  return (
    /Safari/i.test(ua) &&
    !/CriOS|FxiOS|EdgiOS|OPiOS|chrome|android/i.test(ua)
  );
}

function isAlreadyInstalled(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

// ── Component ─────────────────────────────────────────────────────
export default function IOSInstallBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // All guards in one place so a throw from storageGet never crashes things
    try {
      if (
        isIOS() &&
        isSafariBrowser() &&
        !isAlreadyInstalled() &&
        storageGet(STORAGE_KEY) !== '1'
      ) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // Silently bail — don't let banner detection break the app
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    storageSet(STORAGE_KEY, '1');
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-90 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Panel — safe-area-inset-bottom pushes it above the iPhone home bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-100 animate-fade-in-up"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}
      >
        <div className="mx-3 mb-3 rounded-2xl overflow-hidden shadow-2xl border border-white/10">

          {/* ── Header ─────────────────────────────────────────── */}
          <div className="bg-linear-to-r from-purple-600 to-pink-600 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white text-xl font-black shadow-lg select-none">
                &lt;/&gt;
              </div>
              <div>
                <p className="text-white font-bold text-sm">Add to Home Screen</p>
                <p className="text-white/70 text-xs">Install this portfolio as an app</p>
              </div>
            </div>
            <button
              onClick={dismiss}
              className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Dismiss install banner"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Steps ──────────────────────────────────────────── */}
          <div className="bg-white dark:bg-zinc-900 px-5 py-5 space-y-4">

            {/* Step 1 */}
            <Step number={1} title="Tap the Share button in Safari">
              <div className="flex items-center gap-2 mt-0.5">
                {/* Actual iOS share icon shape */}
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                  <IOSShareIcon />
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  The button at the bottom of your Safari browser
                </span>
              </div>
            </Step>

            <Divider />

            {/* Step 2 */}
            <Step number={2} title='"Add to Home Screen"'>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Scroll down in the share sheet and tap{' '}
                <strong className="text-gray-700 dark:text-gray-300">Add to Home Screen</strong>
              </p>
            </Step>

            <Divider />

            {/* Step 3 */}
            <Step number={3} title='Tap "Add" to confirm'>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                The app icon will appear on your iPhone Home Screen
              </p>
            </Step>

            <button
              onClick={dismiss}
              className="w-full py-3 rounded-xl text-sm font-medium text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────

function Divider() {
  return <div className="h-px bg-gray-100 dark:bg-zinc-800" />;
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xs font-bold">
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 dark:text-white leading-snug">{title}</p>
        {children}
      </div>
    </div>
  );
}

/** Matches the real iOS Safari share button (square with upward arrow) */
function IOSShareIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {/* Arrow up */}
      <path d="M12 3v13" />
      <path d="M8.5 6.5L12 3l3.5 3.5" />
      {/* Box */}
      <path d="M8 11H5a1 1 0 00-1 1v7a1 1 0 001 1h14a1 1 0 001-1v-7a1 1 0 00-1-1h-3" />
    </svg>
  );
}
