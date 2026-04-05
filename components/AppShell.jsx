'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { withBasePath } from '@/lib/paths';

const desktopTabs = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/travel', label: 'Commute', key: 'travel' },
  { href: '/lunch', label: 'Lunch', key: 'lunch' },
  { href: '/book', label: 'Book', key: 'book' },
  { href: '/people', label: 'People', key: 'people' },
  { href: '/afterwork', label: 'After Work', key: 'afterwork' },
  { href: '/pass', label: 'Pass', key: 'pass' },
];

const mobileTabs = [
  { href: '/', label: 'Home', icon: 'home_work', key: 'home' },
  { href: '/travel', label: 'Commute', icon: 'commute', key: 'travel' },
  { href: '/lunch', label: 'Lunch', icon: 'restaurant', key: 'lunch' },
  { href: '/book', label: 'Book', icon: 'calendar_add_on', key: 'book' },
  { href: '/people', label: 'People', icon: 'group', key: 'people' },
  { href: '/afterwork', label: 'After', icon: 'local_bar', key: 'afterwork' },
];

const PRIMARY_AVATAR = withBasePath('/Laura.jpeg');
const FALLBACK_AVATAR = withBasePath('/laura-fallback.svg');

function Header({ title, currentTab }) {
  const [avatarSrc, setAvatarSrc] = useState(PRIMARY_AVATAR);

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#f9f9f9]/80 px-6 py-4 shadow-[0_12px_32px_rgba(26,28,28,0.06)] backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-secondary/10">
          <img
            alt="Laura"
            className="h-full w-full object-cover"
            src={avatarSrc}
            onError={() => setAvatarSrc(FALLBACK_AVATAR)}
          />
        </div>
        <h1 className="font-headline text-xl font-black tracking-tighter text-on-surface">{title}</h1>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden items-center gap-6 md:flex">
          {desktopTabs.map((tab) => (
            <Link
              key={tab.key}
              href={tab.href}
              className={`${
                currentTab === tab.key ? 'font-bold text-secondary' : 'font-medium text-primary'
              } rounded-lg px-3 py-1 transition-all hover:text-on-surface`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
        <button className="material-symbols-outlined rounded-full p-2 text-on-surface duration-200 hover:bg-surface-container-high active:scale-95">
          notifications
        </button>
      </div>
    </header>
  );
}

function BottomNav({ currentTab }) {
  return (
    <nav className="fixed bottom-0 z-50 w-full rounded-t-3xl bg-[#ffffff]/90 pb-safe shadow-[0_-8px_24px_rgba(26,28,28,0.04)] backdrop-blur-2xl md:hidden">
      <div className="mx-auto flex h-20 w-full max-w-screen-md items-center justify-around px-2">
        {mobileTabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            className={`flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-2 duration-300 active:scale-90 ${
              currentTab === tab.key
                ? 'rounded-2xl bg-surface-container-low text-secondary'
                : 'text-primary hover:text-on-surface'
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={currentTab === tab.key ? { fontVariationSettings: '"FILL" 1' } : {}}
            >
              {tab.icon}
            </span>
            <span
              className={`mt-1 truncate text-[9px] uppercase tracking-[0.05em] ${
                currentTab === tab.key ? 'font-bold' : 'font-medium'
              }`}
            >
              {tab.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default function AppShell({ title, children }) {
  const pathname = usePathname();

  const currentTabByPath = {
    '/': 'home',
    '/travel': 'travel',
    '/lunch': 'lunch',
    '/book': 'book',
    '/people': 'people',
    '/afterwork': 'afterwork',
    '/pass': 'pass',
  };

  const currentTab = currentTabByPath[pathname] ?? 'home';

  return (
    <div className="min-h-screen pb-32">
      <Header title={title} currentTab={currentTab} />
      {children}
      <BottomNav currentTab={currentTab} />
    </div>
  );
}
