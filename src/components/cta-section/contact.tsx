'use client';
import { useState } from 'react';
import ArrowLottie from './arrow-lottie';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodError } from 'zod';
import { handleContactFormSubmit } from './server-action';
import { useFormStatus } from 'react-dom';

const contactFormSchema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z.string().email(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onSubmit',
    shouldUseNativeValidation: true,
    //resolver: zodResolver(contactFormSchema),
  });
  const onSubmit = async (data: ContactFormData) => {
    await handleContactFormSubmit(data);
  };
  const { pending } = useFormStatus();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='flex flex-col gap-y-10'>
      <ContactButtonWithLottie onClick={() => setIsOpen(prev => !prev)} />
      <div
        className={cn(
          'border border-primary  transition-all  h-0 rounded overflow-hidden w-10/12 m-auto',
          isOpen && 'h-auto'
        )}
      >
        <form
          className='flex flex-col p-5 gap-y-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <ul className='flex flex-col gap-y-5'>
            <li>
              <div className='flex flex-col gap-y-2'>
                <div className='flex flex-col gap-y-2'>
                  <label className='text-primary'>First name *</label>
                  <input
                    {...register('firstName')}
                    className='p-1 border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500'
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
                  <label className='text-primary'>Last name *</label>
                  <input
                    {...register('lastName')}
                    className='p-1 border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500'
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
                  <label className='text-primary'>Email *</label>
                  <input
                    {...register('email')}
                    type='email'
                    className='p-1 border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500'
                    placeholder='johndoe@example.com'
                  />
                </div>
                <p className='text-red-500'>{errors.email?.message}</p>
              </div>
            </li>
          </ul>
          <button
            className={cn(
              'bg-primary text-white w-fit self-center py-1.5 gap-y-1 px-10 rounded',
              pending && 'bg-red-500'
            )}
            type='submit'
            aria-disabled={pending}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function ContactButtonWithLottie({ onClick }: { onClick: () => void }) {
  return (
    <div className='flex gap-x-4 justify-center items-center'>
      {/* Keep the left margin matched with the width of the arrow to keep the button centered /!\ */}
      <button
        onClick={onClick}
        className='bg-[#C171C2] ml-[4rem] text-white text-xl px-20 py-3 rounded-xl'
      >
        Contact
      </button>
      <ArrowLottie className='w-16 rotate-180' />
    </div>
  );
}
