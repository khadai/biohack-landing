import Image from "next/image";
import arrowRightTopIcon from "../assets/icons/arrow--up-right.svg";
import { FORM_LINK, IG_LINK } from "../lib/constants";
import igImage from "@/app/assets/icons/instagram.svg";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="brand">
        <Image src="/logo.svg" alt="Logo" width={40} height={56} priority />
        <span>БІОХАКАТОН UA</span>
      </div>

      <nav className="nav-links">
        <a href="#about">Про нас</a>
        <a href="#what-will-it-be">Про подію</a>
        <a href="#team">Реєстрація</a>
      </nav>
      <div className="header-actions">
        <a href={IG_LINK} target="_blank" rel="noreferrer" className="ig-header">
          <Image src={igImage} alt="IG" />
        </a>
        <a className="apply-button" href={FORM_LINK} target="_blank" rel="noreferrer">
          Подати заявку
          <Image src={arrowRightTopIcon} alt="" width={22} height={22} priority />
        </a>
      </div>
    </header>
  );
}
