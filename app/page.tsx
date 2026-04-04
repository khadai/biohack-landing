import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
            <main
                className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white sm:items-start">
                <Image
                    // className="dark:invert"
                    src="/logo.svg"
                    alt="Next.js logo"
                    width={100}
                    height={100}
                    priority
                />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left pt-24">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
                        ІІ Учнівський біохакатон
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600">
                        Біотехнології після війни
                        <br/>
                        📆{"   "}1 травня 2026
                        <br/>
                        📍 просп. Червоної Калини, 58 (Lviv Open Lab)
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-base font-medium sm:flex-row pt-24">
                    <a
                        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] md:w-[258px]"
                        // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        // target="_blank"
                        // rel="noopener noreferrer"
                    >
                        Реєстрація вже скоро!
                    </a>
                </div>
            </main>
        </div>
    );
}
