'use client';

import { faker } from '@faker-js/faker';
import { useMemo, useState } from 'react';
import AppShell from '@/components/AppShell';

const filterChips = [
  'Your Team',
  'All Colleagues',
  'Design Team',
  'Engineering',
  'Product Management',
  'Executive Leadership',
];

const colleagues = [
  {
    id: 'laura',
    name: 'Laura',
    role: 'Global Workplace Design',
    team: 'Workplace Experience',
    statusText: 'In Office - Floor 12',
    statusTone: 'text-secondary',
    statusDot: 'bg-green-500',
    statusIcon: 'location_on',
    image:
      '/Laura.jpeg',
    actions: ['forum', 'calendar_month'],
    featured: false,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Senior Product Designer',
    team: 'Design Team',
    statusText: 'In Office - Floor 4',
    statusTone: 'text-secondary',
    statusDot: 'bg-green-500',
    statusIcon: 'location_on',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxW0h2PKX26CYCWSUF5wSeHkgod4viaZx_9A889yk_jMCtEDqVbWebKEFCVc4MdKN9fRU5rLedvuHK6uJwtvj0vW25wWklOhK9KDP5VoSS_QLOfRRNRW2suPqP3D6hLqqsqWRZe7r5ZLZDXScHsdvOEHjz2EwEEerxRJpdXQNKinaHaOjl393M7q5goL_FwwJDbbVluqz5Xwu2m-8gse8ojk-uSF2lQEJFUgV7R9oVRxtNUs3XHTR-zA4Bc5HEBse1fRvjZ2yEzSs',
    actions: ['forum', 'calendar_month'],
    featured: false,
  },
  {
    name: 'Marcus Chen',
    role: 'VP of Engineering',
    team: 'Executive Leadership',
    statusText: 'In a Meeting',
    statusTone: 'text-amber-600',
    statusDot: 'bg-amber-500',
    statusIcon: 'event_busy',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGd5RvexQebAgJpn3wcpZyrrpIl_daMTIAWEB1Fp7VEfXcenUDh5_IOePlyCwNh9Kbb38599NabKNsEl_iJzwjbRzoKhDCdx2vLyxLoZy2Bnpvs2jAzXGtWqgKX97gDMZJTg9stX-DwpwWlQTS9v1uBc_FrbfoWObr230vWxkaikKXPukrTciHu-X3W2I4eWbdXB1NKOCDcpvb-eLPvMQGIy1ZXWTiqP1dTfo5-YKqoQEKTlckxccdBsnlzpJoCrsN_5LnrVKTp9M',
    actions: ['forum', 'calendar_month'],
    featured: false ,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Chief People Officer',
    team: 'Executive Leadership',
    statusText: 'Remote',
    statusTone: 'text-blue-500',
    statusDot: 'bg-blue-500',
    statusIcon: 'home_work',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGOslwCdTkd8axOIYzMI7pSige-wYEpRgX3JEvG192QANeO-shj2_CWGHNxpZz3ksl8BboRVYVYggHE_A5holrVWiZpJoA8wfeOPFhByiuphr9vTzoQuruYmfcuOJrF-HqKV89vo4362IjsFCXOpawf6Vvzf3TEgMIv9l6yLOrkRfb_SAnSKQhClunxNdQhcitWZtNChtrC2BmyTJhpkOti74oTDK7hZ0RhWNw5MoSg17ndyro8c-vO09kE5sL6rOhUXykqz3Kx4s',
    actions: ['forum', 'calendar_month'],
    featured: false,
  },
];

const statusOptions = [
  { statusText: 'In Office - Floor 4', statusTone: 'text-secondary', statusDot: 'bg-green-500', statusIcon: 'location_on' },
  { statusText: 'In a Meeting', statusTone: 'text-amber-600', statusDot: 'bg-amber-500', statusIcon: 'event_busy' },
  { statusText: 'Remote', statusTone: 'text-blue-500', statusDot: 'bg-blue-500', statusIcon: 'home_work' },
];

const sampleImages = colleagues.filter((c) => c.name !== 'Laura').map((c) => c.image);
const edinburghHeaderImages = [
  '/edinburgh-bg/1.jpeg',
  '/edinburgh-bg/2.jpg',
  '/edinburgh-bg/3.jpg',
  '/edinburgh-bg/4.jpg',
  '/edinburgh-bg/5.jpg',
  '/edinburgh-bg/6.jpeg',
  '/edinburgh-bg/7.jpg',
];

export default function PeoplePage() {
  const [selectedFilter, setSelectedFilter] = useState('Your Team');
  const [selectedPersonName, setSelectedPersonName] = useState(null);

  const randomExamplesByFilter = useMemo(() => {
    const buildExamples = (teamLabel, count) =>
      Array.from({ length: count }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        team: teamLabel,
        role:
          teamLabel === 'Workplace Experience'
            ? faker.helpers.arrayElement([
                'Workplace Experience Manager',
                'Workplace Program Manager',
                'Office Experience Specialist',
                'Global Workplace Designer',
                'Facilities Experience Partner',
                'Workplace Operations Coordinator',
              ])
            : teamLabel === 'Design Team'
            ? faker.helpers.arrayElement(['Product Designer', 'Design Manager', 'UX Researcher'])
            : teamLabel === 'Engineering'
              ? faker.helpers.arrayElement(['Frontend Engineer', 'Backend Engineer', 'Engineering Manager'])
              : teamLabel === 'Product Management'
                ? faker.helpers.arrayElement(['Product Manager', 'Group PM', 'Program Manager'])
                : faker.helpers.arrayElement(['Director', 'VP', 'Chief of Staff']),
        ...faker.helpers.arrayElement(statusOptions),
        image: faker.helpers.arrayElement(sampleImages),
        actions: ['forum', 'calendar_month'],
        featured: false,
      }));

    return {
      'Your Team': buildExamples('Workplace Experience', 4),
      'All Colleagues': Array.from({ length: 4 }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        team: faker.helpers.arrayElement([
          'Workplace Experience',
          'Design Team',
          'Engineering',
          'Product Management',
          'Executive Leadership',
        ]),
        role: faker.helpers.arrayElement(['Product Manager', 'Staff Engineer', 'Designer', 'Operations Lead']),
        ...faker.helpers.arrayElement(statusOptions),
        image: faker.helpers.arrayElement(sampleImages),
        actions: ['forum', 'calendar_month'],
        featured: false,
      })),
      'Design Team': buildExamples('Design Team', 3),
      Engineering: buildExamples('Engineering', 3),
      'Product Management': buildExamples('Product Management', 3),
      'Executive Leadership': buildExamples('Executive Leadership', 3),
    };
  }, []);

  const filteredColleagues = useMemo(() => {
    if (selectedFilter === 'All Colleagues') {
      return colleagues;
    }
    if (selectedFilter === 'Your Team') {
      return colleagues.filter((person) => person.team === 'Workplace Experience');
    }
    return colleagues.filter((person) => person.team === selectedFilter);
  }, [selectedFilter]);

  const displayedColleagues = useMemo(() => {
    const extras = randomExamplesByFilter[selectedFilter] ?? [];
    return [...filteredColleagues, ...extras];
  }, [filteredColleagues, randomExamplesByFilter, selectedFilter]);

  const selectedPerson =
    displayedColleagues.find((person) => person.name === selectedPersonName) ??
    colleagues.find((person) => person.name === selectedPersonName) ??
    null;
  const selectedHeaderImage = useMemo(
    () => faker.helpers.arrayElement(edinburghHeaderImages),
    [selectedPersonName]
  );

  return (
    <AppShell title="Uber Edinburgh">
      <main className="mx-auto max-w-7xl px-6 pb-32 pt-24">
        {!selectedPerson && (
          <>
            <section className="mb-8">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <span className="mb-2 block text-[0.6875rem] font-medium uppercase tracking-[0.05em] text-secondary">
                    Corporate Directory
                  </span>
                  <h2 className="font-headline text-4xl font-extrabold tracking-[-0.02em] text-on-surface md:text-5xl">
                    People &amp; Teams
                  </h2>
                </div>
                <div className="w-full md:w-96">
                  <div className="group relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                      search
                    </span>
                    <input
                      type="text"
                      placeholder="Search by name, role, or team..."
                      className="w-full rounded-xl border-none bg-surface-container-low py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/60 transition-all focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary/20"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="no-scrollbar mb-8 flex gap-3 overflow-x-auto pb-2">
              {filterChips.map((chip, index) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    setSelectedFilter(chip);
                    setSelectedPersonName(null);
                  }}
                  className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium ${
                    selectedFilter === chip || (index === 0 && !selectedFilter)
                      ? 'bg-on-primary-fixed text-surface'
                      : 'bg-surface-container-high text-on-surface transition-all hover:bg-surface-container-highest'
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {displayedColleagues.map((person) => (
                <button
                  key={person.id ?? person.name}
                  type="button"
                  onClick={() => setSelectedPersonName(person.name)}
                  className={`group flex w-full items-center justify-between rounded-xl p-6 text-left ${
                    person.featured
                      ? 'border-l-4 border-secondary bg-surface-container-low'
                      : 'cursor-pointer bg-surface-container-lowest transition-all hover:bg-surface-container-low'
                  }`}
                >
                  <div className="flex min-w-0 flex-1 items-start gap-5">
                    <div className="relative h-12 w-12 min-w-12 shrink-0">
                      <img alt={person.name} className="h-12 w-12 rounded-lg object-cover" src={person.image} />
                      <div
                        className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-4 ${person.statusDot} ${
                          person.featured ? 'border-surface-container-low' : 'border-surface-container-lowest group-hover:border-surface-container-low'
                        } transition-all`}
                      ></div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="whitespace-normal break-words font-headline text-base font-bold text-on-surface">{person.name}</h3>
                      <p className="whitespace-normal break-words text-sm font-medium text-outline">{person.role}</p>
                      <div className={`mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${person.statusTone}`}>
                        <span className="material-symbols-outlined text-[14px]">{person.statusIcon}</span>
                        {person.statusText}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0 items-start gap-2 self-start">
                    {['forum', 'calendar_month'].map((action) => (
                      <span
                        key={action}
                        className={`material-symbols-outlined rounded-lg p-2 transition-all ${
                          person.featured
                            ? 'bg-surface-container-lowest text-secondary'
                            : 'bg-surface-container-high text-secondary group-hover:bg-secondary group-hover:text-white'
                        }`}
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {selectedPerson && (
          <section>
            <button
              type="button"
              onClick={() => setSelectedPersonName(null)}
              className="mb-4 inline-flex items-center gap-1 rounded-lg bg-surface-container-low px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container-high"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back To People
            </button>

            <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_12px_32px_rgba(26,28,28,0.06)]">
              <div className="relative h-32 bg-gradient-to-br from-secondary to-secondary-container">
                <img
                  alt="Edinburgh"
                  className="absolute inset-0 h-full w-full object-cover"
                  src={selectedHeaderImage}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-secondary-container/15"></div>
                <div className="absolute -bottom-12 left-8 z-20">
                  <img
                    alt={`${selectedPerson.name} Profile`}
                    className="h-24 w-24 rounded-2xl border-4 border-surface-container-lowest object-cover"
                    src={selectedPerson.image}
                  />
                </div>
              </div>

              <div className="px-8 pb-8 pt-16">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">{selectedPerson.name}</h3>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant transition-all hover:bg-surface-container-high"
                    >
                      <span className="material-symbols-outlined">share</span>
                    </button>
                    <button
                      type="button"
                      className="rounded-xl bg-gradient-to-br from-secondary to-secondary-container px-6 py-2 font-bold text-white shadow-lg shadow-secondary/20 duration-200 active:scale-95"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <p className="mb-6 w-full text-sm font-medium tracking-tight text-secondary">
                  {selectedPerson.role} • {selectedPerson.team}
                </p>

                <div className="mb-8">
                  <h4 className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-outline">
                    Availability Today
                  </h4>
                  <div className="grid grid-cols-6 gap-2">
                    {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'].map((time, idx) => (
                      <div key={time} className="flex flex-col items-center gap-1">
                        <div className={`h-1.5 w-full rounded-full ${idx === 2 || idx === 3 ? 'bg-amber-500' : 'bg-green-500'}`}></div>
                        <span className="text-[10px] font-medium text-outline">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-6 text-[0.6875rem] font-bold uppercase tracking-widest text-outline">
                    Reporting Line
                  </h4>
                  <div className="relative space-y-8">
                    <button
                      type="button"
                      onClick={() => setSelectedPersonName('Sarah Jenkins')}
                      className="flex items-center gap-3 rounded-lg p-1 text-left transition-colors hover:bg-surface-container-low"
                    >
                      <img
                        alt="Manager"
                        className="h-10 w-10 rounded-lg object-cover ring-2 ring-outline-variant/10"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDii_Vp8gH4xN2pvNBqTpkKdqis02ri-NIDBjgtxrs9vZCYk6lpqQZpib18UtQ-NkTwZg_zLwaEnRYix5d18V-r9pYtYpR591OB1QAUNNGRx1Y-WE7zWRX_nkswzfBmNQPHroO2uc5BWgul5athkGKoo_GAwfoP2WUxll0DCGk9V6Pnyi8nrpKWZaQrsNt-qNIW9udBtD7-clGYXB6VNd4dhxX5eoZyUmflfWRLfmIEMGgpijqVX03cbGDKiiB_BsvF8uaQRlgX_6Y"
                      />
                      <div>
                        <p className="text-sm font-bold text-on-surface">Sarah Jenkins</p>
                        <p className="text-xs text-outline">Chief People Officer</p>
                      </div>
                    </button>

                    <div className="absolute bottom-10 left-[19px] top-10 w-[2px] bg-outline-variant/20"></div>

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary font-bold text-white">MC</div>
                      <div className="rounded-lg border-l-2 border-secondary bg-surface-container-low px-3 py-1.5">
                        <p className="text-sm font-bold text-on-surface">{selectedPerson.name}</p>
                        <p className="text-xs font-semibold text-secondary">{selectedPerson.role}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedPersonName('Elena Rodriguez')}
                      className="flex items-center gap-3 rounded-lg p-1 text-left transition-colors hover:bg-surface-container-low"
                    >
                      <img
                        alt="Report"
                        className="h-8 w-8 rounded-lg object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVokDqmyj2NT0hHc5YxPYwExD7N9zuNjcR7llvAy5Pal0-DHz1LC-u_e_q0soiLDz5QrCmJQORZcYBQf4CbfKeyVlxlqw0SkSeu-1tNyUYVlENrsZJtK2OwURVqAhIBxydnJc6RzEnCTlmyR9xia5-2NQ0FjIB_HjVAa4xkFzdY4zPcQV-8_9vHsX_PNcUhaSgcCVc4c18FjPnkbHK51d7t0Ha5hjImSJ9hd_TI4ORVMnEVE4WLvjmU0Zpl7xyAON31rcfT0pytB0"
                      />
                      <div>
                        <p className="text-xs font-bold text-on-surface">Elena Rodriguez</p>
                        <p className="text-[10px] text-outline">Senior Product Designer</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </AppShell>
  );
}
