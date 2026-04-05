import AppShell from '@/components/AppShell';

const filters = [
  { icon: 'filter_list', label: 'All Eats', active: true },
  { icon: 'eco', label: 'Healthy' },
  { icon: 'schedule', label: 'Quick Bites' },
  { icon: 'favorite', label: 'Team Favorites' },
  { icon: 'set_meal', label: 'Sushi' },
  { icon: 'local_pizza', label: 'Italian' },
];

const favorites = [
  {
    name: 'Pacific Rim Bowls',
    rating: '4.9',
    meta: 'Healthy • Japanese • Sustainable',
    eta: '15-20 min',
    perk: 'Free Delivery',
    badge: 'Uber Benefit',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuUScXAoctmqREejjs4ZsI8f6f0sdCOZz82-RrbsCA_lrxdU5PBBF5g33VWyczgRVw9bCJsmd3rLXmdsj0j9HN5P3ykSCiCY2As7wPhHKkluI-v5kCSyvCkMU4rT1PgDDuQX7F3ByHww2lT-zdltj3gOcBXKP6bOxwlc84S5SO4Wuav9YZfZdgPMQXwYbg_fjawNhStXWhrmYW-amhJOSBxESdT_W4-yoQIb85neUSQE05w3EXHPIJI2tsNzZwCl75-8N3T76TAyQ',
  },
  {
    name: 'Moderna Pizzeria',
    rating: '4.7',
    meta: 'Italian • Team Favorite',
    eta: '20-30 min',
    perk: 'Free Delivery',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALTueD5dju2YrGhZ6Q_vxzo-rYwzdea0bgFmo3QYYVx13mm8YoSTQErysKvPR9zw_Zu0yrSXiEWbyTsR1kYNNk8KvNUPWASDKOjFf5KPerNVm2exFBPTW7xbU3ymXR-5Fn79cF4gJzxR9Q--2Ez3X_SCm5D3q0z-cVEL9CtXe2ndxKrivCv0L0sOcJVM6__N8sWtc4ar8MwkzpCf3q7zB9sRQqklmXIn53qgMbSVCGn4CzgTCJiqjdGRvy4WCpJs0IgLpj_pCTbtI',
  },
  {
    name: 'Iron Grille Burgers',
    rating: '4.5',
    meta: 'Burgers • Grill • Quick Bites',
    eta: '15 min',
    perk: 'Benefit Applied',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_yYmfMYUwUZ0L3Lxbgq_VpqCCHcgch3vF3K7s43OL_ji9jtaGAawnmZ7lIm-FF_JnObMEYUn34corVgv8yDPP4pg7hwOySaMmYeC6G9LJ79hnXoRSDEtshlTk0akxMHSQ9nlCe80wn7714XVDzqEXxBh0o6FJYZq8yGek-t5A4fHa_yRv7uNZIvwpalP35JLNvAJaIXLve7xQ-WOF2i8lz1WtIBBtN-Sr_E0vqvwiWpMqKrP10sSg6bIavCTI8cFJYADmgZI-arA',
  },
  {
    name: 'Verde Kitchen',
    rating: '4.8',
    meta: 'Salads • Healthy • Vegan',
    eta: '25 min',
    perk: 'Free Delivery',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPRBQeTQJ98WuF9BK1TEtTnsMPhEANr4NwlHCSFMA8qodFGnQQkxhGxC4URyk6YNPQh_z_RBrqJI0QO5eL8R9ut74Ul4d1_Y-3CSGw7Uli3eDfiZT4SriCh1asL24iRm7HfNXtp0FFO5jK2tSOl1i9qtM8WJ_1J6KuWKe2hContErP-lsGwr0b6QJqwNTV_hA9265K_PDgnn-OPkBItWBrvrYYkkXyCM6NiF9bqYjLI0CXhF-_IHyVFP0X8KXDzyKGkYD3rp5H8Nc',
  },
];

const nearby = [
  {
    name: 'Sakura Artisan Sushi',
    rating: '4.8',
    meta: 'Japanese • High-End • 2.4 miles',
    eta: '15-25 min',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIGieO5EoFSqB26kS2rb7SlPgQKHub-L8PYXRO9CTK5MkSwHKXuDavZWrKoLFxj4NiQivGftU_DnHPvw2VMznvCrnlCHvhod-nT9KIkMr2TsMz5m4moGV9Wc_vC7ZkatRar6dBYaAuWycdTswvEPnZdIwiRRfrEQTNSAdqflzoHhdd2CInZmQBq78Gn5-9e_sLM0MPDt_J2MDVzOwCatwDOCvezJXqvEB1eZ1fHRdnis91df3tJ8p0YsEJ2TfiA1JMpIOliBJd-Fs',
  },
  {
    name: 'Oasis Mediterranean',
    rating: '4.6',
    meta: 'Middle Eastern • Healthy • 1.1 miles',
    eta: '10-20 min',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyfSgF6D5F5rvJvQUq01zDljxGGf4RgJwAhnmyREh9-vh8h-UBGZQuCvSczBcTQCKx4hhQ9QO81UIflL5fwo6N9Z0IVrTf0vZv2RZ2YAwzHLq7EwIoWoPDj8pxXsGUxzeTs2X6QzsOIUIeyD6AtI0TDXDRAk14eE42gukI23ryAb2P-L_xXhDLEiJKszd0SBUr3h8jm0Zr9mBi798rINn7DNshBv-ebgMMOeWeYD9lVb8SE5A7eLrA1RD_9U09pcFAEQrEuA-JYZg',
  },
  {
    name: 'The Lab Coffee Co.',
    rating: '4.9',
    meta: 'Coffee • Pastries • 0.3 miles',
    eta: '5-10 min',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1ecX2fzXkRSwf_MGamcOgf1iaYvA1D-dekVmmWbgO7BS2vm1Gr-C9YxR--MJKVnthYKSulq281c4TIRBMPXKOuAmYsw1CJ3_TDwmwIHrcIH40sWDLYKZ1LABqCxu-O7DjHnA5pU5wgTtUnhpL4lzPwUz14Pm0XN4K_sWOL0_ss7hYQAlho-WqBhIhgUbqFeqba2sajZSivpVEez62q_qAYQUGy5Y4tU1HTSssPwcFcxWtLiBA9MiTHwUA4bSPCmpLqt61B1VWrKg',
  },
];

export default function LunchPage() {
  return (
    <AppShell title="Lunch & Eats">
      <main className="mx-auto max-w-7xl px-6 pb-32 pt-24">
        <section className="mb-12">
          <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-secondary">Workspace Dining</p>
              <h2 className="mb-4 font-headline text-5xl font-extrabold leading-tight tracking-[-0.03em] text-on-surface">
                Precision Fuel for the Mission.
              </h2>
              <div className="group relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input
                  type="text"
                  placeholder="Search restaurants or cuisines..."
                  className="w-full rounded-xl border-none bg-surface-container-low py-4 pl-12 pr-4 transition-all placeholder:text-outline/60 focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary"
                />
              </div>
            </div>

            <div className="w-full md:w-auto">
              <button
                type="button"
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-secondary-container px-8 py-5 text-white shadow-[0_12px_32px_rgba(26,28,28,0.06)] transition-transform active:scale-[0.98]"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                  groups
                </span>
                <span className="font-bold tracking-tight">Start Group Order</span>
                <span className="border-l border-white/20 pl-3 text-sm font-medium text-white/60">Save on Fees</span>
              </button>
            </div>
          </div>

          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
            {filters.map((chip) => (
              <button
                key={chip.label}
                type="button"
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  chip.active
                    ? 'bg-on-primary-fixed text-surface'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{chip.icon}</span>
                {chip.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 flex items-baseline justify-between">
            <h3 className="font-headline text-3xl font-bold tracking-tight">Office Favorites</h3>
            <button type="button" className="text-[11px] font-semibold uppercase tracking-[0.05em] text-secondary hover:underline">
              View All in Edinburgh HQ
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {favorites.map((item) => (
              <article
                key={item.name}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-lowest"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt={item.name} src={item.image} />
                  {item.badge && (
                    <div className="absolute left-4 top-4 rounded-md bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="flex flex-grow flex-col justify-between p-8">
                  <div>
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h4 className="font-headline text-2xl font-bold">{item.name}</h4>
                      <div className="flex items-center gap-1 rounded-lg bg-surface-container px-2 py-1">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                          star
                        </span>
                        <span className="text-sm font-bold">{item.rating}</span>
                      </div>
                    </div>
                    <p className="mb-4 text-sm text-on-surface-variant">{item.meta}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-secondary">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">timer</span>
                      {item.eta}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">moped</span>
                      {item.perk}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-headline text-3xl font-bold tracking-tight">Available Nearby</h3>
            <div className="flex gap-2">
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/20 transition-colors hover:bg-surface-container-low">
                <span className="material-symbols-outlined text-sm">tune</span>
              </button>
              <button type="button" className="rounded-full border border-outline-variant/20 px-4 py-2 text-sm font-semibold transition-colors hover:bg-surface-container-low">
                Sort by Rating
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {nearby.map((item) => (
              <article key={item.name} className="group cursor-pointer">
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl shadow-[0_12px_32px_rgba(26,28,28,0.06)]">
                  <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.name} src={item.image} />
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-lg bg-white/90 px-3 py-1 shadow-sm backdrop-blur-md">
                    <span className="material-symbols-outlined text-[14px] text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                      star
                    </span>
                    <span className="text-sm font-bold">{item.rating}</span>
                  </div>
                </div>
                <h4 className="font-headline text-xl font-bold transition-colors group-hover:text-secondary">{item.name}</h4>
                <p className="mt-1 text-sm text-on-surface-variant">{item.meta}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="rounded bg-surface-container px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                    {item.eta}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-secondary">
                    <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
                    UBER BENEFIT
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </AppShell>
  );
}
