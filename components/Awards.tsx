import Image from 'next/image';

export default function Awards() {
  return (
    <section className="sm:bg-hero-texture bg-top-1 xl:bg-top-2 bg-100% flex w-full flex-col items-center bg-no-repeat">
      <div className="flex w-full max-w-[1280px] flex-col items-center">
        <h2 className="my-8 w-2/3 text-center text-3xl sm:my-12 sm:text-4xl md:text-5xl lg:my-[5.1rem] lg:mb-[4.6rem] lg:w-1/2">
          Co na Ciebie czeka?
        </h2>
        <picture className="flex w-full justify-center pb-20">
          <source srcSet="/images/rewards.png" media="(min-width: 640px)" />
          <Image
            className="relative w-full sm:mt-2 sm:w-2/3"
            src="/images/rewards-mobile.png"
            alt="Awards"
            width={632}
            height={536}
            quality={80}
          />
        </picture>
      </div>
    </section>
  );
}
