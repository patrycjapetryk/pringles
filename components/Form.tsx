'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FormDataSchema } from '@/lib/schema';

type Inputs = z.infer<typeof FormDataSchema>;

export default function Form() {
  const [file, setFile] = useState<File>();
  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  // console.log('rendering')
  // console.log(watch('name'));

  const processForm: SubmitHandler<Inputs> = (data) => {
    reset();
    setData(data);
  };

  const handleOnFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files) {
      // const { size, name, type } = target.files[0];
      // console.log(size);
      // console.log(target.files[0]);

      setFile(target.files[0]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="flex w-[90%] flex-col items-center gap-8 sm:w-[80%] lg:w-2/3 xl:w-1/2"
    >
      <section className="w-full">
        <div className="relative flex w-full flex-col items-center">
          <label
            htmlFor="message"
            className="mb-8 w-[80%] text-center text-lg md:text-2xl"
          >
            Jak wyobrażasz sobie zimową zabawę z&nbsp;Pringles?
          </label>

          <textarea
            id="message"
            className="h-60 w-full border-transparent text-center text-sm text-pringles-dark-red placeholder-pringles-dark-red shadow-[5px_5px_0px_0px] shadow-pringles-dark-red focus:border-pringles-dark-red focus:text-left focus:placeholder-pringles-red focus:ring-0 sm:text-base"
            placeholder="max. 250 znaków"
            {...register('message')}
          />

          {errors.message?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="relative w-full">
          <label
            htmlFor="billImage"
            className="mb-2 mt-6 flex w-full cursor-pointer flex-col items-center text-center text-sm"
          >
            <span className="pointer w-full border-0 bg-white px-4 pb-2 pt-3 text-base text-pringles-dark-red shadow-[5px_5px_0px_0px] shadow-pringles-dark-red hover:text-black sm:mt-6 sm:w-56">
              ZAŁĄCZ PARAGON
            </span>

            <span className="p-3 text-xs">{file ? file.name : ''}</span>
          </label>

          <input
            type="file"
            className="absolute left-0 top-0 w-full opacity-0"
            id="billImage"
            {...register('billImage')}
            onChange={handleOnFileChange}
          />

          {errors.billImage?.message && (
            <p className="absolute -bottom-3 left-0 w-full text-center text-xs">
              {errors.billImage.message}
            </p>
          )}
        </div>
      </section>

      <section className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <h3 className="text-center text-2xl sm:col-span-2 lg:text-3xl">
          Dane kontaktowe
        </h3>

        <div className="relative w-full">
          <input
            type="text"
            className="relative w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Imię"
            {...register('name')}
            required
          />

          {errors.name?.message && (
            <p className="text-centerw-full text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            className="w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Nazwisko"
            {...register('surname')}
            required
          />

          {errors.surname?.message && (
            <p className="absolute -bottom-[22px] left-0 text-xs">
              {errors.surname.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            className="w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Rok urodzenia"
            {...register('birthYear')}
            required
          />

          {errors.birthYear?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.birthYear.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            className="w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Mail"
            {...register('email')}
            required
          />

          {errors.email?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.email.message}
            </p>
          )}
        </div>
      </section>

      <section className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <h3 className="mt-5 text-center text-2xl sm:col-span-2 lg:text-3xl">
          Adres wysyłkowy
        </h3>

        <div className="relative">
          <input
            type="text"
            className="w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Ulica"
            {...register('street')}
            required
          />

          {errors.street?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.street.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            className="w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Numer mieszkania"
            {...register('apartament')}
          />

          {errors.apartament?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.apartament.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            className="w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Kod pocztowy"
            {...register('postalCode')}
            required
          />

          {errors.postalCode?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.postalCode.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            className="w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Miasto"
            {...register('city', { required: true, min: 2 })}
            required
          />

          {errors.city?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.city.message}
            </p>
          )}
        </div>
      </section>

      <section className="mb-6 mt-4 flex w-full flex-col items-center gap-3 md:flex-row lg:mt-6">
        <div className="relative w-full">
          <div className="relative flex w-full justify-center gap-4">
            <input
              id="rules"
              type="checkbox"
              className="peer h-7 w-7 appearance-none border-2 border-white text-white shadow-[5px_5px_0px_0px] shadow-pringles-dark-red checked:bg-white focus-within:hidden"
              {...register('rules')}
            />

            <label htmlFor="rules" className="text-xxs">
              Oświadczam, że zapoznałem/am się z&nbsp;
              <a href="#" className="underline">
                Regulaminem Konkursu
              </a>
              &nbsp;i&nbsp;składając zgłoszenie do loterii akceptuję jego
              warunki.
            </label>

            <svg
              className="pointer-events-none absolute -left-1 -top-2 mt-1 hidden h-11 w-11 text-black peer-checked:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <polyline points="16 5 9 16 4 11"></polyline>
            </svg>
          </div>

          {errors.rules?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.rules.message}
            </p>
          )}
        </div>

        <button className="mt-8 w-full bg-white px-4 pb-2 pt-3 text-base uppercase text-pringles-dark-red shadow-[5px_5px_0px_0px] shadow-pringles-dark-red hover:text-black sm:w-44 md:mt-0">
          Wyślij
        </button>
      </section>

      <div className="flex-1 p-8 text-white">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </form>
  );
}
