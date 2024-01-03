import Form from './Form';

export default function Competition() {
  return (
    <section
      id="udzial"
      className="flex w-full flex-col items-center bg-100% bg-bottom bg-no-repeat pb-32 lg:bg-footer-texture"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center">
        <h2 className="my-8 w-2/3 text-center text-3xl sm:my-12 sm:w-[90%] md:text-4xl lg:my-[5.1rem] lg:mb-[4.6rem] lg:w-[80%] xl:w-[70%]">
          WEŹ UDZIAŁ W&nbsp;KONKURSIE I&nbsp;ODPOWIEDZ NA&nbsp;PYTANIE:
        </h2>
        <Form />
      </div>
    </section>
  );
}
