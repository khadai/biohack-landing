import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./tailwind.css";
import "./globals.scss";
import { SITE_NAME, SITE_URL } from "./lib/constants";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description:
    "ІІ Учнівський біохакатон у Львові - подія для учнів, які цікавляться біологією, наукою та інноваціями.",
  keywords: [
    "біохакатон",
    "учнівський біохакатон",
    "біологія",
    "наука",
    "хакатон",
    "Львів",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "ІІ Учнівський біохакатон у Львові - подія для учнів, які цікавляться біологією, наукою та інноваціями.",
    url: "/",
    siteName: SITE_NAME,
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description:
      "ІІ Учнівський біохакатон у Львові - подія для учнів, які цікавляться біологією, наукою та інноваціями.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${firaMono.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
