"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    dataLayer: any;
  }
}

const pageview = (url: any) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return;
  }
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

export default function AnalyticsTwo() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-K9TCZH8`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-41KC3CHD60"
      />
      <Script
        id="gt-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-41KC3CHD60');
  `,
        }}
      />
    </>
  );
}
