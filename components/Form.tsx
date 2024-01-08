'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { nanoid } from 'nanoid';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FormDataSchema } from '@/lib/formDataSchema';
import SubmittedMessage from './SubmittedMessage';
import Loader from './Loader';

type Inputs = z.infer<typeof FormDataSchema>;

export default function Form() {
  const [file, setFile] = useState<File>();
  const [pending, setPending] = useState(false);
  const [showSubmittedPage, setShowSubmittedPage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      message: '',
      billImage: undefined,
      name: '',
      surname: '',
      birthYear: '',
      phone: '',
      email: '',
      street: '',
      apartament: '',
      postalCode: '',
      city: '',
      rules: false,
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setPending(true);
    const uuid = nanoid();

    // const fileData = new FormData();
    // fileData.append('uuid', uuid);
    // if (file) fileData.append('file', file);

    // const fileUpload = await fetch('/api/uploadImage', {
    //   method: 'POST',
    //   body: fileData,
    // });

    // const { results } = await fileUpload.json();
    // const claudinaryData = await fileUpload.json();

    const formData = {
      ...data,
      uuid,
    };

    const googleSheetResponse = await fetch('/api/addData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const googleSheetData = await googleSheetResponse.json();

    // console.log(googleSheetData);
    // console.log(claudinaryData);

    if (googleSheetData) {
      setPending(false);
      setShowSubmittedPage(true);

      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
        setFile(undefined);
        setShowSubmittedPage(false);
      }, 5000);
    }
  };

  const handleOnFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files) setFile(target.files[0]);
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
            className="required relative w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Imię"
            {...register('name')}
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
            className="required w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Nazwisko"
            {...register('surname')}
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
            className="required w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Rok urodzenia"
            {...register('birthYear')}
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
            className="required w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Numer telefonu"
            {...register('phone')}
          />

          {errors.phone?.message && (
            <p className="text-xxs absolute -bottom-[22px] left-0 w-full">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="relative sm:col-span-2">
          <input
            type="text"
            className="required w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Mail"
            {...register('email')}
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
            className="required w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Ulica"
            {...register('street')}
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
            className="required w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Kod pocztowy"
            {...register('postalCode')}
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
            className="required w-full border-2 border-transparent bg-pringles-dark-red text-base text-white placeholder-white focus:border-white focus:text-white focus:placeholder-white focus:ring-0"
            placeholder="Miasto"
            {...register('city')}
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

        <button className="relative mt-8 w-full bg-white px-4 pb-2 pt-3 text-base uppercase text-pringles-dark-red shadow-[5px_5px_0px_0px] shadow-pringles-dark-red hover:text-black sm:w-44 md:mt-0">
          Wyślij
          {pending && <Loader />}
        </button>
      </section>
      {showSubmittedPage && <SubmittedMessage />}
    </form>
  );
}
