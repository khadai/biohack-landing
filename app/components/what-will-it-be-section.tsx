import Image from "next/image";
import arrowRightTopIcon from "../assets/icons/arrow--up-right.svg";
import { EVENT_DOCS_LINK } from "../lib/constants";

function ScribbleThreeLoops() {
  return (
    <svg
      className="what-will__scribble"
      viewBox="0 0 88 40"
      aria-hidden
    >
      <path
        d="M6 28c4-18 18-22 26-10 6 10 14-6 22 2s18-14 26-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 22c8 6 16-8 26 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScribbleTwoLoops() {
  return (
    <svg
      className="what-will__scribble"
      viewBox="0 0 88 40"
      aria-hidden
    >
      <path
        d="M8 24c12-20 28-12 38-22s22 8 34-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScribbleZigzag() {
  return (
    <svg
      className="what-will__scribble"
      viewBox="0 0 88 40"
      aria-hidden
    >
      <path
        d="M6 26l14-12 16 14 18-16 20 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatWillItBeSection() {
  return (
    <section className="section narrow what-will" id="what-will-it-be">
      <h2>ЩО ЦЕ БУДЕ?</h2>
      <p className="what-will__intro">
        Один день, що змінить твій погляд на науку. Це не олімпіада, це{" "}
        <span className="what-will__accent">драйвовий хакатон</span> між
        командами мотивованих учнів.
      </p>

      <div className="what-will__grid">
        <div className="what-will__slot what-will__slot--1">
          <ScribbleThreeLoops />
          <div className="what-will__card what-will__card--cw">
            <p>
              <span className="what-will__accent">Круті досліди</span>
              : від виділення ДНК до клонування організмів.
            </p>
          </div>
        </div>

        <div className="what-will__slot what-will__slot--2">
          <ScribbleTwoLoops />
          <div className="what-will__card what-will__card--ccw">
            <p>
              <span className="what-will__accent">Лекції</span> від профі на
              топові біотехнологічні теми.
            </p>
          </div>
        </div>

        <div className="what-will__slot what-will__slot--3">
          <ScribbleZigzag />
          <div className="what-will__card what-will__card--cw">
            <p>
              <span className="what-will__accent">Створення</span> власного
              інноваційного проєкту з нуля.
            </p>
          </div>
        </div>
      </div>

      <div className="what-will__cta">
        <a
          className="what-will__docs-btn"
          href={EVENT_DOCS_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Переглянути документи події
          <Image
            src={arrowRightTopIcon}
            alt=""
            width={22}
            height={22}
            aria-hidden
          />
        </a>
      </div>
    </section>
  );
}
