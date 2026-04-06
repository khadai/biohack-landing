import Image from "next/image";
import heroImage from "./assets/hero-section-image.png";
import biomniLogo from "./assets/partners-logos/biomni.svg";
import explogenLogo from "./assets/partners-logos/explogen.svg";
import lnuLogo from "./assets/partners-logos/lnu.svg";
import lvivdepLogo from "./assets/partners-logos/lvivdep.svg";
import lvivOpenLabLogo from "./assets/partners-logos/lvivopenlab.svg";
import stLogo from "./assets/partners-logos/st.svg";


const FORM_LINK = 'https://forms.gle/zL73tnoRtotMggKP9'
export default function Home() {
    const partners = [
        {src: lvivOpenLabLogo, alt: "Lviv Open Lab"},
        {src: lvivdepLogo, alt: "Львівська міська рада"},
        {src: stLogo, alt: "ST"},
        {src: biomniLogo, alt: "Biomni"},
        {src: lnuLogo, alt: "ЛНУ"},
        {src: explogenLogo, alt: "Explogen"},
    ];

    return (
        <div className="landing">
            <header className="header">
                <div className="brand">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={40}
                        height={56}
                        priority
                    />
                    <span>БІОХАКАТОН UA</span>
                </div>
                <nav className="nav-links">
                    <a href="#about">Про нас</a>
                    <a href="#register">Реєстрація</a>
                </nav>
                <div className="header-actions">
                    {/*<a className="icon-link" href="#" aria-label="Instagram">*/}
                    {/*  ◉*/}
                    {/*</a>*/}
                    <a className="apply-button"
                       href={FORM_LINK}
                       target='_blank'>
                        Подати заявку
                    </a>
                </div>
            </header>

            <main>
                <section className="section hero">
                    <div className="hero-image-wrap">
                        <Image src={heroImage} alt="Зображення біохакатону" priority/>
                    </div>
                    <div className="hero-meta">1 травня 2026 | Біохакатон UA</div>
                    <div className="hero-content">
                        <h1>ІІ<br/> УЧНІВСЬКИЙ БІОХАКАТОН</h1>
                        <p className="hero-subtitle">Біотехнології після війни</p>
                        <p className="hero-copy">
                            Одноденний науково-технічний інтенсив у Львові,
                            <br/>
                            де біотехнологія стає інструментом відновлення України.
                        </p>
                        <div className="hero-actions" id="register">
                            <a className="primary-button"
                               href={FORM_LINK}
                               target='_blank'>
                                Зареєструвати команду
                            </a>
                            <span className="hero-note">1 вчитель + 3-4 учні</span>
                        </div>
                    </div>
                </section>

                <section className=" partners">
                    <div className="partners-ticker" aria-label="Партнери">
                        <div className="partners-track">
                            <div className="partners-group">
                                {partners.map((partner) => (
                                    <div className="partner-item" key={partner.alt}>
                                        <Image src={partner.src} alt={partner.alt}/>
                                    </div>
                                ))}
                            </div>
                            <div className="partners-group" aria-hidden="true">
                                {partners.map((partner, index) => (
                                    <div className="partner-item" key={`${partner.alt}-${index}`}>
                                        <Image src={partner.src} alt=""/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section quote">
                    Ми поєднуємо{" "}
                    <span className="highlight">науку, креативність та інженерію</span>
                    <br/>
                    для створення майбутнього вже сьогодні.
                </section>

                <section className="section about" id="about">
                    <h2>ПРО НАС</h2>
                    <p>
                        Команда «Біохакатон UA» — це спільнота науковців освітян
                        та практиків, які вірять, що біотехнології є ключем до відродження нашої
                        країни. Ми створюємо освітній біотехнологічний хаб, що об&apos;єднує
                        школи, університети та бізнес.
                        <br/>
                        <br/>
                        Біохакатон — це не просто конкурс, а простір для експериментів. На
                        учасників чекають справжні досліди, віртуальне моделювання живих
                        систем та нові знайомства і друзі.
                    </p>
                </section>
            </main>

            <footer className="section footer">
                {/*<div className="socials">*/}
                {/*    <a href="#" aria-label="Instagram">*/}
                {/*        ◉*/}
                {/*    </a>*/}
                {/*    <a href="#" aria-label="Facebook">*/}
                {/*        f*/}
                {/*    </a>*/}
                {/*    <a href="#" aria-label="Telegram">*/}
                {/*        ✈*/}
                {/*    </a>*/}
                {/*</div>*/}
                <p>
                    Разом із університетами, STEM-хабами та біотех-компаніями будуємо
                    наукове майбутнє.
                </p>
                <p className="footer-strong victory-text">Наука, що наближає Перемогу!</p>
            </footer>
            <div className="bottom-strip">
                <span>© 2026 Біохакатон UA. Усі права захищені</span>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={40}
                    height={56}
                    priority
                    // style={{fill: 'red'}}
                    // fill='black'
                />
                {/*<span className="menu-mark">☰</span>*/}
            </div>
        </div>
    );
}
