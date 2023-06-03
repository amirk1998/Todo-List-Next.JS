import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [value, setValue] = useState('');

  return (
    <form
      className='flex w-full max-w-screen-md flex-col items-center rounded-xl bg-white px-6 py-4'
      onSubmit={(e) => onAdd(e, value)}
    >
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='mt-2 block w-full rounded-lg border border-slate-300 bg-gray-50 p-3 text-sm font-medium text-slate-800 outline-none focus:border-blue-500 lg:text-lg '
        placeholder='Add New Todo'
      />
      <button
        type='submit'
        className='mt-3 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto'
      >
        Add New Todo
      </button>
    </form>
  );
};

export default TodoForm;
