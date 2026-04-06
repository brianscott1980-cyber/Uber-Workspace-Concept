import Link from 'next/link';
import AppShell from '@/components/AppShell';

export default function HomePage() {
  return (
    <AppShell title="Uber Edinburgh">
      <main className="mx-auto max-w-screen-xl px-6 pb-32 pt-24">
        <section className="mb-12">
          <h1 className="mb-4 font-headline text-5xl font-extrabold tracking-[-0.04em] text-on-surface md:text-6xl">
            Good morning, Laura
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-surface-container-high px-4 py-1.5 text-xs font-bold uppercase tracking-[0.05em]">
              Today, Oct 24
            </span>
            <p className="text-lg font-medium text-primary">
              Your first meeting starts in <span className="text-secondary">42 minutes</span> in Loch Lomond.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="space-y-6 md:col-span-8">
            <Link
              href="/travel"
              className="block rounded-xl bg-surface-container-lowest p-6 shadow-[0_12px_32px_rgba(26,28,28,0.06)]"
            >
              <div>
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.05em] text-secondary">Next Up</span>
                <h2 className="mb-2 font-headline text-3xl font-bold tracking-tight">Morning Commute</h2>

                <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-surface-container-low p-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                      <span className="material-symbols-outlined text-secondary">commute</span>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-on-surface">Morning Commute</p>
                      <p className="truncate text-xs text-on-surface-variant">Uber Black • Tesla Model S • 7GYX92</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.05em] text-secondary">
                    8 Min
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group rounded-xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container-high">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-white p-2">
                    <span className="material-symbols-outlined text-secondary">groups</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold">Product Sync</h3>
                      <span className="shrink-0 text-xs font-bold text-outline">10:30 AM</span>
                    </div>
                    <p className="mb-4 text-sm text-primary">MB-4.201 • Design Studio</p>
                    <div className="flex -space-x-2">
                      <img
                        className="h-8 w-8 rounded-full border-2 border-white"
                        alt="Attendee one"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYeRi5kjd-dHXCmt-kESdisv6bXFQ6qQTxPk7X8ckvqRLvzT5dcweFMAJjnD_0UmR7MMXzx4LpSUGmuQsLBuHX6JpbKUhVEcdiZpElgyYUSTYF-Q6eV59xLFW2c2k23wpPEQ6zAy8yGLO3fRWceB19kOjnyp9SnXYfotXJiivs51Dv7PY9kHsB-CdTCXjd3IUV1EivXSL85KR_JM_VFY03boHM6hmsYV8GUNejD3uRTj9IAPw-0rN-02Jxc1Ouxktx-saaDHNQc1E"
                      />
                      <img
                        className="h-8 w-8 rounded-full border-2 border-white"
                        alt="Attendee two"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUF8qq4Ay8O6l4OEqckGOF1efQp6TAkiGUbUMMUE3hplgmjARl1wOeCIH4x6Za18TtzR06DsrJTykqbWhUtjSBI1mZxP-tArRFMaYas9gClDYd7IA2B4MA0_YMmkOu2tXRDg9h5G-m7YRm6XMbE__pvw8zHR_V56FCq4137oMY1ubuLPIZrXlhskqhPKkFlbOIFe7-Ahd5Geg0dJ88WlRMYGyrlG-X3BkRRWi8UPBc-RQyJrA_DGRZE1YagzBS1lm0Z1ZGSM2lhvE"
                      />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-surface-container-highest text-[10px] font-bold">
                        +3
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container-high">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-white p-2">
                    <span className="material-symbols-outlined text-secondary">restaurant</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold">Team Lunch</h3>
                      <span className="shrink-0 text-xs font-bold text-outline">12:15 PM</span>
                    </div>
                    <p className="mb-4 text-sm text-primary">Cafe 555 • Reserved Table</p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/50 px-3 py-1">
                      <span className="material-symbols-outlined text-[14px]">confirmation_number</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest">Conf: #9201</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:col-span-4">
            <div className="relative overflow-hidden rounded-xl bg-on-primary-fixed p-8 text-white">
              <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 scale-150 opacity-10">
                <span className="material-symbols-outlined text-[120px]">location_city</span>
              </div>
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.05em] text-surface-container-high/60">
                Office Status
              </span>
              <h2 className="mb-1 text-2xl font-bold">Edinburgh HQ</h2>
              <p className="mb-6 text-sm text-surface-container-high/80">4th Floor • Workspace A-12</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="opacity-60">Occupancy</span>
                  <span className="font-bold">64% (Optimal)</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="opacity-60">Transit Status</span>
                  <span className="font-bold text-green-400">Clear Routes</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="opacity-60">Cafe Wait Time</span>
                  <span className="font-bold">~4 mins</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container-low p-6">
              <h3 className="mb-4 text-sm font-bold tracking-tight">Mission Control</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/lunch" className="flex flex-col items-start gap-2 rounded-xl bg-white p-4 transition-all hover:shadow-md active:scale-95">
                  <span className="material-symbols-outlined text-secondary">fastfood
                  </span>
                  <span className="text-xs font-bold">Order Lunch</span>
                </Link>
                <Link href="/pass" className="flex flex-col items-start gap-2 rounded-xl bg-white p-4 transition-all hover:shadow-md active:scale-95">
                  <span className="material-symbols-outlined text-secondary">door_front</span>
                  <span className="text-xs font-bold">Entry Pass</span>
                </Link>
                <button type="button" className="flex flex-col items-start gap-2 rounded-xl bg-white p-4 transition-all hover:shadow-md active:scale-95">
                  <span className="material-symbols-outlined text-secondary">support_agent</span>
                  <span className="text-xs font-bold">IT Support</span>
                </button>
                <Link href="/book" className="flex flex-col items-start gap-2 rounded-xl bg-white p-4 transition-all hover:shadow-md active:scale-95">
                  <span className="material-symbols-outlined text-secondary">meeting_room</span>
                  <span className="text-xs font-bold">Book Room</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-surface-container-low p-6">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-outline">Edinburgh</p>
                <p className="text-lg font-bold">5°C • Drizzle</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-primary/40">rainy</span>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
