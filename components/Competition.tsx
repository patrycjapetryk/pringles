import Form from './Form';

export default function Competition() {
  return (
    <section className="lg:bg-footer-texture bg-100% flex w-full flex-col items-center bg-bottom bg-no-repeat pb-32">
      <div className="flex w-full max-w-[1280px] flex-col items-center">
        <h2 className="my-8 w-2/3 text-center text-3xl sm:my-12 sm:text-4xl md:text-5xl lg:my-[5.1rem] lg:mb-[4.6rem]">
          WEŹ UDZIAŁ W&nbsp;KONKURSIE I&nbsp;ODPOWIEDZ NA PYTANIE:
        </h2>
        <Form />
      </div>
    </section>
  );
}
