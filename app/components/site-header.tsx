"use client";

import Image from "next/image";
import { useState } from "react";
import arrowRightTopIcon from "../assets/icons/arrow--up-right.svg";
import { FORM_LINK, IG_LINK } from "../lib/constants";
import igImage from "@/app/assets/icons/instagram.svg";

export function SiteHeader() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <header className={`header ${isMobileNavVisible ? "" : "header--mobile-nav-hidden"}`}>
      <button
        type="button"
        className="brand"
        onClick={() => setIsMobileNavVisible((prev) => !prev)}
        aria-expanded={isMobileNavVisible}
        aria-controls="header-nav-links"
      >
        <Image src="/logo.svg" alt="Logo" width={40} height={56} priority />
        <span>БІОХАКАТОН UA</span>
      </button>

      <nav className="nav-links" id="header-nav-links">
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
