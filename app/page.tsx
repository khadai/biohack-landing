import { AboutSection } from "./components/about-section";
import { WhatWillItBeSection } from "./components/what-will-it-be-section";
import { HeroSection } from "./components/hero-section";
import { PartnersMarquee } from "./components/partners-marquee";
import { QuoteSection } from "./components/quote-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <div className="landing">
      <SiteHeader />

      <main>
        <HeroSection />
        <PartnersMarquee />
        {/*<QuoteSection />*/}
        <AboutSection />
        <WhatWillItBeSection />
      </main>

      <SiteFooter />
    </div>
  );
}
