import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./tailwind.css";
import "./globals.scss";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ІІ Учнівський біохакатон",
  description: "1 травня 2026",
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
