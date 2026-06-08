'use client';

import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'ios-pwa-banner-dismissed';

function detectIOS() {
  if (typeof navigator === 'undefined') return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    // iPad on iOS 13+ reports as MacIntel with touch support
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

function detectSafari() {
  if (typeof navigator === 'undefined') return false;
  // Exclude Chrome, Firefox, Edge on iOS — they can't install PWAs
  return /^((?!chrome|android|crios|fxios|edgios|opios).)*safari/i.test(
    navigator.userAgent
  );
}

function isAlreadyInstalled() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as { standalone?: boolean }).standalone === true
  );
}

export default function IOSInstallBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      detectIOS() &&
      detectSafari() &&
      !isAlreadyInstalled() &&
      localStorage.getItem(STORAGE_KEY) !== '1'
    ) {
      // Small delay so the page loads before the banner slides in
      const t = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm animate-fade-in"
        onClick={dismiss}
      />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] animate-fade-in-up">
        {/* Arrow pointing to the share button at the very bottom of the screen */}
        <div className="flex justify-center mb-1">
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-white font-semibold bg-black/60 rounded-full px-3 py-1 backdrop-blur">
              Tap the Share button below
            </p>
            <svg className="w-5 h-5 text-white drop-shadow animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16l-6-6h12z" />
            </svg>
          </div>
        </div>

        <div className="mx-3 mb-6 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          {/* Header */}
          <div className="bg-linear-to-r from-purple-600 to-pink-600 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* App icon preview */}
              <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white text-xl font-black shadow-lg">
                &lt;/&gt;
              </div>
              <div>
                <p className="text-white font-bold text-sm">Install Portfolio App</p>
                <p className="text-white/70 text-xs">Add to your Home Screen</p>
              </div>
            </div>
            <button
              onClick={dismiss}
              className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Dismiss"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Steps */}
          <div className="bg-white dark:bg-zinc-900 px-5 py-4 space-y-4">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              3 easy steps
            </p>

            <Step number={1} icon={<ShareIcon />} title="Tap the Share button">
              The button at the bottom of your Safari screen (square with arrow pointing up)
            </Step>

            <div className="w-full h-px bg-gray-100 dark:bg-zinc-800" />

            <Step number={2} icon={<AddHomeIcon />} title="Tap "Add to Home Screen"">
              Scroll down in the share sheet and tap <strong>Add to Home Screen</strong>
            </Step>

            <div className="w-full h-px bg-gray-100 dark:bg-zinc-800" />

            <Step number={3} icon={<CheckIcon />} title="Tap "Add" to confirm">
              The portfolio app will appear on your iPhone's Home Screen
            </Step>

            <button
              onClick={dismiss}
              className="w-full py-3 rounded-xl text-sm font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors mt-1"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Step({
  number,
  icon,
  title,
  children,
}: {
  number: number;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xs font-bold">
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-gray-600 dark:text-gray-400">{icon}</span>
          <p className="text-sm font-semibold text-gray-800 dark:text-white">{title}</p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function ShareIcon() {
  return (
    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
  );
}

function AddHomeIcon() {
  return (
    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
