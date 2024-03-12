'use client';

import React from 'react';
import {
  useForm,
  SubmitHandler,
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import { sendFormData, FormData } from '@/lib/contact-form';
import { motion } from 'framer-motion';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Button from '@/components/UI/button';

const ContactForm = () => {
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const url =
      'https://osk-neocar.pl/wp/wp-json/contact-form-7/v1/contact-forms/6/feedback';

    try {
      const result = await sendFormData(data, url);
      if (result) {
        toast.success('Twoje dane zostały przesłane.');
      }
      reset();
    } catch (error) {
      toast.error('Coś poszło nie tak, spróbuj ponownie później.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' flex flex-col mt-2 gap-3 justify-center w-full max-w-[30rem] text-black'>
      <Controller
        name='yourName'
        control={control}
        defaultValue=''
        rules={{ required: true }}
        render={({ field }) => (
          <Input field={field} type='text' placeholder='Imię i nazwisko' />
        )}
      />
      <Controller
        name='yourEmail'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input field={field} type='email' placeholder='Twój e-mail' />
        )}
      />
      <Controller
        name='yourPhone'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input
            field={field}
            type='number'
            placeholder='Twoj numer telefonu'
          />
        )}
      />
      <Controller
        name='yourPhone'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <textarea
            {...field}
            name='w3review'
            style={{ maxHeight: '150px', minHeight: '50px' }}
            placeholder='Twoja wiadomość'
            className='px-2 py-2 shadow-2xl text-lg lg:text-2xl'
          />
        )}
      />

      <label htmlFor='agreement' className=' mt-2 flex'>
        <input type='checkbox' className='w-[25px] h-[25px] ' required />
        <p className='tracking-wide text-md xl:text-xl ml-3 text-[var(--text-first-color)]'>
          Zgadzam się na przetwarzanie moich danych osobowych przez firmę
          DENTICA w celu kontaktu z Tobą na Twoją prośbę zgodnie z polityką
          prywatności.
        </p>
      </label>
      <div className='flex items-start mt-2 md:w-auto '>
        <Button style='max-lg:w-full text-md'>Wyślij wiadomość</Button>
      </div>
    </form>
  );
};

export default ContactForm;

type InputProps<T extends FieldValues, K extends Path<T>> = {
  field: ControllerRenderProps<T, K>;
  type: string;
  placeholder: string;
};

const Input = <T extends FieldValues, K extends Path<T>>({
  field,
  type,
  placeholder,
}: InputProps<T, K>) => {
  return (
    <input
      {...field}
      type={type}
      className='px-2 py-2 shadow-2xl text-lg lg:text-2xl'
      placeholder={placeholder}
    />
  );
};
