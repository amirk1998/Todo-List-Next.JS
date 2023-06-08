import Link from 'next/link';

const TodoList = ({ data, onDelete, onComplete }) => {
  if (!data.length) {
    return (
      <div className='flex w-full flex-col items-center justify-center gap-y-6 rounded-lg'>
        <h1 className='w-full rounded-xl text-center text-lg font-semibold lg:text-2xl'>
          Please Add some Todos !
        </h1>
      </div>
    );
  }

  return (
    <div className='flex w-full flex-col items-center justify-center gap-y-6 rounded-lg'>
      {data.map((todo) => {
        return (
          <div
            className='flex w-full items-center justify-between rounded-lg border border-slate-300 p-3 shadow-sm hover:border-slate-400 hover:shadow-lg md:p-6'
            key={todo._id}
          >
            <Link href={`/todos/${todo._id}`}>
              <a>
                <p
                  className={`text-sm font-medium text-slate-800 md:text-lg ${
                    todo.isCompleted
                      ? 'font-normal text-slate-600 line-through'
                      : ''
                  }`}
                >
                  {todo.title}
                </p>
              </a>
            </Link>
            <div className='flex items-center gap-x-2 md:gap-x-4'>
              {/* Check */}
              <button onClick={() => onComplete(todo._id)}>
                {todo.isCompleted ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 stroke-lime-600 hover:stroke-lime-800 md:h-6 md:w-6 '
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>
                ) : (
                  <span className='block h-5 w-5 rounded-full border-2 border-slate-500 hover:border-slate-700'></span>
                )}
              </button>
              {/* Trash */}
              <button onClick={() => onDelete(todo._id)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5 stroke-red-500 hover:stroke-red-700 md:h-6 md:w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                  />
                </svg>
              </button>
              {/* Edit */}
              <Link href={`/todos/edit/${todo._id}`}>
                <a className='block'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 stroke-blue-500 hover:stroke-blue-700 md:h-6 md:w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
