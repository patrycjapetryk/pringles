import { z } from 'zod';

export const FormDataSchema = z.object({
  message: z
    .string()
    .min(1, { message: 'Odpowiedź jest wymagana.' })
    .min(5, { message: 'Odpowiedź musi być dłuższa.' })
    .max(250, { message: 'Max. 250 znaków.' }),
  billImage:
    typeof window === 'undefined'
      ? z.undefined()
      : z
          .instanceof(FileList)
          .refine((file) => file.length !== 0, {
            message: 'Dodaj paragon.',
          })
          .refine(
            (file) => {
              const fileSize = file.item?.(0)?.size || 0;
              return fileSize <= 3000000;
            },
            { message: 'Max. 3MB' },
          )
          .refine(
            (file) =>
              ['image/jpeg', 'image/jpg', 'image/png'].includes(
                file.item?.(0)?.type || '',
              ),
            {
              message: 'Format jpg/jpeg lub png.',
            },
          ),
  name: z
    .string()
    .min(2, { message: 'Podaj imię.' })
    .max(50, { message: 'Max. 50 znaków.' })
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      'Podaj prawidłowe imię.',
    ),
  surname: z
    .string()
    .min(2, { message: 'Podaj nazwisko.' })
    .max(50, { message: 'Max. 50 znaków.' })
    .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value), {
      message: 'Podaj prawidłowe nazwisko.',
    }),
  birthYear: z
    .string()
    .refine((value) => /^[1-2]{1}[09]{1}[0-9]{2}$/i.test(value), {
      message: 'Podaj prawidłowy rok urodzenia.',
    })
    .refine((value) => Number(value) <= 2006, {
      message: 'Konkurs dla osób pełnoletnich.',
    }),
  phone: z.string().min(9, { message: 'Podaj pradwidłowy numer telefonu.' }),
  email: z.string().refine((value) => /^\S+@\S+$/i.test(value), {
    message: 'Podaj prawidłowy adres email.',
  }),
  street: z.string().min(2, { message: 'Podaj ulicę.' }),
  apartament: z.string(),
  postalCode: z
    .string()
    .refine(
      (value) => /^[0-9]{2}-[0-9]{3}$/i.test(value),
      'Podaj kod w formacie 00-000.',
    ),
  city: z.string().min(2, { message: 'Podaj miasto.' }),
  rules: z.literal<boolean>(true, {
    errorMap: () => ({ message: 'Zaakceptuj warunki regulaminu.' }),
  }),
});
