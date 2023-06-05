import { getOneTodo } from '../api/todos/[todoId]';

const TodoPage = ({ todo }) => {
  return (
    <div className='flex h-full w-full flex-col items-center bg-gray-100 px-8 py-4 lg:h-screen lg:max-h-screen lg:overflow-y-hidden'>
      <h1 className='w-full rounded-xl bg-white px-8 py-6 text-center text-lg font-bold shadow-lg lg:w-2/3 lg:text-3xl'>
        TodoList App using Next.js & TailwindCSS
      </h1>
      <div className='mt-6 flex w-1/2 flex-col items-center justify-center gap-y-6 rounded-xl bg-white px-8 py-4 shadow-md'>
        <h2 className=' w-full text-center text-lg font-semibold lg:text-2xl'>
          Todo Details Page
        </h2>
        <div className='flex flex-col items-center justify-center gap-y-6'>
          <p className=' w-full text-center text-base font-normal lg:text-xl'>
            Title: {todo.title}
          </p>
          <p className=' w-full text-center text-base font-normal lg:text-xl'>
            Description: {todo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

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
