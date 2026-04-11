import Image from "next/image";

export function SiteFooter() {
  return (
    <>
      <div className="section">
        <footer className="slogan">
          <p>Разом із університетами, STEM-хабами та біотех-компаніями будуємо наукове майбутнє.</p>
          <span>
            <p style={{ fontWeight: 500 }}>Email</p>
            <p>
              <a href="mailto:biohackathon-ua@gmail.com">biohackathon-ua@gmail.com</a>
            </p>
          </span>
          <span>
            <p style={{ fontWeight: 500 }}>Зв’язатися з нами</p>
            <p>
              <a href="tel:+380978236168">+38 097 823 6168</a>
            </p>
          </span>
          <span className="victory-text">Наука, що наближає Перемогу!</span>
        </footer>
      </div>
      <div className="section bottom-strip">
        <span>© 2026 Біохакатон UA. Усі права захищені</span>
        <Image src="/logo.svg" alt="Logo" width={40} height={56} priority />
      </div>
    </>
  );
}
