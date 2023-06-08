import { useState } from 'react';

const TodoForm = ({ onAdd, isShow, setIsShow }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    isCompleted: false,
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isShow) {
    return (
      <div className='flex flex-col items-center rounded-xl px-6 py-4 lg:bg-white'>
        <button
          type='button'
          onClick={() => setIsShow(true)}
          className='w-full rounded-lg border-2 border-blue-500 bg-blue-500 px-2 py-2.5 text-center text-sm font-medium text-white hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto md:px-4 md:text-base lg:px-10'
        >
          Add New Todo ?
        </button>
      </div>
    );
  }

  return (
    <form
      className='flex w-full max-w-screen-md flex-col rounded-xl bg-white px-6 py-4'
      onSubmit={(e) => onAdd(e, formData)}
    >
      <label
        htmlFor='title'
        className='mb-2 block text-lg font-medium text-slate-800 '
      >
        Title
      </label>
      <input
        type='text'
        name='title'
        id='title'
        value={formData.title}
        onChange={changeHandler}
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
        name='description'
        id='description'
        rows='4'
        onChange={changeHandler}
        value={formData.description}
        className='block w-full resize-none rounded-lg border-2 border-slate-300 bg-gray-50 p-3 font-medium text-slate-800 outline-none focus:border-blue-500 lg:text-lg'
        placeholder='Description'
      ></textarea>

      <div className='mt-4 flex w-full items-center justify-center gap-x-4'>
        <button
          type='button'
          onClick={() => setIsShow(false)}
          className='mt-3 w-full rounded-lg border-2 border-blue-500 px-2 py-2.5 text-center text-sm font-medium text-blue-500 outline-none hover:border-blue-700 hover:text-blue-700 focus:ring-4 sm:w-auto md:px-4 md:text-base lg:px-10'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='mt-3 w-full rounded-lg border-2 border-blue-500 bg-blue-500 px-2 text-center text-sm font-medium text-white hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto md:px-4 md:py-2.5 md:text-base lg:px-10'
        >
          Add New Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
