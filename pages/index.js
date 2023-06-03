import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoList from '../components/Todos/TodoList';
// import useSWR, { mutate } from 'swr';

// const fetcher = async () => {
//   const { data } = await axios.get('/api/todos');
//   return data;
// };

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('/api/todos')
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`).then(({ data }) => {
      console.log(data);
      setData(data.todos);
      setLoading(false);
    });
  };

  if (loading)
    return (
      <div className='flex h-screen w-full flex-col items-center bg-gray-100 px-8 py-4'>
        <h1 className='mb-10 w-2/3 rounded-xl bg-white px-8 py-6 text-center text-3xl font-bold shadow-lg'>
          TodoList App using Next.js & TailwindCSS
        </h1>
        <div className='w-1/2 rounded-xl bg-white p-8 shadow-md'>
          <div className='flex w-full flex-col items-center justify-center gap-y-6 rounded-lg text-2xl font-medium text-slate-800'>
            Loading ... Please Wait.
          </div>
        </div>
      </div>
    );

  return (
    <div className='flex h-screen w-full flex-col items-center overflow-y-hidden bg-gray-100 px-8 py-4'>
      <h1 className='mb-10 w-2/3 rounded-xl bg-white px-8 py-6 text-center text-3xl font-bold shadow-lg'>
        TodoList App using Next.js & TailwindCSS
      </h1>
      <div className='w-1/2 overflow-y-auto rounded-xl bg-white p-8 shadow-md'>
        <TodoList data={data} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
