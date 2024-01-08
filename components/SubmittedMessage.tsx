import Image from 'next/image';

export default function SubmittedMessage() {
  return (
    <div className="animate-opacity fixed left-0 top-0 z-50  flex h-[100vh]  w-full items-center justify-center bg-pringles-red">
      <div className="animate-background-slidein absolute left-0 top-0 h-[110vh] w-full bg-hero-texture-mobile bg-100% bg-bottom bg-no-repeat lg:bg-hero-texture"></div>
      <article className="relative mb-10 flex flex-col items-center xl:mb-20">
        <Image
          className="relative mb-2 max-w-[40%] xs:max-w-[34%] lg:mb-3"
          src="/images/emoji-base.svg"
          priority
          alt="Emoji"
          width={160}
          height={152}
        />
        <h2 className="my-8 w-[90%] text-center text-3xl md:text-4xl lg:w-[70%] xl:w-2/3">
          Twoje zgłoszenie zostało przyjęte.
        </h2>
        <p className="max-w-[90%] text-center sm:text-xl lg:w-[70%] xl:w-2/3">
          Dziękujemy za udział w&nbsp;konkursie! Zaraz zostaniesz
          przekierowana/y do&nbsp;strony głównej konkursu.
        </p>
      </article>
    </div>
  );
}
