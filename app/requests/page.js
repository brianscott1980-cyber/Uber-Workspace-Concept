'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

const initialRequests = [
  {
    id: '#REQ-8291',
    title: 'Keyboard Replacement',
    category: 'IT Support',
    status: 'In Progress',
    createdAt: 'Requested 2 days ago',
  },
];

let inMemoryRequests = [...initialRequests];

const categoryTemplates = {
  workplace: {
    category: 'Workplace',
    subCategory: 'Facilities Maintenance',
    subject: 'Workplace Request',
    details: 'Please provide details about your building or facilities request.',
  },
  'it-support': {
    category: 'IT Support',
    subCategory: 'Hardware Support',
    subject: 'IT Support Needed',
    details: 'Issue with hardware and/or account access. Device: MacBook Pro 16". Office: Floor 4.',
  },
  'hr-queries': {
    category: 'HR Queries',
    subCategory: 'Benefits',
    subject: 'HR Query',
    details: 'Question related to payroll, policy, or benefits.',
  },
  'office-access': {
    category: 'Office Access',
    subCategory: 'Visitor Registration',
    subject: 'Visitor Registration',
    details: 'Need to pre-clear guest access for office entry.',
  },
  general: {
    category: 'General',
    subCategory: 'General Inquiry',
    subject: 'General Request',
    details: '',
  },
};

const categoryOptions = {
  Workplace: ['Facilities Maintenance', 'Cleaning & Supplies', 'Furniture & Ergonomics', 'Workspace Move'],
  'IT Support': ['Hardware Support', 'Software Access', 'Network & VPN', 'Account Recovery'],
  'HR Queries': ['Payroll', 'Benefits', 'Policy Clarification', 'Leave & Time Off'],
  'Office Access': ['Visitor Registration', 'Badge Access', 'Security Incident', 'Parking Access'],
  General: ['General Inquiry', 'Unsure / Needs Triage'],
};

function getNextRequestId() {
  const number = 9000 + inMemoryRequests.length + 1;
  return `#REQ-${number}`;
}

function RequestsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const formCategory = searchParams.get('category') ?? '';
  const mode = searchParams.get('mode') ?? '';

  const prefillTemplate = useMemo(() => {
    return categoryTemplates[formCategory] ?? categoryTemplates.general;
  }, [formCategory]);

  const shouldStartInForm = mode === 'form';

  const [stage, setStage] = useState(shouldStartInForm ? 'form' : 'overview');
  const [requests, setRequests] = useState(() => inMemoryRequests);

  const [requestCategory, setRequestCategory] = useState(prefillTemplate.category);
  const [requestSubCategory, setRequestSubCategory] = useState(prefillTemplate.subCategory);
  const [subject, setSubject] = useState(prefillTemplate.subject);
  const [details, setDetails] = useState(prefillTemplate.details);

  useEffect(() => {
    setStage(shouldStartInForm ? 'form' : 'overview');
    setRequestCategory(prefillTemplate.category);
    setRequestSubCategory(prefillTemplate.subCategory);
    setSubject(prefillTemplate.subject);
    setDetails(prefillTemplate.details);
  }, [prefillTemplate, shouldStartInForm]);

  const goToOverview = () => {
    setStage('overview');
    router.replace('/requests');
  };

  const openTemplateForm = (key) => {
    const template = categoryTemplates[key] ?? categoryTemplates.general;
    setRequestCategory(template.category);
    setRequestSubCategory(template.subCategory);
    setSubject(template.subject);
    setDetails(template.details);
    setStage('form');
    trackEvent('request_category_selected', {
      category: template.category,
      sub_category: template.subCategory,
      source_key: key,
    });
  };

  useEffect(() => {
    const validSubCategories = categoryOptions[requestCategory] ?? categoryOptions.General;
    if (!validSubCategories.includes(requestSubCategory)) {
      setRequestSubCategory(validSubCategories[0]);
    }
  }, [requestCategory, requestSubCategory]);

  const handleSaveRequest = (event) => {
    event.preventDefault();

    const nextRequest = {
      id: getNextRequestId(),
      title: subject.trim() || 'General Request',
      category: requestCategory,
      subCategory: requestSubCategory,
      status: 'Pending',
      createdAt: 'Requested just now',
    };

    const next = [nextRequest, ...inMemoryRequests];
    inMemoryRequests = next;
    setRequests(next);
    trackEvent('request_raised', {
      category: requestCategory,
      sub_category: requestSubCategory,
      subject: nextRequest.title,
    });
    goToOverview();
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <nav className="fixed top-0 z-50 w-full bg-[#f9f9f9]/80 backdrop-blur-xl">
        <div className="flex w-full items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => (stage === 'form' ? goToOverview() : router.back())}
              className="flex items-center justify-center rounded-full p-2 transition-colors duration-200 hover:bg-[#e8e8e8] active:scale-95"
            >
              <span className="material-symbols-outlined text-secondary">arrow_back</span>
            </button>
            <h1 className="font-headline text-lg font-bold tracking-tight text-on-surface">New Request</h1>
          </div>
          <div className="w-10"></div>
        </div>
      </nav>

      <main className="mx-auto min-h-screen max-w-md px-6 pb-32 pt-24">
        {stage === 'overview' && (
          <>
            <header className="mb-8">
              <h2 className="font-headline text-[2.5rem] font-extrabold leading-tight tracking-tight text-on-surface">
                How can we help?
              </h2>
            </header>

            <section className="mb-10">
              <div className="group relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline/60">search</span>
                <input
                  type="text"
                  placeholder="Search for help"
                  className="w-full rounded-xl border-none bg-surface-container-low py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary"
                />
              </div>
            </section>

            <section className="mb-12">
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => openTemplateForm('workplace')}
                  className="aspect-square rounded-xl bg-surface-container-lowest p-5 text-left transition-transform active:scale-[0.98]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary">apartment</span>
                  </div>
                  <div className="mt-5">
                    <p className="font-headline text-lg font-bold text-on-surface">Workplace</p>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-outline">Building &amp; Facilities</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => openTemplateForm('it-support')}
                  className="aspect-square rounded-xl bg-surface-container-lowest p-5 text-left transition-transform active:scale-[0.98]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary">dns</span>
                  </div>
                  <div className="mt-5">
                    <p className="font-headline text-lg font-bold text-on-surface">IT Support</p>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-outline">Hardware &amp; Access</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => openTemplateForm('hr-queries')}
                  className="aspect-square rounded-xl bg-surface-container-lowest p-5 text-left transition-transform active:scale-[0.98]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary">groups</span>
                  </div>
                  <div className="mt-5">
                    <p className="font-headline text-lg font-bold text-on-surface">HR Queries</p>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-outline">Payroll &amp; Benefits</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => openTemplateForm('office-access')}
                  className="aspect-square rounded-xl bg-surface-container-lowest p-5 text-left transition-transform active:scale-[0.98]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-secondary">badge</span>
                  </div>
                  <div className="mt-5">
                    <p className="font-headline text-lg font-bold text-on-surface">Office Access</p>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-outline">Visitor Management</p>
                  </div>
                </button>
              </div>
            </section>

            <section className="mb-12">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-headline text-xl font-bold text-on-surface">Recent Requests</h3>
                <span className="cursor-pointer text-[10px] font-bold uppercase tracking-widest text-secondary">View All</span>
              </div>

              <div className="space-y-4">
                {requests.map((request) => (
                  <div key={request.id} className="rounded-xl bg-surface-container-low p-5">
                    <div className="mb-2 flex items-start justify-between">
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${
                          request.status === 'In Progress'
                            ? 'bg-secondary/10 text-secondary'
                            : request.status === 'Pending'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-surface-container-high text-on-surface'
                        }`}
                      >
                        {request.status}
                      </span>
                      <span className="text-[10px] font-medium text-outline">{request.id}</span>
                    </div>
                    <p className="mb-1 font-bold text-on-surface">{request.title}</p>
                    <p className="text-sm text-outline">
                      {request.createdAt} • {request.category} • {request.subCategory ?? 'General Inquiry'}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <button
              type="button"
              onClick={() => openTemplateForm('general')}
              className="w-full rounded-xl bg-gradient-to-br from-secondary to-secondary-container py-5 font-headline font-bold text-on-primary shadow-[0_12px_32px_rgba(0,84,203,0.15)] transition-transform active:scale-[0.96]"
            >
              Start a General Request
            </button>
          </>
        )}

        {stage === 'form' && (
          <form onSubmit={handleSaveRequest} className="space-y-6">
            <header className="mb-2">
              <h2 className="font-headline text-[2.1rem] font-extrabold leading-tight tracking-tight text-on-surface">
                Request Details
              </h2>
              <p className="mt-1 text-sm text-outline">Submit your request and we will route it instantly.</p>
            </header>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Category</span>
              <select
                value={requestCategory}
                onChange={(event) => setRequestCategory(event.target.value)}
                className="w-full rounded-xl border-none bg-surface-container-low px-4 py-4 text-sm font-semibold focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary"
              >
                {Object.keys(categoryOptions).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Sub Category</span>
              <select
                value={requestSubCategory}
                onChange={(event) => setRequestSubCategory(event.target.value)}
                className="w-full rounded-xl border-none bg-surface-container-low px-4 py-4 text-sm font-semibold focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary"
              >
                {(categoryOptions[requestCategory] ?? categoryOptions.General).map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Subject</span>
              <input
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="w-full rounded-xl border-none bg-surface-container-low px-4 py-4 text-sm font-semibold focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.05em] text-outline">Details</span>
              <textarea
                rows={6}
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                className="w-full rounded-xl border-none bg-surface-container-low px-4 py-4 text-sm leading-relaxed focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={goToOverview}
                className="rounded-xl bg-surface-container-low py-4 text-sm font-bold text-on-surface transition-colors hover:bg-surface-container-high"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-br from-secondary to-secondary-container py-4 text-sm font-bold text-on-primary shadow-[0_12px_32px_rgba(0,84,203,0.15)] transition-transform active:scale-[0.96]"
              >
                Save Request
              </button>
            </div>
          </form>
        )}
      </main>

      <nav className="fixed bottom-0 z-50 w-full rounded-t-3xl bg-[#ffffff]/90 pb-safe shadow-[0_-8px_24px_rgba(26,28,28,0.04)] backdrop-blur-2xl md:hidden">
        <div className="mx-auto flex h-20 w-full max-w-screen-md items-center justify-around px-2">
          <Link href="/" className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-2xl bg-surface-container-low px-1 py-2 text-secondary duration-300 active:scale-90">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>home_work</span>
            <span className="mt-1 truncate text-[9px] font-bold uppercase tracking-[0.05em]">Home</span>
          </Link>
          <Link href="/travel" className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-2 text-primary duration-300 hover:text-on-surface active:scale-90">
            <span className="material-symbols-outlined">commute</span>
            <span className="mt-1 truncate text-[9px] font-medium uppercase tracking-[0.05em]">Commute</span>
          </Link>
          <Link href="/lunch" className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-2 text-primary duration-300 hover:text-on-surface active:scale-90">
            <span className="material-symbols-outlined">restaurant</span>
            <span className="mt-1 truncate text-[9px] font-medium uppercase tracking-[0.05em]">Lunch</span>
          </Link>
          <Link href="/book" className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-2 text-primary duration-300 hover:text-on-surface active:scale-90">
            <span className="material-symbols-outlined">calendar_add_on</span>
            <span className="mt-1 truncate text-[9px] font-medium uppercase tracking-[0.05em]">Book</span>
          </Link>
          <Link href="/people" className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-2 text-primary duration-300 hover:text-on-surface active:scale-90">
            <span className="material-symbols-outlined">group</span>
            <span className="mt-1 truncate text-[9px] font-medium uppercase tracking-[0.05em]">People</span>
          </Link>
          <Link href="/afterwork" className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-2 text-primary duration-300 hover:text-on-surface active:scale-90">
            <span className="material-symbols-outlined">local_bar</span>
            <span className="mt-1 truncate text-[9px] font-medium uppercase tracking-[0.05em]">After</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default function RequestsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <RequestsPageContent />
    </Suspense>
  );
}
