import Image from "next/image";
import heroImage from "../assets/hero-section-image.png";
import igImage from "../assets/icons/instagram.svg";
import { FORM_LINK, IG_LINK } from "../lib/constants";

export function HeroSection() {
  return (
    <section className="section hero">
      <div className="hero-image-wrap">
        <Image src={heroImage} alt="Зображення біохакатону" priority />
      </div>
      <div className="hero-content">
        <h1>
          ІІ
          <br /> УЧНІВСЬКИЙ БІОХАКАТОН
        </h1>
        <p className="hero-subtitle">Біотехнології після війни</p>
        <div className="hero-meta">1 травня 2026 | пр. Червоної Калини, 58</div>

        <p className="hero-copy">
          Одноденний науково-технічний інтенсив у Львові,
          <br />
          де біотехнологія стає інструментом відновлення України.
        </p>
        <div className="hero-actions" id="register">
          <a className="primary-button" href="#what-will-it-be">
            Дізнатися більше
          </a>
          {/*<span className="hero-note">1 вчитель + 3-4 учні</span>*/}
        </div>
      </div>
    </section>
  );
}
