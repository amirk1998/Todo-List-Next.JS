import { useRouter } from 'next/router';
import { getOneTodo } from '@/api/todos/[todoId]';
import { useState } from 'react';
import axios from 'axios';
import Layout from '@/containers/Layout';

const TodoEdit = ({ todo }) => {
  const router = useRouter();
  const [checked, setChecked] = useState(todo.isCompleted);
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
    isCompleted: false,
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${router.query.todoId}`, {
        todo: { ...formData, isCompleted: checked },
      })
      .then((res) => router.push('/'))
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <form
        className='mt-6 flex w-full max-w-screen-md flex-col rounded-xl bg-white px-6 py-4'
        onSubmit={submitHandler}
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
        <div className='mt-4 flex items-center'>
          <input
            id='checked'
            type='checkbox'
            name='checked'
            checked={checked}
            onChange={() => setChecked(!checked)}
            className='h-4 w-4 rounded-lg border-2 border-slate-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
          />
          <label
            htmlFor='checked'
            className='ml-2 text-base font-medium text-slate-800 lg:text-lg'
          >
            Complete Todo
          </label>
        </div>
        <div className='mt-4 flex w-full items-center justify-center gap-x-4'>
          <button
            type='button'
            onClick={() => router.push('/')}
            className='mt-3 w-full rounded-lg border-2 border-blue-500 px-2 py-2.5 text-center text-sm font-medium text-blue-500 outline-none hover:border-blue-700 hover:text-blue-700 focus:ring-4 sm:w-auto md:px-4 md:text-base lg:px-10'
          >
            Back
          </button>
          <button
            type='submit'
            className='mt-3 w-full rounded-lg border-2 border-blue-500 bg-blue-500 px-2 text-center text-sm font-medium text-white hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto md:px-4 md:py-2.5 md:text-base lg:px-10'
          >
            Edit Todo
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default TodoEdit;

export async function getServerSideProps(context) {
  const { query } = context;

  const todo = await getOneTodo(query);
  console.log(todo);

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
