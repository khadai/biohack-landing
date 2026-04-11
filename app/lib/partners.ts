import type { StaticImageData } from "next/image";
import biomniLogo from "../assets/partners-logos/biomni.svg";
import explogenLogo from "../assets/partners-logos/explogen.svg";
import lnuLogo from "../assets/partners-logos/lnu.svg";
import lvivdepLogo from "../assets/partners-logos/lvivdep.svg";
import lvivOpenLabLogo from "../assets/partners-logos/lvivopenlab.svg";
import stLogo from "../assets/partners-logos/st.svg";

export type PartnerLogo = {
  src: StaticImageData;
  alt: string;
};

export const partnerLogos: PartnerLogo[] = [
  { src: lvivOpenLabLogo, alt: "Lviv Open Lab" },
  { src: lvivdepLogo, alt: "Львівська міська рада" },
  { src: stLogo, alt: "ST" },
  { src: biomniLogo, alt: "Biomni" },
  { src: lnuLogo, alt: "ЛНУ" },
  { src: explogenLogo, alt: "Explogen" },
];
