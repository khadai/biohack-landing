import Image from "next/image";
import teamPicture from "../assets/team-picture.png";
import { FORM_LINK } from "../lib/constants";

export function TeamSection() {
  return (
    <section className="section narrow team-section" id="team">
      <h2>ХАКАЙ БІОЛОГІЮ РАЗОМ ІЗ ДРУЗЯМИ</h2>
      <p className="team-section__lead">Збирай команду:</p>

      <div className="team-section__rules">
        <p className="team-section__bracket">3-4 учні (8-11 класи) + 1 вчитель</p>
        <p className="team-section__bracket team-section__bracket--compact">1 школа = 1 команда</p>
      </div>

      <div className="team-section__image-wrap">
        <Image src={teamPicture} alt="Команда учасниць готує експеримент" />
      </div>

      <div className="team-section__meta">
        <p>
          Реєстрація до 16 квітня,
          <br />
          участь безкоштовна
        </p>
        <a className="team-section__cta" href={FORM_LINK} target="_blank" rel="noreferrer">
          Зареєструвати команду
        </a>
      </div>

      <div className="team-section__notes">
        <div className="team-section__card team-section__card--left">
          <p>
            <span>Найкращі проєкти</span> отримають цінні
            <br />
            подарунки та сертифікати.
          </p>
        </div>

        <div className="team-section__burst" aria-hidden />

        <div className="team-section__card team-section__card--right">
          <p>
            Знайомства з експертами з <span>IT та</span>
            <br />
            <span>біотех-компаній.</span>
          </p>
        </div>

        <div className="team-section__spark" aria-hidden />
      </div>

      <p className="team-section__coffee">
        <span aria-hidden>+</span> Кава-брейки включені
      </p>
    </section>
  );
}
