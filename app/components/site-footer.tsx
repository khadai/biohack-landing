import Image from "next/image";

export function SiteFooter() {
  return (
    <>
      <footer className="slogan">
        <p>
          Разом із університетами, STEM-хабами та біотех-компаніями будуємо
          наукове майбутнє.
        </p>
        <span className="victory-text">Наука, що наближає Перемогу!</span>
      </footer>
      <div className="bottom-strip">
        <span>© 2026 Біохакатон UA. Усі права захищені</span>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={56}
          priority
        />
      </div>
    </>
  );
}
