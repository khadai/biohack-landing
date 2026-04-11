import Image from "next/image";
import arrowRightTopIcon from "../assets/icons/arrow--up-right.svg";
import scribble1 from "../assets/scribbles/scribble1.svg";
import scribble2 from "../assets/scribbles/scribble2.svg";
import scribble3 from "../assets/scribbles/scribble3.svg";
import { EVENT_DOCS_LINK } from "../lib/constants";

export function WhatWillItBeSection() {
  return (
    <section className="section narrow what-will" id="what-will-it-be">
      <h2>ЩО ЦЕ БУДЕ?</h2>
      <p className="what-will__intro">
        Один день, що змінить твій погляд на науку. Це не олімпіада, це{" "}
        <span className="what-will__accent">драйвовий хакатон</span> між командами мотивованих
        учнів.
      </p>

      <div className="what-will__grid">
        <div className="what-will__slot what-will__slot--1">
          <Image
            src={scribble1}
            alt=""
            className="what-will__scribble-1"
            width={232}
            height={75}
            aria-hidden
          />
          <div className="what-will__card what-will__card--cw">
            <p>
              <span className="what-will__accent">Круті досліди</span>: від виділення ДНК до
              клонування організмів.
            </p>
          </div>
        </div>

        <div className="what-will__slot what-will__slot--2">
          <Image
            src={scribble2}
            alt=""
            className="what-will__scribble-2"
            width={158}
            height={56}
            aria-hidden
          />
          <div className="what-will__card what-will__card--ccw">
            <p>
              <span className="what-will__accent">Лекції</span> від профі на топові біотехнологічні
              теми.
            </p>
          </div>
        </div>

        <div className="what-will__slot what-will__slot--3">
          <Image
            src={scribble3}
            alt=""
            className="what-will__scribble-2"
            width={198}
            height={70}
            aria-hidden
          />
          <div className="what-will__card what-will__card--cw">
            <p>
              <span className="what-will__accent">Створення</span> власного інноваційного проєкту з
              нуля.
            </p>
          </div>
        </div>
      </div>

      <div className="what-will__cta">
        <a className="what-will__docs-btn" href={EVENT_DOCS_LINK} target="_blank" rel="noreferrer">
          Переглянути документи події
          <Image src={arrowRightTopIcon} alt="" width={22} height={22} aria-hidden />
        </a>
      </div>
    </section>
  );
}
