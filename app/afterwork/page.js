import AppShell from '@/components/AppShell';

const popularPlaces = [
  {
    name: 'Izakaya Zen',
    rating: '4.7',
    meta: 'Japanese • Sushi • 0.4 mi',
    price: '$$$',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqO6TXZ_nOX__nYscTy6Hyohq4kviWizsUnxBvHY0ofFr-MjCZ5p5wUN-ufGH-QXEyMcol1kuiED2v9OLjJbze8GVa-JuptsU6GhKCRYWkeYb2ksItg3z6yaO_J03lZ9dDMEC6sLVjUG_Pz9bZltW_16rviI2DNTxmzjk2uYpz-4Y3S4bTvuyrfDmN-6pWlE4x9B1X_kiiemboVZ6gHeJ4w4DriiSG2ztnYX71uufguIOH2Mp5DXSBeFU0AAxIkIcBuOGbZsMR4og',
  },
  {
    name: 'Retro Pixel Bar',
    rating: '4.5',
    meta: 'Entertainment • Drinks • 0.7 mi',
    price: '$$',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5f2YIfM4bYOGd_KQdQesZyr3sjexFft5aiXmeOUwcq0SnE5EoQ2ASKH2fRcECgtYtYIIekLjH1uM59YeN-dLJ28NP9quRVpUb7G7mB2ICnRgo8AkbO60igDwkw0bUc7hQ-GBYFcHcqKhYCWq2qHXeDj58a2uvL75T-SQRiRlqa1e27oCcobsvqGFd8pelLhkUO-Nzpk1e_neDYWr1gZQh247lmyL9rJHZCOR-GyP2PLOQte6fqG-HKoid9LqErUS2rEm6o7pJ-lU',
  },
  {
    name: 'Summit Fitness',
    rating: '4.8',
    meta: 'Wellness • Gym • 0.3 mi',
    price: 'PRO',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfwExUfndxshNa9bW00oBMi9K_ykNQgNUg9EI7jM2I2E-EimLICjbKK1aMTOlhbZCzoh-_KDX6qgz8RnuNNYivWa8iXzQ22R3hZWd3pJRzOnJXdK49Rnz7c_mnUXnZR6QOqnBTBUyvtnjk4PrqK5I4nG3ZKADK0Ht7wdqz775wAaFA3gxT9BFyroj5QWelqrs5PI7OLke3wyOEp7PFBKcRTT5hhTBCTWlAIFdbrpEeZR4DMpNWWZaIUTCf0rhkka2QzAc-QK7l_o4',
  },
  {
    name: 'Blue Note Alley',
    rating: '4.9',
    meta: 'Music • Jazz • 1.1 mi',
    price: '$$$',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwi-AKXa4D_WmVNMWjTIrG62KPebFiEGBSpL6Od6g88Pf7TbYem0h-GXgNvYdkA6OpSYSogbiFEmbR4irqa5GWDNHto-_8IlDSja92v3KrXy19e0H9CyHDOqLGcHn_S_GJJbbwdYxC2iLcERiC_Z3h5gdFO8cxyqgyejY3rlfbkQTPqikFhxFtdcVSjW3hC0Jh6JLu3QLzgkk9RRCnyA7iScIPhfsr5qRuP61nO7QMX0_sTRjVSOlZC0D5-dH-nvK9zkFix8VM3D8',
  },
];

export default function AfterWorkPage() {
  return (
    <AppShell title="Uber Edinburgh">
      <main className="mx-auto max-w-screen-xl px-6 pb-28 pt-24">
        <section className="mb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-2 font-headline text-5xl font-extrabold tracking-[-0.04em] text-on-surface">After Work</h2>
              <p className="text-lg text-surface-tint">Curated experiences for the modern professional near the office.</p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-surface-container-high px-5 py-2.5 text-sm font-label uppercase tracking-widest transition-colors hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-sm">tune</span>
                Filter
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-md bg-gradient-to-br from-secondary to-secondary-container px-6 py-2.5 font-medium text-on-secondary shadow-lg duration-200 active:scale-95"
              >
                <span className="material-symbols-outlined">group_add</span>
                Create Social Group
              </button>
            </div>
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12">
          <article className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_12px_32px_rgba(26,28,28,0.06)] md:col-span-8">
            <div className="aspect-[16/9] overflow-hidden md:h-[400px] md:aspect-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="The Alchemist"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCGq1DVx_CsPU1SNnJF9uI9FedGc7UI-ElhEhN0FB9B3RzePGwMZkLsdGqQ2XlEl9Rr28l7J5kcN6pH1GGVp5PX7m1dZ5D126D9Lu_KB9wYrfTte7gdNoI9BpWYxNaHeAtQDt6QcSqcWuBU2Iy78ox84G197xBs5EEAOZ8P44HT1zGfxFZdxetl0tkUsvVfqdiBgGDLNOhNweNn4lMDf5lMqM-tItiQDPN1rynRUIs0bmTYOLrm03KFAFfLIksOW6ppW0NhVnS31E"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-label uppercase tracking-widest text-white">
                  Trending Now
                </span>
                <span className="flex items-center gap-1 rounded-md bg-white/20 px-2 py-1 text-xs text-white backdrop-blur-md">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>
                    star
                  </span>
                  4.9
                </span>
              </div>
              <h3 className="mb-2 font-headline text-3xl font-bold text-white">The Alchemist</h3>
              <p className="mb-6 max-w-md text-sm text-white/80">
                Signature mixology and 360° city views. Only 5 mins walk from headquarters.
              </p>
              <div className="flex items-center gap-4">
                <button type="button" className="rounded-md bg-white px-6 py-2 text-sm font-bold text-black transition-colors hover:bg-surface-container-high">
                  Reserve Table
                </button>
                <span className="flex items-center gap-1 text-xs font-label uppercase tracking-widest text-white/60">
                  <span className="material-symbols-outlined text-sm">near_me</span>
                  0.2 miles
                </span>
              </div>
            </div>
          </article>

          <aside className="flex flex-col justify-between rounded-xl bg-surface-container-low p-8 md:col-span-4">
            <div>
              <span className="mb-4 block text-[10px] font-label font-bold uppercase tracking-widest text-secondary">
                Colleague Activity
              </span>
              <h4 className="mb-4 font-headline text-xl font-bold">Join Your Team</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl bg-surface-container-lowest p-4 shadow-sm">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-200"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-300"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-400"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Engineering Mixer</p>
                    <p className="text-xs text-surface-tint">6 colleagues at 'The Vault'</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-surface-container-lowest p-4 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary">
                    <span className="material-symbols-outlined text-sm">palette</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Immersive Art Night</p>
                    <p className="text-xs text-surface-tint">Sarah and 2 others interested</p>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="mt-6 w-full rounded-md border border-outline-variant py-3 text-sm font-bold transition-all hover:bg-surface-container-high">
              View All Groups
            </button>
          </aside>
        </section>

        <section className="mb-16">
          <h3 className="mb-8 font-headline text-2xl font-bold">Popular Places Near You</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularPlaces.map((place) => (
              <article key={place.name} className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img className="h-full w-full object-cover" alt={place.name} src={place.image} />
                  <button type="button" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </button>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="text-lg font-bold">{place.name}</h4>
                    <span className="flex items-center gap-1 text-sm font-bold">
                      <span className="material-symbols-outlined text-sm text-amber-500" style={{ fontVariationSettings: '"FILL" 1' }}>
                        star
                      </span>
                      {place.rating}
                    </span>
                  </div>
                  <p className="mb-4 text-xs text-surface-tint">{place.meta}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary">{place.price}</span>
                    <button type="button" className="group flex items-center gap-1 text-sm font-bold text-secondary">
                      Details
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">chevron_right</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mb-16 overflow-hidden rounded-2xl bg-on-primary-fixed p-8 text-white">
          <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="max-w-lg">
              <div className="mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container">local_taxi</span>
                <span className="text-xs font-label font-bold uppercase tracking-widest">Seamless Commute</span>
              </div>
              <h3 className="mb-4 font-headline text-3xl font-bold">Ready to head home?</h3>
              <p className="mb-8 text-white/60">
                End your evening perfectly. Schedule an Uber for your return journey directly from this session.
                Priority pickup for Executive Workspace members.
              </p>
              <div className="flex flex-wrap gap-4">
                <button type="button" className="flex items-center gap-3 rounded-md bg-white px-6 py-3 font-bold text-black duration-200 active:scale-95">
                  Book Uber Black
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="flex flex-col">
                  <span className="font-bold">$34.50</span>
                  <span className="text-[10px] font-label uppercase tracking-widest text-white/40">Est. 8 min away</span>
                </div>
              </div>
            </div>
            <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10 md:h-64 md:w-80">
              <img
                className="h-full w-full object-cover grayscale opacity-50"
                alt="City map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPwhshj_bJd4mc9qR_w9okM_w1dYCq7JDk5AdEfPijyyyoZr-6IqTizjdgykvKCrFxZP_XRRUDx2TyL-nFF4SLnnbIsBxOSZJr_m2tKxaDJlnnYeeZ12Oz-lb-yHetVqefqBiUVTB5y7ppXF-lY8z9TKYhOQy_-WDeeHD1AEZ8dv1aGV_HAII_s6Q3XhYuWhRuujlNwTC8ru8S48TAY86NNq5NSUdZpeobMQjpT0_8B8-TqcZQJZnXB4jnQVnARQyBpp_pVdXj3SI"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary shadow-2xl animate-pulse">
                  <span className="material-symbols-outlined text-white">navigation</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-[100px]"></div>
        </section>

        <section className="rounded-2xl bg-surface-container-low p-10">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="mb-4 font-headline text-3xl font-bold">Plan a Collective Outing</h3>
            <p className="text-surface-tint">
              Select an event, invite your team, and we'll handle the reservation and travel logistics for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-xs font-label font-bold uppercase tracking-[0.05em] text-surface-tint">
                  Step 1: Select Event
                </span>
                <div className="relative">
                  <input
                    readOnly
                    value="The Alchemist"
                    className="w-full cursor-pointer rounded-md border-none bg-surface-container-lowest px-4 py-4 text-sm font-semibold shadow-sm"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-surface-tint">
                    expand_more
                  </span>
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-label font-bold uppercase tracking-[0.05em] text-surface-tint">
                  Step 2: Invite Colleagues
                </span>
                <div className="mb-4 flex gap-2">
                  <div className="relative flex-1">
                    <input
                      placeholder="Search by name or department..."
                      className="w-full rounded-md border-none bg-surface-container-lowest px-4 py-4 text-sm shadow-sm transition-all focus:ring-2 focus:ring-secondary/20"
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-surface-tint">
                      search
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-high px-3 py-1.5 text-xs font-medium">
                    Mark (Design)
                    <span className="material-symbols-outlined cursor-pointer text-sm">close</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-high px-3 py-1.5 text-xs font-medium">
                    Elena (Sales)
                    <span className="material-symbols-outlined cursor-pointer text-sm">close</span>
                  </span>
                </div>
              </label>
            </div>

            <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
              <h4 className="mb-6 text-sm font-label font-bold uppercase tracking-widest">Group Summary</h4>
              <div className="mb-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-surface-tint">Interested</span>
                  <div className="flex -space-x-2">
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      alt="User"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnP-LMiOhnfuBhVF6FxqzqiaTrU2p5diRNbav3GkvLLanRBVxDV0vFubxr-_nnOFOG0ylepOrrItMhNJ0r635ZMq59Spz8yAXRw7pPtYHwfU8dj1V2HT9Ltbu6FmftLvTf2w5TluuZh1YIvlu-768_ejqPHN1nuIO_R_CP3ymuqLwKus8oXYlLtzK0OZ7MmPPWnULrA2zgUiCZ8-u_VBtrhfcuc9H4i7jAQiIpTlsI7NxKXhxIUuu8Y17T4zwL-tmgKu2zo4VtWa8"
                    />
                    <img
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      alt="User"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzp4Xqw6XjNJvYDSccGduNivnuPSykWUKkGUPB0yxOftTSCTN6MljryXDb-mEiyGlmbJvgjI-pemd3HopNUdrHsnYBDE6efHaYi91KxwAGPLpEYl5l-GJVGF130dJPDf_oz4-GJP8P5evYbuK1lzQTCRqYxxXXSzlySt69YXp-Ty25KvqTI386OasZuig_FB8lSlHUDoz1liUZo5YJsTxED-FlSs5NxTJX7yb4S1DnlkOIN7VrZiP0hYoiCQN-Ob_LED7Aoz4jhSs"
                    />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-surface-container-high text-[10px] font-bold">
                      +5
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-surface-tint">Joined</span>
                  <span className="text-sm font-bold">3 Members</span>
                </div>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
                  <span className="text-sm text-surface-tint">Uber Group Travel</span>
                  <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary">Enabled</span>
                </div>
              </div>
              <button type="button" className="w-full rounded-md bg-secondary py-4 font-bold text-white shadow-[0_4px_16px_rgba(0,84,203,0.3)] duration-200 active:scale-95">
                Confirm Social Group
              </button>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
