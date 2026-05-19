'use client';
<<<<<<< HEAD
import { createUser2 } from '@/action/user.action_83';
import { useFormStatus, useFormState } from 'react-dom';
=======
import {createUser2} from '@/action/user.action_83';
import { use } from 'react';
>>>>>>> 50d49ef (1234)

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize'
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

const Form2_83 = () => {
  const [message, formAction] = useFormState(createUser2, null);
  return (
    <form action={formAction} className='max-w-lg flex flex-col gap-y-4 shadow rounded p-8'>
      {message && <p>{message}</p>}
      <h2 className='text-2xl capitalize'>Create User</h2>
      <label htmlFor='name' className='font-bold'>
        Name
      </label>
      <input type='text' name='name' required className='border shadow rounded py-2 px-3 text-gray-700' />

      <label htmlFor='email' className='font-bold'>
        Email
      </label>
      <input type='text' name='email' required className='border shadow rounded py-2 px-3 text-gray-700' />
      
      <SubmitButton />
    </form>
  );
};

export default Form2_83;
