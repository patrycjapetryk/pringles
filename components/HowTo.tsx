import Image from 'next/image';

export default function HowTo() {
  return (
    <section
      id="zasady"
      className="flex w-full flex-col items-center bg-white sm:px-20 lg:px-5 xl:px-20"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center">
        <h2 className="my-8 w-full text-center text-3xl text-pringles-dark-red sm:my-12 sm:w-2/3 sm:text-4xl md:text-5xl lg:my-[5.1rem] lg:mb-[4.6rem] lg:w-1/2">
          Jak wziąć udział w&nbsp;konkursie?
        </h2>
        <ul className="mb-10 grid w-full grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-5 xl:mb-20 xl:gap-7">
          <li className="flex aspect-square flex-col items-center justify-center bg-pringles-red p-6 text-center text-base shadow-[6px_6px_0px_0px] shadow-pringles-gray xs:p-4 sm:p-10 lg:p-2 xl:p-6">
            <Image
              className="relative w-[140px] xs:w-[180px] md:mb-2 md:w-[200px] lg:mb-0 lg:w-[140px] xl:w-[180]"
              src="/images/icon-1.svg"
              alt=""
              width={180}
              height={160}
            />
            <h3 className="mb-6 text-2xl xs:text-3xl md:text-4xl lg:mb-4 lg:text-2xl xl:mb-6 xl:text-3xl">
              Krok 1
            </h3>
            <p className="text-xs xs:text-sm md:text-base lg:text-xs xl:text-sm">
              Odwiedź jeden z&nbsp;wybranych super lub&nbsp;hipermarketów sieci
              Carrefour w&nbsp;okresie między&nbsp;09-31.01.2024
            </p>
          </li>
          <li className="flex aspect-square flex-col items-center justify-center bg-pringles-red p-6 text-center text-base shadow-[6px_6px_0px_0px] shadow-pringles-gray xs:p-4 sm:p-10 lg:p-2 xl:p-6">
            <Image
              className="relative w-[140px] xs:w-[180px] md:mb-2 md:w-[200px] lg:mb-0 lg:w-[140px] xl:w-[180]"
              src="/images/icon-2.svg"
              alt=""
              width={180}
              height={160}
            />
            <h3 className="mb-6 text-2xl xs:text-3xl md:text-4xl lg:mb-4 lg:text-2xl xl:mb-6 xl:text-3xl">
              Krok 2
            </h3>
            <p className="text-xs xs:text-sm md:text-base lg:text-xs xl:text-sm">
              Kup min.&nbsp;1&nbsp;puszkę ulubionego smaku Pringles
              i&nbsp;zachowaj paragon
            </p>
          </li>
          <li className="flex aspect-square flex-col items-center justify-center bg-pringles-red p-6 text-center text-base shadow-[6px_6px_0px_0px] shadow-pringles-gray xs:p-4 sm:p-10 lg:p-2 xl:p-6">
            <Image
              className="relative w-[140px] xs:w-[180px] md:mb-2 md:w-[200px] lg:mb-0 lg:w-[140px] xl:w-[180]"
              src="/images/icon-3.svg"
              alt=""
              width={180}
              height={160}
            />
            <h3 className="mb-6 text-2xl xs:text-3xl md:text-4xl lg:mb-4 lg:text-2xl xl:mb-6 xl:text-3xl">
              Krok 3
            </h3>
            <p className="text-xs xs:text-sm md:text-base lg:text-xs xl:text-sm">
              Wejdź na&nbsp;stronę zimowazabawapringles.pl odpowiedź
              na&nbsp;pytanie konkursowe i&nbsp;nie zapomnij dołączyć zdjęcia
              paragonu!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
