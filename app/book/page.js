'use client';

import { faker } from '@faker-js/faker';
import { useEffect, useMemo, useState } from 'react';
import AppShell from '@/components/AppShell';

const STATUS_OPTIONS = ['Available', 'Out of Office', 'Busy', 'Do Not Disturb', 'Away'];

const statusDotClass = {
  Available: 'bg-emerald-500',
  'Out of Office': 'bg-slate-400',
  Busy: 'bg-amber-500',
  'Do Not Disturb': 'bg-rose-500',
  Away: 'bg-sky-500',
};

let inMemoryBookings = [];

const floorPlanImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuClqBmleiOsYTwI0fT2KM3P2OqWc9z-IAjzjPGGuM7f004sgikDOsIHxuQAzLY95Iv2ZZwzcaEHL5iPXQe40Egsy6HASJ1qBBkPHaQXmYUiPbnhG8bRiMJRn1niF_izP4gNim2W9CSULEtX_AHhuB4xoxcI49ufM1HFDZ0q1BIJGAMdeZE0htvQGz2qwt61hoGUf9xZW63ogxxVifN2yR472N8Th-ihjhWrW3giikjPfcUBPGs3aq9DD8NuqRvjt9Lw4yz6m9fhRXQ';

const workstationSeed = [
  {
    id: 'w14',
    name: 'Station W14',
    kind: 'Workstation',
    location: 'Floor 12 • North Wing',
    resources: ['Dual Monitors', 'Window View', 'Whiteboard'],
    marker: { x: 62, y: 34 },
    blurb: 'Great natural light and near collaboration zones.',
  },
  {
    id: 'w12',
    name: 'Station W12',
    kind: 'Workstation',
    location: 'Floor 12 • Quiet Zone',
    resources: ['Standing Desk', 'Dual Monitors'],
    marker: { x: 49, y: 42 },
    blurb: 'Low-traffic desk in a focused area.',
  },
  {
    id: 'pod02',
    name: 'Focus Pod 02',
    kind: 'Pod',
    location: 'Floor 12 • Pods Area',
    resources: ['Soundproof', 'Ergonomic Chair', 'Power Outlet'],
    marker: { x: 77, y: 73 },
    blurb: 'Ideal for deep-work sessions and short calls.',
  },
  {
    id: 'w08',
    name: 'Station W08',
    kind: 'Workstation',
    location: 'Floor 12 • Collaboration Bay',
    resources: ['Dual Monitors', 'Docking Station'],
    marker: { x: 45, y: 24 },
    blurb: 'Close to your regular team area.',
  },
];

const meetingRoomSeed = [
  {
    id: 'mr-big-ben',
    name: 'Big Ben',
    kind: 'Meeting Room',
    location: 'Floor 12 • West Wing',
    resources: ['Whiteboard', 'Video Conferencing', '65in Display'],
    marker: { x: 28, y: 18 },
    blurb: 'Best for leadership standups and hybrid syncs.',
  },
  {
    id: 'mr-tower-bridge',
    name: 'Tower Bridge',
    kind: 'Meeting Room',
    location: 'Floor 11 • Central Hub',
    resources: ['Whiteboard', 'Standing Table', 'Acoustic Panels'],
    marker: { x: 33, y: 64 },
    blurb: 'Balanced room for workshops and planning.',
  },
  {
    id: 'mr-camden',
    name: 'Camden Market',
    kind: 'Meeting Room',
    location: 'Floor 10 • South Wing',
    resources: ['Video Conferencing', '65in Display'],
    marker: { x: 57, y: 39 },
    blurb: 'Fast setup room for recurring ceremonies.',
  },
  {
    id: 'mr-greenwich',
    name: 'Greenwich',
    kind: 'Meeting Room',
    location: 'Floor 14 • East Wing',
    resources: ['Whiteboard', 'Projector', 'Conference Phone'],
    marker: { x: 74, y: 54 },
    blurb: 'Quiet room suited to interviews and 1:1s.',
  },
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function ResourcePills({ resources }) {
  return (
    <div className="flex flex-wrap gap-2">
      {resources.map((resource, index) => (
        <span
          key={`${resource}-${index}`}
          className="rounded-full bg-surface-container-high px-4 py-2 text-[11px] font-medium text-on-surface-variant"
        >
          {resource}
        </span>
      ))}
    </div>
  );
}

function ColleagueRows({ colleagues }) {
  return (
    <div className="space-y-3">
      {colleagues.map((mate) => (
        <div
          key={mate.id}
          className="flex w-full items-center justify-between rounded-lg p-2 text-left transition-colors hover:bg-surface-container-low"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-[10px] font-bold">
              {getInitials(mate.name)}
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-bold">
                {mate.name}
                <span className={`h-2 w-2 rounded-full ${statusDotClass[mate.status]}`} title={mate.status}></span>
              </p>
              <p className="text-[10px] text-on-surface-variant">
                {mate.location} • {mate.status}
              </p>
            </div>
          </div>
          <span className="material-symbols-outlined text-lg text-secondary">group</span>
        </div>
      ))}
    </div>
  );
}

export default function BookPage() {
  const [bookingType, setBookingType] = useState('workstation');
  const [view, setView] = useState('home');
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [bookings, setBookings] = useState(() => inMemoryBookings);

  const [teammateQuery, setTeammateQuery] = useState('');
  const [searchMatches, setSearchMatches] = useState([]);
  const [selectedColleagueIds, setSelectedColleagueIds] = useState([]);
  const [teammatePool, setTeammatePool] = useState([
    {
      id: 'laura',
      name: 'Laura',
      location: 'Floor 12',
      status: 'Available',
    },
  ]);

  useEffect(() => {
    const laura = {
      id: 'laura',
      name: 'Laura',
      location: `Floor ${faker.number.int({ min: 1, max: 20 })}`,
      status: 'Available',
    };

    const generated = Array.from({ length: 60 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      location:
        faker.datatype.boolean() ? 'Remote' : `Floor ${faker.number.int({ min: 1, max: 20 })}`,
      status: faker.helpers.arrayElement(STATUS_OPTIONS),
    }));

    setTeammatePool([laura, ...generated]);
  }, []);

  const suggestedColleagues = useMemo(() => {
    const randomSuggestions = teammatePool
      .slice(1)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    return [teammatePool[0], ...randomSuggestions];
  }, [teammatePool]);

  const toggleColleagueSelection = (colleagueId) => {
    setSelectedColleagueIds((currentIds) =>
      currentIds.includes(colleagueId)
        ? currentIds.filter((id) => id !== colleagueId)
        : [...currentIds, colleagueId]
    );
  };

  const selectedColleagues = useMemo(() => {
    const byId = new Map(teammatePool.map((mate) => [mate.id, mate]));
    return selectedColleagueIds.map((id) => byId.get(id)).filter(Boolean);
  }, [selectedColleagueIds, teammatePool]);

  const activeList = teammateQuery.trim() ? searchMatches : suggestedColleagues;
  const visibleUnselected = activeList.filter((mate) => !selectedColleagueIds.includes(mate.id));

  const handleTeammateSearch = (event) => {
    const query = event.target.value;
    setTeammateQuery(query);

    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      setSearchMatches([]);
      return;
    }

    const prefixMatches = teammatePool.filter((mate) =>
      mate.name.toLowerCase().startsWith(normalizedQuery)
    );

    if (prefixMatches.length === 0) {
      setSearchMatches([]);
      return;
    }

    const shuffled = [...prefixMatches].sort(() => Math.random() - 0.5);
    const resultCount = Math.min(prefixMatches.length, Math.floor(Math.random() * 4) + 1);
    setSearchMatches(shuffled.slice(0, resultCount));
  };

  const handleRunSearch = () => {
    const base = bookingType === 'workstation' ? workstationSeed : meetingRoomSeed;
    const shuffled = [...base].sort(() => Math.random() - 0.5);
    setResults(shuffled);
    setSelectedItem(null);
    setView('results');
  };

  const handleBookSelected = () => {
    if (!selectedItem) {
      return;
    }

    const booking = {
      id: `${selectedItem.id}-${Date.now()}`,
      name: selectedItem.name,
      kind: selectedItem.kind,
      location: selectedItem.location,
      resources: selectedItem.resources,
      invitedColleagues: selectedColleagues.map((mate) => ({
        id: mate.id,
        name: mate.name,
        location: mate.location,
        status: mate.status,
      })),
      bookedFor: 'Oct 24, 2023 • 09:00 - 17:00',
    };

    setBookings((current) => {
      const next = [booking, ...current];
      inMemoryBookings = next;
      return next;
    });
    setSelectedItem(null);
    setView('home');
  };

  const showBookingsHome = view === 'home' && bookings.length > 0;
  const showSearch = view === 'search' || (view === 'home' && bookings.length === 0);
  const showResults = view === 'results';
  const showDetails = view === 'details' && selectedItem;

  return (
    <AppShell title="Make a Reservation">
      <main className="mx-auto max-w-7xl px-6 pb-12 pt-24">
        {showBookingsHome && (
          <section className="space-y-6">
            <div>
              <h2 className="font-headline text-2xl font-bold tracking-tight">Your Bookings</h2>
              <p className="text-sm text-on-surface-variant">Active reservations for today</p>
            </div>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-xl bg-surface-container-lowest p-5 shadow-[0_10px_24px_rgba(26,28,28,0.06)]"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-headline text-lg font-bold">{booking.name}</h3>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.05em] text-secondary">
                      {booking.kind}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-on-surface-variant">{booking.location}</p>
                  <p className="text-xs text-outline">{booking.bookedFor}</p>
                  <div className="mt-3">
                    <ResourcePills resources={booking.resources} />
                  </div>
                  {booking.invitedColleagues && booking.invitedColleagues.length > 0 && (
                    <div className="mt-4 border-t border-outline-variant/10 pt-3">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
                        Invite Colleagues
                      </p>
                      <ColleagueRows colleagues={booking.invitedColleagues} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setView('search')}
              className="w-full rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-secondary/20 transition-all active:scale-95"
            >
              Make a booking
            </button>
          </section>
        )}

        {showSearch && (
          <section className="mx-auto max-w-3xl space-y-6">
            <h2 className="font-headline text-2xl font-bold tracking-tight">Search Edinburgh</h2>

            <div className="flex rounded-xl bg-surface-container-low p-1.5">
              <button
                type="button"
                onClick={() => setBookingType('workstation')}
                className={`flex-1 rounded-lg px-4 py-3 text-sm transition-all ${
                  bookingType === 'workstation'
                    ? 'bg-surface-container-lowest font-bold text-secondary shadow-sm'
                    : 'font-medium text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Workstation
              </button>
              <button
                type="button"
                onClick={() => setBookingType('meetingRoom')}
                className={`flex-1 rounded-lg px-4 py-3 text-sm transition-all ${
                  bookingType === 'meetingRoom'
                    ? 'bg-surface-container-lowest font-bold text-secondary shadow-sm'
                    : 'font-medium text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Meeting Room
              </button>
            </div>

            <div className="space-y-6 rounded-xl bg-surface-container-lowest p-6 shadow-[0_12px_32px_rgba(26,28,28,0.06)]">
              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.05em] text-on-surface-variant">
                  Location &amp; Floor
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border-none bg-surface-container-low py-3 pl-4 pr-10 text-sm focus:ring-1 focus:ring-secondary/30">
                    <option>Tower A - Floor 12 (Creative Hub)</option>
                    <option>Tower A - Floor 14 (Quiet Zone)</option>
                    <option>Tower B - Floor 08 (Sales)</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3 text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.05em] text-on-surface-variant">
                  Time Slot
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-lg bg-surface-container-low p-3">
                    <span className="material-symbols-outlined text-sm text-secondary">calendar_today</span>
                    <span className="text-xs font-medium">Oct 24, 2023</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-surface-container-low p-3">
                    <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                    <span className="text-xs font-medium">09:00 - 17:00</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.05em] text-on-surface-variant">
                  Amenities
                </label>
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="rounded-full bg-on-primary-fixed px-4 py-2 text-[11px] font-bold text-surface">
                    Dual Monitors
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-surface-container-high px-4 py-2 text-[11px] font-medium text-on-surface-variant transition-colors hover:bg-surface-container-highest"
                  >
                    Whiteboard
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-surface-container-high px-4 py-2 text-[11px] font-medium text-on-surface-variant transition-colors hover:bg-surface-container-highest"
                  >
                    Standing Desk
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-surface-container-high px-4 py-2 text-[11px] font-medium text-on-surface-variant transition-colors hover:bg-surface-container-highest"
                  >
                    Window View
                  </button>
                </div>
              </div>

              <div className="border-t border-outline-variant/10 pt-4">
                <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.05em] text-on-surface-variant">
                  Add Colleagues
                </label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search team members..."
                    value={teammateQuery}
                    onChange={handleTeammateSearch}
                    className="w-full rounded-lg border-none bg-surface-container-low py-3 pl-10 pr-4 text-sm focus:ring-1 focus:ring-secondary/30"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-3 text-lg text-on-surface-variant">
                    search
                  </span>
                </div>

                {selectedColleagues.length > 0 && (
                  <>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
                      Selected colleagues
                    </p>
                    <div className="mb-4 space-y-3">
                      {selectedColleagues.map((mate) => (
                        <button
                          key={mate.id}
                          type="button"
                          onClick={() => toggleColleagueSelection(mate.id)}
                          className="flex w-full cursor-pointer items-center justify-between rounded-lg p-2 text-left transition-colors hover:bg-surface-container-low"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-[10px] font-bold">
                              {getInitials(mate.name)}
                            </div>
                            <div>
                              <p className="flex items-center gap-2 text-xs font-bold">
                                {mate.name}
                                <span className={`h-2 w-2 rounded-full ${statusDotClass[mate.status]}`} title={mate.status}></span>
                              </p>
                              <p className="text-[10px] text-on-surface-variant">
                                {mate.location} • {mate.status}
                              </p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-lg text-secondary">remove_circle</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
                  {teammateQuery.trim() ? 'Search results' : 'Suggested colleagues'}
                </p>
                <div className="space-y-3">
                  {visibleUnselected.map((mate) => (
                    <button
                      key={mate.id}
                      type="button"
                      onClick={() => toggleColleagueSelection(mate.id)}
                      className="flex w-full cursor-pointer items-center justify-between rounded-lg p-2 text-left transition-colors hover:bg-surface-container-low"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-[10px] font-bold">
                          {getInitials(mate.name)}
                        </div>
                        <div>
                          <p className="flex items-center gap-2 text-xs font-bold">
                            {mate.name}
                            <span className={`h-2 w-2 rounded-full ${statusDotClass[mate.status]}`} title={mate.status}></span>
                          </p>
                          <p className="text-[10px] text-on-surface-variant">
                            {mate.location} • {mate.status}
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-lg text-secondary">add_circle</span>
                    </button>
                  ))}
                  {teammateQuery.trim() && searchMatches.length === 0 && (
                    <p className="rounded-lg bg-surface-container-low p-3 text-xs text-on-surface-variant">
                      No teammates found for that prefix. Try another starting letter.
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={handleRunSearch}
                className="w-full rounded-xl bg-gradient-to-br from-secondary to-secondary-container py-4 text-sm font-bold text-white shadow-lg shadow-secondary/20 transition-all active:scale-95"
              >
                {bookingType === 'meetingRoom' ? 'Search Meeting Rooms' : 'Search Workstations'}
              </button>
            </div>
          </section>
        )}

        {showResults && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="font-headline text-2xl font-bold tracking-tight">
                  {bookingType === 'meetingRoom' ? 'Meeting Room Results' : 'Workstation Results'}
                </h2>
                <p className="text-sm text-on-surface-variant">{results.length} available options found</p>
              </div>
              <button
                type="button"
                onClick={() => setView('search')}
                className="inline-flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Refine Search
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {results.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedItem(item);
                    setView('details');
                  }}
                  className="group rounded-xl border border-transparent bg-surface-container-lowest p-4 text-left shadow-sm transition-all hover:border-secondary/20"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div className="rounded-lg bg-surface-container-low p-2 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                      <span className="material-symbols-outlined">
                        {item.kind === 'Meeting Room' ? 'meeting_room' : item.kind === 'Pod' ? 'chair' : 'desk'}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-secondary">AVAILABLE</span>
                  </div>
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="text-xs text-on-surface-variant">{item.location}</p>
                  <p className="mt-2 text-xs text-outline">{item.blurb}</p>
                </button>
              ))}
            </div>
          </section>
        )}

        {showDetails && (
          <section className="space-y-6">
            <button
              type="button"
              onClick={() => setView('results')}
              className="inline-flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container-high"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back To Results
            </button>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="space-y-5 lg:col-span-5">
                <div className="rounded-xl bg-surface-container-lowest p-6 shadow-[0_10px_24px_rgba(26,28,28,0.06)]">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="font-headline text-2xl font-bold tracking-tight">{selectedItem.name}</h2>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.05em] text-secondary">
                      {selectedItem.kind}
                    </span>
                  </div>
                  <p className="mb-3 text-sm font-medium text-on-surface-variant">{selectedItem.location}</p>
                  <p className="mb-4 text-sm text-outline">{selectedItem.blurb}</p>

                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
                    Resources
                  </p>
                  <ResourcePills resources={selectedItem.resources} />

                  {selectedColleagues.length > 0 && (
                    <div className="mt-4 border-t border-outline-variant/10 pt-4">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
                        Invite Colleagues
                      </p>
                      <ColleagueRows colleagues={selectedColleagues} />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleBookSelected}
                    className="mt-6 w-full rounded-xl bg-gradient-to-br from-secondary to-secondary-container py-4 text-sm font-bold text-white shadow-lg shadow-secondary/20 transition-all active:scale-95"
                  >
                    Book {selectedItem.kind}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-container-low shadow-inner">
                  <img alt="Interactive Floor Plan" className="h-full w-full object-cover" src={floorPlanImage} />
                  <div
                    className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-lg shadow-secondary/40"
                    style={{ left: `${selectedItem.marker.x}%`, top: `${selectedItem.marker.y}%` }}
                  >
                    <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-white">
                      {selectedItem.kind === 'Meeting Room' ? 'MR' : selectedItem.kind === 'Pod' ? 'P' : 'W'}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-on-surface-variant">
                  Floor plan overlay pinpoints where this {selectedItem.kind.toLowerCase()} is located.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </AppShell>
  );
}
