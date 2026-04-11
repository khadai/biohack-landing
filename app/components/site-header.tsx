import Image from "next/image";
import arrowRightTopIcon from "../assets/icons/arrow--up-right.svg";
import { FORM_LINK } from "../lib/constants";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="brand">
        <Image src="/logo.svg" alt="Logo" width={40} height={56} priority />
        <span>БІОХАКАТОН UA</span>
      </div>
      <nav className="nav-links">
        <a href="#about">Про нас</a>
      </nav>
      <div className="header-actions">
        <a className="apply-button" href={FORM_LINK} target="_blank" rel="noreferrer">
          Подати заявку
          <Image src={arrowRightTopIcon} alt="" width={22} height={22} priority />
        </a>
      </div>
    </header>
  );
}
