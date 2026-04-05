'use client';

import { useMemo, useState } from 'react';
import AppShell from '@/components/AppShell';

const rideOptions = [
  {
    id: 'uber-black',
    name: 'Uber Black',
    description: 'Top-rated drivers, luxury cars',
    price: '$42.50',
    eta: '3 MIN',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2hX-JXxyXbQvpK8VprhCEPvZUaheLzCIc5C1B8KL3WGaT_KC2NskEDKfYOnJwb9JMiBG6JSXnYmhY-QhbaIJRn8Q-QgEhvIKSm9Ab259Oc0eR5FRYAaEp0UtrLA_YS-EZrbsmAQofa1Qv9hnFe9lM2NmE3mTpFJrIVgSJvDdyBD5aEitZpFQwT2C6t-70Ai3cn0b9revWwXhEG-8eCUi8HBY5g2pn0RGr4dLZsHgHRE6_QRYf-fUJ4d8u3b9Wit45iFzy3j_iZ_8',
    imageWrap: 'bg-on-surface',
  },
  {
    id: 'uber-green',
    name: 'Uber Green',
    description: 'Sustainable electric rides',
    price: '$28.20',
    eta: '6 MIN',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWajgPLg1fBqGsYallHAP7alOnSiKq7M77qsziYBSPp5g9JPznkZLPoIZlGQaxTLelIY4Y3dsjQ-8JExeAtCzMQmu86xtS_i9gqWuFiX1aGSaVu3xXM4BcFojKaG5Gt3VITgX2rKsAlI0a13YmLSp0ABO95BF0XFWm1ZJGDB6XILvJJGYpQWaM6AkpDlBaoxfu0grP74xp0-1TpssePQdvR7UeSY3GWL-RKP5chijO5fTAP_be-2X0Lndt1eV70IFMT1BTeoNpBw',
    imageWrap: 'bg-surface-container-high',
  },
  {
    id: 'uber-x',
    name: 'UberX',
    description: 'Affordable everyday rides',
    price: '$24.90',
    eta: '2 MIN',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmQ7OJMN56VLW3w9n7WHPk3ca7iCbjKg4wASywXjpqYK1Uf1IaPuiOGm7HybaIeqGcJJ9dDwq4taKFQek4QIWgqu80k9GN58o4rMaT2m-mx9c65uj2xgaGqgRTFcBiyFc-tem5yWkWUvl0aDKtaC2QKINVXkmehDF0nd5_muDuIEDBegRYMEICNSyEjHBGREIM9xVEyaDDiWfIp7vdwufLYGgAGOgLjIwJHylNDbvEqaVqpXMoLQsw5HjYMxiPwLO6vKdaEEU2mNQ',
    imageWrap: 'bg-surface-container-high',
  },
];

const frequentRoutes = [
  {
    id: 'home-office',
    icon: 'home_work',
    title: 'Home to Edinburgh Office',
    subtitle: 'Daily Commute',
    from: 'Home (Jerviston Road)',
    to: 'Uber HQ (Waverley Gate 2-4)',
  },
  {
    id: 'office-home',
    icon: 'commute',
    title: 'Edinburgh Office to Home',
    subtitle: 'Evening Return',
    from: 'Uber HQ (Waverley Gate 2-4)',
    to: 'Home (Jerviston Road)',
  },
  {
    id: 'office-airport',
    icon: 'flight',
    title: 'Edinburgh Office to EDI International',
    subtitle: 'Travel Hub',
    from: 'Uber HQ (Waverley Gate 2-4)',
    to: 'EDI International',
  },
];

let memoryScheduledRides = [];

function RideOptionList({ isWorkTrip, selectedRideId, onSelectRide }) {
  return (
    <div className="space-y-3">
      <h3 className="px-2 text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Choose your ride</h3>
      <div className="grid grid-cols-1 gap-3">
        {rideOptions.map((option) => {
          const isSelected = option.id === selectedRideId;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectRide(option.id)}
              className={`group flex items-center justify-between rounded-xl bg-surface-container-lowest p-4 text-left transition-all hover:bg-surface-container-high ${
                isSelected ? 'border-2 border-secondary' : 'border border-transparent'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`h-12 w-16 overflow-hidden rounded-lg ${option.imageWrap}`}>
                  <img className="h-full w-full object-cover" alt={option.name} src={option.image} />
                </div>
                <div>
                  <p className="font-bold text-on-surface">{option.name}</p>
                  <p className="text-xs text-on-surface-variant">{option.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${isWorkTrip ? 'text-outline line-through' : isSelected ? 'text-secondary' : ''}`}>
                  {option.price}
                </p>
                <p className="text-[10px] font-bold text-outline">{option.eta}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function TravelPage() {
  const [stage, setStage] = useState('planner');
  const [tripType, setTripType] = useState('work');
  const [selectedRideId, setSelectedRideId] = useState('uber-black');
  const [scheduledRides, setScheduledRides] = useState(memoryScheduledRides);
  const [selectedRoute, setSelectedRoute] = useState(frequentRoutes[0]);
  const [pickupTime, setPickupTime] = useState('17:00');

  const isWorkTrip = tripType === 'work';
  const selectedRide = useMemo(
    () => rideOptions.find((option) => option.id === selectedRideId) || rideOptions[0],
    [selectedRideId],
  );
  const transitionStage = (nextStage) => {
    setStage(nextStage);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  const saveScheduledRide = () => {
    const newRide = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      mode: tripType,
      routeTitle: selectedRoute.title,
      from: selectedRoute.from,
      to: selectedRoute.to,
      pickupTime,
      rideName: selectedRide.name,
      etaLabel: selectedRide.eta,
      priceLabel: isWorkTrip ? 'Covered by Work' : selectedRide.price,
    };

    const nextRides = [newRide, ...memoryScheduledRides];
    memoryScheduledRides = nextRides;
    setScheduledRides(nextRides);
    transitionStage('planner');
  };

  if (stage === 'schedule') {
    return (
      <AppShell title="Uber Edinburgh">
        <main className="mx-auto max-w-7xl px-4 pb-32 pt-24 md:px-8">
          <button
            type="button"
            onClick={() => transitionStage('planner')}
            className="mb-4 inline-flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container-high"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back To Commute
          </button>

          <div className="mb-6">
            <h2 className="font-headline text-4xl font-extrabold tracking-[-0.02em] text-on-surface md:text-5xl">
              Schedule Journey
            </h2>
            <p className="text-sm text-on-surface-variant">{selectedRoute.title}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-xl bg-surface-container-lowest p-8 shadow-[0_12px_32px_rgba(26,28,28,0.04)]">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex rounded-full bg-surface-container-low p-1">
                    <button
                      type="button"
                      onClick={() => setTripType('work')}
                      className={`rounded-full px-6 py-2 text-xs transition-all ${
                        isWorkTrip
                          ? 'bg-on-primary-fixed font-bold text-surface'
                          : 'font-medium text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      WORK
                    </button>
                    <button
                      type="button"
                      onClick={() => setTripType('personal')}
                      className={`rounded-full px-6 py-2 text-xs transition-all ${
                        !isWorkTrip
                          ? 'bg-on-primary-fixed font-bold text-surface'
                          : 'font-medium text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      PERSONAL
                    </button>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Trip Type</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.05em] text-outline">
                      Current Location
                    </label>
                    <input
                      type="text"
                      value={selectedRoute.from}
                      onChange={(event) =>
                        setSelectedRoute((prev) => ({
                          ...prev,
                          from: event.target.value,
                        }))
                      }
                      className="w-full rounded-sm border-none bg-surface-container-low px-4 py-3 text-sm font-medium transition-all focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.05em] text-outline">
                      Destination
                    </label>
                    <input
                      type="text"
                      value={selectedRoute.to}
                      onChange={(event) =>
                        setSelectedRoute((prev) => ({
                          ...prev,
                          to: event.target.value,
                        }))
                      }
                      className="w-full rounded-sm border-none bg-surface-container-low px-4 py-3 text-sm font-medium transition-all focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                </div>
              </div>

              <RideOptionList
                isWorkTrip={isWorkTrip}
                selectedRideId={selectedRideId}
                onSelectRide={setSelectedRideId}
              />

              <div className="rounded-xl bg-surface-container-lowest p-6 shadow-[0_12px_32px_rgba(26,28,28,0.04)]">
                <h3 className="mb-3 px-1 text-[10px] font-bold uppercase tracking-[0.05em] text-outline">
                  Choose your pickup time
                </h3>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(event) => setPickupTime(event.target.value)}
                  className="w-full rounded-lg border-none bg-surface-container-low px-4 py-3 text-sm font-medium focus:ring-1 focus:ring-secondary"
                />
              </div>

              <button
                type="button"
                onClick={saveScheduledRide}
                className="w-full rounded-xl bg-gradient-to-br from-secondary to-secondary-container py-4 text-sm font-bold text-white shadow-[0_8px_16px_rgba(37,109,240,0.2)] duration-200 active:scale-95"
              >
                Schedule for Later
              </button>
            </div>

            <div className="space-y-8 lg:col-span-7">
              <div className="group relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container-low md:aspect-[16/10]">
                <div className="absolute inset-0 grayscale contrast-125 opacity-40">
                  <img
                    className="h-full w-full object-cover"
                    alt="City map"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRDynvVKwAJs8ccvCfe0dsGtXnhhEGCyZkHgXQVUbZoAwhQPHaZlM8wfmo2Ykda0Ysan-9BKwcccuyR2bhZofF11oqwottjPPuXm3c9GL4LUSCdmHnZpgs1kBb1-AKmAiXofDYjFMw1sYxsQ_KQkBycsFz1ay6LDfbWMPnepKEUfbn0INKQEUUUWpZehRO42qGmTPevTs9omI_PWxE4egZgIGZr_Zmvuu6wft_wVEiuwKz0QS4ZBRYd7i0AM4vS30tb4eMLr6JtU"
                  />
                </div>
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 500">
                  <path
                    d="M 150 400 Q 300 350 400 250 T 650 100"
                    fill="none"
                    stroke="#276EF1"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="8 12"
                  ></path>
                  <circle cx="150" cy="400" r="6" fill="#276EF1"></circle>
                  <circle cx="650" cy="100" r="6" fill="#1a1c1c"></circle>
                </svg>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl bg-surface/80 p-6 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container">
                      <span className="material-symbols-outlined text-surface" style={{ fontVariationSettings: '"FILL" 1' }}>
                        commute
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-outline">ESTIMATED ARRIVAL</p>
                      <p className="font-headline text-xl font-bold text-on-surface">14 Minutes</p>
                    </div>
                  </div>
                  <div className="h-10 w-px bg-outline-variant/30"></div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-outline">TRAFFIC</p>
                    <p className="text-sm font-bold text-on-surface">Light Flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AppShell>
    );
  }

  return (
    <AppShell title="Uber Edinburgh">
      <main className="mx-auto max-w-7xl px-4 pb-32 pt-24 md:px-8">
        <div className="mb-6">
          <h2 className="mb-2 font-headline text-5xl font-extrabold tracking-[-0.02em] text-on-surface md:text-6xl">
            Plan Your Commute
          </h2>
          <p className="text-lg text-on-surface-variant">Seamless mobility to your workplace.</p>
        </div>

        <div className="mb-4 rounded-xl bg-surface-container-low p-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Current Trip</p>
          <div className="flex items-center justify-between gap-3 rounded-lg bg-surface-container-lowest p-3">
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

          <div className="group relative mt-4 aspect-square w-full overflow-hidden rounded-xl bg-surface-container-low md:aspect-[16/10]">
            <div className="absolute inset-0 grayscale contrast-125 opacity-40">
              <img
                className="h-full w-full object-cover"
                alt="Current trip map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRDynvVKwAJs8ccvCfe0dsGtXnhhEGCyZkHgXQVUbZoAwhQPHaZlM8wfmo2Ykda0Ysan-9BKwcccuyR2bhZofF11oqwottjPPuXm3c9GL4LUSCdmHnZpgs1kBb1-AKmAiXofDYjFMw1sYxsQ_KQkBycsFz1ay6LDfbWMPnepKEUfbn0INKQEUUUWpZehRO42qGmTPevTs9omI_PWxE4egZgIGZr_Zmvuu6wft_wVEiuwKz0QS4ZBRYd7i0AM4vS30tb4eMLr6JtU"
              />
            </div>
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 500">
              <path
                d="M 150 400 Q 300 350 400 250 T 650 100"
                fill="none"
                stroke="#276EF1"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="8 12"
              ></path>
              <circle cx="150" cy="400" r="6" fill="#276EF1"></circle>
              <circle cx="650" cy="100" r="6" fill="#1a1c1c"></circle>
            </svg>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-surface/80 p-4 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container">
                  <span className="material-symbols-outlined text-surface" style={{ fontVariationSettings: '"FILL" 1' }}>
                    commute
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-outline">ESTIMATED ARRIVAL</p>
                  <p className="font-headline text-lg font-bold text-on-surface">14 Minutes</p>
                </div>
              </div>
              <div className="h-8 w-px bg-outline-variant/30"></div>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-outline">TRAFFIC</p>
                <p className="text-sm font-bold text-on-surface">Light Flow</p>
              </div>
            </div>
          </div>

          {scheduledRides.length > 0 && (
            <div className="mt-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Upcoming Trips</p>
              <div className="space-y-2">
                {scheduledRides.map((ride) => (
                  <div
                    key={ride.id}
                    className="flex items-center justify-between gap-3 rounded-lg bg-surface-container-lowest p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                        <span className="material-symbols-outlined text-secondary">commute</span>
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-on-surface">{ride.routeTitle}</p>
                        <p className="truncate text-xs text-on-surface-variant">
                          {ride.from} {'->'} {ride.to}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.05em] text-secondary">
                      {ride.pickupTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mb-8 w-full rounded-xl bg-surface-container-lowest p-5 text-left shadow-[0_8px_20px_rgba(26,28,28,0.05)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-secondary">Next Step</p>
          <p className="mt-1 font-headline text-2xl font-bold tracking-tight">Schedule for Later</p>
          <p className="mt-1 text-sm text-on-surface-variant">Select a frequent route to continue journey booking.</p>
        </div>

        <div className="mb-8 space-y-3">
          <h3 className="px-2 text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Frequent Routes</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {frequentRoutes.map((route) => (
              <button
                key={route.id}
                type="button"
                onClick={() => {
                  setSelectedRoute(route);
                  setPickupTime('17:00');
                  transitionStage('schedule');
                }}
                className="group flex items-center justify-between rounded-xl border border-transparent bg-surface-container-lowest p-4 text-left transition-all hover:bg-surface-container-high"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-16 items-center justify-center overflow-hidden rounded-lg bg-surface-container-high text-on-surface-variant">
                    <span className="material-symbols-outlined">{route.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{route.title}</p>
                    <p className="text-xs text-on-surface-variant">{route.subtitle}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline transition-colors group-hover:text-secondary">
                  chevron_right
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </AppShell>
  );
}
