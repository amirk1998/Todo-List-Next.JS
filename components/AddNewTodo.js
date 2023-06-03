import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [value, setValue] = useState('');

  return (
    <form
      className='flex w-full max-w-screen-md flex-col rounded-xl bg-white px-6 py-4'
      onSubmit={(e) => onAdd(e, value)}
    >
      <label
        htmlFor='title'
        className='mb-2 block text-lg font-medium text-slate-800 '
      >
        Title
      </label>
      <input
        type='text'
        id='title'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='mt-2 block w-full rounded-lg border-2 border-slate-300 bg-gray-50 p-3 text-sm font-medium text-slate-800 outline-none focus:border-blue-500 lg:text-lg '
        placeholder='Add New Todo'
      />

      <label
        htmlFor='description'
        className='mb-2 mt-4 block text-lg font-medium text-slate-800 '
      >
        Description
      </label>
      <textarea
        id='description'
        rows='4'
        className='block w-full resize-none rounded-lg border-2 border-slate-300 bg-gray-50 p-3 font-medium text-slate-800 outline-none focus:border-blue-500 lg:text-lg'
        placeholder='Description'
      ></textarea>
      <div className='mt-4 flex w-full items-center justify-between'>
        <button
          type='button'
          className='mt-3 w-full rounded-lg border-2 border-blue-500 px-4 py-2.5 text-center text-base font-medium text-blue-500 outline-none hover:border-blue-700 hover:text-blue-700 focus:ring-4 sm:w-auto lg:px-10'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='mt-3 w-full rounded-lg border-2 border-blue-500 bg-blue-500 px-4 py-2.5 text-center text-base font-medium text-white hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto lg:px-10'
        >
          Add New Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
