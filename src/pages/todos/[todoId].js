import Link from 'next/link';
import { getOneTodo } from '@/api/todos/[todoId]';
import Layout from '@/containers/Layout';

const TodoPage = ({ todo }) => {
  return (
    <Layout>
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
        <Link href='/'>
          <button
            type='button'
            className='mt-3 w-full rounded-lg border-2 border-blue-500 px-2 py-2.5 text-center text-sm font-medium text-blue-500 outline-none hover:border-blue-700 hover:text-blue-700 focus:ring-4 sm:w-auto md:px-4 md:text-base lg:px-10'
          >
            Back To Home
          </button>
        </Link>
      </div>
    </Layout>
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
