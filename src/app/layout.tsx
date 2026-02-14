import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Free Study Abroad Webinar | Abroad Scholars",
  description:
    "Join 8,000+ successful students. Free expert-led webinar on university selection, scholarships, visa strategies across 8 countries.",

  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "enJyZDEM5w3U0wIPq8lgfm34hlBCCMbmv36vA1SL4-o",
  },

  keywords: [
    "study abroad",
    "webinar",
    "scholarships",
    "visa",
    "university selection",
    "international education",
  ],

  openGraph: {
    title: "Free Study Abroad Webinar | Abroad Scholars",
    description:
      "Join 8,000+ successful students. Free expert-led webinar on university selection, scholarships, visa strategies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17264874781"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17264874781');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/vg2eh5cqsb";
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script");
  `}
        </Script>

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
