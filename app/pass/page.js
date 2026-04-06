'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppShell from '@/components/AppShell';

const INITIAL_SECONDS = 14 * 3600 + 52 * 60 + 3;

function formatDuration(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':');
}

export default function PassPage() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AppShell title="Uber Edinburgh">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-32 pt-24">
        <div className="mb-8 w-full text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-secondary">Security Authentication</span>
          <h2 className="mt-1 font-headline text-3xl font-extrabold tracking-[-0.02em] text-on-surface">Your Daily Pass</h2>
        </div>

        <div className="relative flex w-full flex-col items-center overflow-hidden rounded-[2rem] bg-surface-container-lowest p-8 shadow-[0_12px_32px_rgba(26,28,28,0.06)]">
          <div className="mb-8 flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-secondary"></span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">Access Granted</span>
          </div>

          <div className="group relative mb-8 rounded-3xl p-1">
            <div className="qr-gradient-border absolute inset-0 rounded-3xl opacity-20 transition-opacity group-hover:opacity-40"></div>
            <div className="relative rounded-[1.25rem] bg-surface-container-lowest p-6 shadow-inner">
              <img
                alt="Building access QR code"
                className="h-48 w-48 mix-blend-multiply opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvzUhPABYC_-tNM9RoMO_FD4mfTGp1K_MZf7AErakJW5VClj1Pj_qVpKL1Fwvlv6GH96Kpz2cHP565M9SaQfTTN4FEXR5a7bRJuq_5DUQrgmlijCz62LC6dCx_E1SMvKaVRe1xIuCTJf7SBTa32bjgzNzp_fwLjoxuhTzTirmeje2j0bAFlLERJYf8673WeoWqw356CAo5yzRQ2Xs53m6AYAApeqvVrghgbW-qPeoP3oQE-ziwPI3nGzy-r8IICG4U6hKq2M7Ly9k"
              />
              <div className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-secondary/40"></div>
              <div className="absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-secondary/40"></div>
              <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-secondary/40"></div>
              <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-secondary/40"></div>
            </div>
          </div>

          <div className="w-full space-y-1 text-center">
            <h3 className="font-headline text-2xl font-bold text-on-surface">Laura Scott</h3>
            <p className="text-sm font-medium text-primary">Global Workplace Design + Experience Lead</p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="material-symbols-outlined text-[18px] text-outline">location_on</span>
              <span className="text-xs tracking-tight text-outline">Waverley Gate, Floor 4</span>
            </div>
          </div>

          <div className="mt-10 flex w-full items-center justify-between border-t border-outline-variant/15 px-2 pt-6">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-outline">Expires In</span>
              <span className="text-sm font-semibold tabular-nums text-on-surface">{formatDuration(secondsLeft)}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[9px] uppercase tracking-widest text-outline">Auth ID</span>
              <span className="text-sm font-semibold text-on-surface">#LS-00421</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid w-full grid-cols-2 gap-4">
          <Link href="/requests?mode=form&category=it-support" className="flex flex-col items-start rounded-2xl bg-surface-container-low p-5 text-left transition-all hover:bg-surface-container-high active:scale-95">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-lowest">
              <span className="material-symbols-outlined text-on-surface">report</span>
            </div>
            <span className="font-headline text-sm font-bold text-on-surface">Report an Issue</span>
            <span className="mt-1 text-[11px] leading-tight text-outline">Instant security help</span>
          </Link>

          <Link href="/requests?mode=form&category=office-access" className="flex flex-col items-start rounded-2xl bg-surface-container-low p-5 text-left transition-all hover:bg-surface-container-high active:scale-95">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-lowest">
              <span className="material-symbols-outlined text-on-surface">person_add</span>
            </div>
            <span className="font-headline text-sm font-bold text-on-surface">Visitor Registration</span>
            <span className="mt-1 text-[11px] leading-tight text-outline">Pre-clear your guests</span>
          </Link>
        </div>

        <div className="mt-8 flex w-full items-start gap-3 rounded-xl bg-surface-container-high/40 p-4">
          <span className="material-symbols-outlined text-[20px] text-outline">info</span>
          <p className="text-[11px] leading-relaxed text-outline">
            This digital pass is dynamic and updates every 60 seconds. Screenshots are not valid for entry.
            Please present this screen to the scanner at Gate A or B.
          </p>
        </div>
      </main>
    </AppShell>
  );
}
