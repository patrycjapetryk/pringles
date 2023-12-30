import Image from 'next/image';

export default function PageHeader() {
  return (
    <section className="relative flex w-full max-w-[1280px] flex-col gap-10 px-4 lg:flex-row lg:justify-around">
      <header className="relative mb-10 flex flex-col justify-center gap-3 lg:mb-0">
        <h1 className="xs:text-4xl flex flex-col text-3xl leading-[1.4] sm:text-5xl sm:leading-[1.3] md:text-6xl md:leading-[1.2]">
          <span>Odkryj zimową </span>
          <span>zabawę z&nbsp;Pringles</span>
        </h1>
        <p className="text-xs md:text-base lg:mb-10">
          Czas trwania akcji: od 09.01 do 31.01.2024
        </p>
      </header>
      <div className="flex w-full justify-center lg:w-1/2">
        <Image
          className="relative ml-1 w-1/2"
          src="/images/chips.png"
          alt="Logo Zimowa Zabawa z Pringles"
          width={375}
          height={854}
          priority
        />
      </div>
    </section>
  );
}
