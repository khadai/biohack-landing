"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { partnerLogos } from "../lib/partners";
import {ReactElement} from "react";

export function PartnersMarquee() {
  return (
    <section className="section partners">
      <Marquee
        autoFill
        speed={42}
        gradient={false}
        pauseOnHover
        pauseOnClick
        aria-label="Партнери"
        style={{ width: "100%" }}
      >
        {partnerLogos.map((partner) => (
          <div className="partner-item" key={partner.alt} title={partner.alt}>
            <Image src={partner.src} alt={partner.alt} title={partner.alt} />
          </div>
        ) as ReactElement)}
      </Marquee>
    </section>
  );
}
