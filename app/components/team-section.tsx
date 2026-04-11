import Image from "next/image";
import scribble4 from "../assets/scribbles/scribble4.svg";
import scribble5 from "../assets/scribbles/scribble5.svg";
import scribble6 from "../assets/scribbles/scribble6.svg";
import teamPicture from "../assets/team-picture.jpg";
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
        <Image
          src={teamPicture}
          alt="Команда учасниць готує експеримент"
          // height={340}
          // objectFit="contain"
          // fill
          // width={0}
          // height={300}
          // sizes="100vw"
          // style={{
          //   width: "auto",
          //   height: "100%",
          // }}
          fill
          // priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
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
          <Image
            src={scribble4}
            alt=""
            className="team-section__scribble team-section__scribble--4"
            width={52}
            height={66}
            aria-hidden
          />
        </div>

        <div className="team-section__card team-section__card--right">
          <p>
            Знайомства з експертами з <span>IT та</span>
            <br />
            <span>біотех-компаній.</span>
          </p>
          <Image
            src={scribble5}
            alt=""
            className="team-section__scribble team-section__scribble--5"
            width={52}
            height={66}
            aria-hidden
          />
        </div>
      </div>

      <p className="team-section__coffee">
        <Image
          src={scribble6}
          alt=""
          className="team-section__scribble team-section__scribble--6"
          width={29}
          height={29}
          aria-hidden
        />{" "}
        Кава-брейки включені
      </p>
    </section>
  );
}
