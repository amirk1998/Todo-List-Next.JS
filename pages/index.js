import axios from 'axios';
import { useState } from 'react';
import TodoList from '../components/Todos/TodoList';
import TodoForm from '../components/Todos/AddNewTodo';
import dbConnect from '../server/utils/dbConnect';
import Todo from '../server/models/todo';

export default function Home({ todos }) {
  const [data, setData] = useState(todos);
  const [isShow, setIsShow] = useState(false);

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`).then(({ data }) => {
      console.log(data);
      setData(data.todos);
    });
  };

  const addTodo = (e, formData) => {
    e.preventDefault();

    console.log(formData);

    axios.post(`/api/todos`, { formData }).then(({ data }) => {
      console.log(data);
      setData(data.todos);
    });
  };

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

export async function getServerSideProps(context) {
  dbConnect();
  const todos = await Todo.find({});

  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}
