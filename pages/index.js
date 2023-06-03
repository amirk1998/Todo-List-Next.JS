import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoList from '../components/Todos/TodoList';
import TodoForm from '../components/AddNewTodo';
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

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`).then(({ data }) => {
      console.log(data);
      setData(data.todos);
      setLoading(false);
    });
  };

  const addTodo = (e, todo) => {
    e.preventDefault();
    axios.post(`/api/todos`, { todo }).then(({ data }) => {
      console.log(data);
      setData(data.todos);
      setLoading(false);
    });
  };

  if (loading)
    return (
      <div className='flex h-screen w-full flex-col items-center bg-gray-100 px-8 py-4'>
        <h1 className='mb-10 w-full rounded-xl bg-white px-8 py-6 text-center text-lg font-bold shadow-lg lg:w-2/3 lg:text-3xl'>
          TodoList App using Next.js & TailwindCSS
        </h1>
        <div className='w-full rounded-xl bg-white p-8 shadow-md lg:w-1/2'>
          <div className='flex w-full flex-col items-center justify-center gap-y-6 rounded-lg text-2xl font-medium text-slate-800'>
            Loading ... Please Wait.
          </div>
        </div>
      </div>
    );

  return (
    <div className='flex h-screen max-h-screen w-full flex-col items-center overflow-y-hidden bg-gray-100 px-8 py-4'>
      <h1 className='mb-10 w-full rounded-xl bg-white px-8 py-6 text-center text-lg font-bold shadow-lg lg:w-2/3 lg:text-3xl'>
        TodoList App using Next.js & TailwindCSS
      </h1>
      <div className='flex w-full flex-col  lg:flex-row lg:justify-center lg:gap-x-10'>
        {/* Todo Form */}
        <div className='h-[450px] w-full rounded-xl bg-white px-8 py-2 shadow-md lg:w-1/3'>
          <TodoForm onAdd={addTodo} />
        </div>
        {/* TodoList */}
        <div className='h-[630px] w-full overflow-y-scroll rounded-xl bg-white p-8 shadow-md lg:w-1/2'>
          <TodoList data={data} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}
