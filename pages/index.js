import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoList from '../components/Todos/TodoList';
import TodoForm from '../components/Todos/AddNewTodo';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    axios
      .get('/api/todos')
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`).then(({ data }) => {
      console.log(data);
      setData(data.todos);
      setLoading(false);
    });
  };

  const addTodo = (e, formData) => {
    e.preventDefault();

    console.log(formData);

    axios.post(`/api/todos`, { formData }).then(({ data }) => {
      console.log(data);
      setData(data.todos);
      setLoading(false);
    });
  };

  if (loading)
    return (
      <div className='flex h-screen w-full flex-col items-center bg-gray-100 px-8 py-4'>
        <h1 className='w-full rounded-xl bg-white px-8 py-6 text-center text-lg font-bold shadow-lg lg:w-2/3 lg:text-3xl'>
          TodoList App using Next.js & TailwindCSS
        </h1>
        <div className='mt-4 w-full rounded-xl bg-white p-8 shadow-md lg:w-1/2'>
          <div className='flex w-full flex-col items-center justify-center gap-y-6 rounded-lg text-2xl font-medium text-slate-800'>
            Loading ... Please Wait.
          </div>
        </div>
      </div>
    );

  return (
    <div className='flex h-full w-full flex-col items-center bg-gray-100 px-8 py-4 lg:h-screen lg:max-h-screen lg:overflow-y-hidden'>
      <h1 className='w-full rounded-xl bg-white px-8 py-6 text-center text-lg font-bold shadow-lg lg:w-2/3 lg:text-3xl'>
        TodoList App using Next.js & TailwindCSS
      </h1>
      <div className='flex h-full w-full flex-col gap-y-6 py-10 lg:h-screen lg:max-h-screen lg:flex-row lg:justify-center lg:gap-x-10'>
        {/* Todo Form */}

        <div
          className={`h-auto w-full rounded-xl bg-white px-8 py-2 shadow-md lg:w-1/3 lg:bg-transparent lg:shadow-none ${
            isShow && ' bg-white lg:h-[450px]'
          } `}
        >
          <TodoForm onAdd={addTodo} isShow={isShow} setIsShow={setIsShow} />
        </div>
        {/* TodoList */}
        <div className='w-full rounded-xl bg-white p-8 shadow-md lg:h-[630px] lg:w-1/2 lg:overflow-y-scroll'>
          <TodoList data={data} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}