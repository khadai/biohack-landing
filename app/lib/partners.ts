import type { StaticImageData } from "next/image";
import biomniLogo from "../assets/partners-logos/biomni.svg";
import explogenLogo from "../assets/partners-logos/explogen.svg";
import lnuLogo from "../assets/partners-logos/lnu.svg";
import lvivdepLogo from "../assets/partners-logos/lvivdep.svg";
import lvivOpenLabLogo from "../assets/partners-logos/lvivopenlab.svg";
import tvoryLogo from "../assets/partners-logos/logo_tvory_ua.svg";
import stLogo from "../assets/partners-logos/st.svg";
import lab404 from "../assets/partners-logos/diy.svg";

export type PartnerLogo = {
  src: StaticImageData;
  alt: string;
};

export const partnerLogos: PartnerLogo[] = [
  { src: tvoryLogo, alt: "Молодіжна організація Твори" },
  { src: lvivOpenLabLogo, alt: "Lviv Open Lab" },
  { src: lvivdepLogo, alt: "Львівська міська рада" },
  { src: lab404, alt: "DIY Лабораторія 404" },
  { src: stLogo, alt: "ST Lab. Перша молодіжна лабораторія" },
  { src: biomniLogo, alt: "Biomni" },
  { src: lnuLogo, alt: "Біологічний факультет ЛНУ" },
  { src: explogenLogo, alt: "Explogen" },
];
