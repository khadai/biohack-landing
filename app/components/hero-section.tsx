import Image from "next/image";
import heroImage from "../assets/hero-section-image.png";
import { FORM_LINK } from "../lib/constants";

export function HeroSection() {
  return (
    <section className="section hero">
      <div className="hero-image-wrap">
        <Image src={heroImage} alt="Зображення біохакатону" priority />
      </div>
      <div />
      <div className="hero-content">
        <h1>
          ІІ
          <br /> УЧНІВСЬКИЙ БІОХАКАТОН
        </h1>
        <p className="hero-subtitle">Біотехнології після війни</p>
        <div className="hero-meta">1 травня 2026 | Біохакатон UA</div>

        <p className="hero-copy">
          Одноденний науково-технічний інтенсив у Львові,
          <br />
          де біотехнологія стає інструментом відновлення України.
        </p>
        <div className="hero-actions" id="register">
          <a className="primary-button" href={FORM_LINK} target="_blank" rel="noreferrer">
            Дізнатися більше
          </a>
          {/*<span className="hero-note">1 вчитель + 3-4 учні</span>*/}
        </div>
      </div>
    </section>
  );
}
