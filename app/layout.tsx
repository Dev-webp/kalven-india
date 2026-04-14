import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Kalven IT Group India | IT Services & Recruitment",
    template: "%s | Kalven IT Group India",
  },
  description:
    "Kalven IT Group India — Custom website development, mobile apps, IT staffing and digital marketing for Indian businesses.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="L_PNy3dgEzp57F2JsXfvTXBc7aedqUdzow1IyvEmCUE"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">

        {/* ✅ page.tsx renders here automatically — no manual import needed */}
        {children}

        {/* ✅ Google Ads - Load gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17961063738"
          strategy="afterInteractive"
        />

        {/* ✅ Google Ads - Initialize gtag config */}
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17961063738');
          `}
        </Script>

        {/* ✅ Google Ads - Conversion Event Snippet
            NOTE: Move this to your Thank You / confirmation page only
            if you want to track a specific conversion (e.g. form submission).
            Remove from here if you don't want it firing on every page. */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17961063738/mianCI7UhoIcELqqwPRC',
              'value': 1.0,
              'currency': 'INR'
            });
          `}
        </Script>

        {/* ✅ Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2003555746606868');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}