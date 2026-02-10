import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Free Study Abroad Webinar | Abroad Scholars",
  description:
    "Join 8,000+ successful students. Free expert-led webinar on university selection, scholarships, visa strategies across 8 countries.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
