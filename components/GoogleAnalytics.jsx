'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { GA_MEASUREMENT_ID, trackPageView } from '@/lib/analytics';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const query = typeof window !== 'undefined' ? window.location.search : '';
    const url = `${pathname}${query}`;
    trackPageView(url);
  }, [pathname]);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
