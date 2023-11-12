'use client';
import { useState } from 'react';
import ArrowLottie from './arrow-lottie';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleContactFormSubmit } from './server-action';
import { ContactFormData, contactFormSchema } from './schemas-and-types';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onSubmit',
    shouldUseNativeValidation: true,
    resolver: zodResolver(contactFormSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("before try on submit")
    try {
      await handleContactFormSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col gap-y-10'>
      {!isOpen && (
        <ContactButtonWithLottie onClick={() => setIsOpen(prev => !prev)} />
      )}
      {
        <div
          className={cn(
            'bg-primary text-white  transition-all duration-1000  h-0 rounded-xl overflow-hidden w-10/12 m-auto',
            isOpen && 'h-[50rem] border border-primary'
          )}
        >
          <form
            className='flex flex-col p-5 py-10 gap-y-10'
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className='text-white m-auto text-2xl'>Contact Form</h2>
            <ul className='flex flex-col gap-y-5'>
              <li>
                <div className='flex flex-col gap-y-2'>
                  <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>First name *</label>
                    <input
                      {...register('firstName')}
                      className='p-2 font-roboto text-primary border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500'
                      type='text'
                      placeholder='John'
                    />
                  </div>
                  <p className='text-red-500'>{errors.firstName?.message}</p>
                </div>
              </li>
              <li>
                <div className='flex flex-col gap-y-2'>
                  <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>Last name *</label>
                    <input
                      {...register('lastName')}
                      className='p-2 font-roboto text-primary border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500'
                      type='text'
                      placeholder='Doe'
                    />
                  </div>
                  <p className='text-red-500'>{errors.lastName?.message}</p>
                </div>
              </li>
              <li>
                <div className='flex flex-col gap-y-2'>
                  <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>Email *</label>
                    <input
                      {...register('email')}
                      type='email'
                      className='p-2 font-roboto text-primary border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500'
                      placeholder='johndoe@example.com'
                    />
                  </div>
                  <p className='text-red-500'>{errors.email?.message}</p>
                </div>
              </li>
              <li>
                <div className='flex flex-col gap-y-2'>
                  <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>Message *</label>
                    <textarea
                      {...register('message')}
                      className='p-2 font-roboto text-primary border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500'
                      placeholder='Hello, I want a landing page with a very nice design...'
                      rows={7}
                    />
                  </div>
                  <p className='text-red-500'>{errors.message?.message}</p>
                </div>
              </li>
            </ul>
            <button
              className={cn(
                'uppercase bg-white text-primary text-xl font-bol2 font-roboto w-fit self-center py-1.5 gap-y-1 px-10 rounded',
                isSubmitting && 'bg-red-500'
              )}
              type='submit'
              aria-disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        </div>
      }
    </div>
  );
}

function ContactButtonWithLottie({ onClick }: { onClick: () => void }) {
  return (
    <div className='flex gap-x-4 justify-center items-center'>
      {/* Keep the left margin matched with the width of the arrow to keep the button centered /!\ */}
      {
        <button
          onClick={onClick}
          className={cn(
            'bg-[#C171C2]  text-white text-xl px-20 py-3 rounded-xl ml-[4rem]'
          )}
        >
          Contact
        </button>
      }
      <ArrowLottie className='w-16 rotate-180' />
    </div>
  );
}
