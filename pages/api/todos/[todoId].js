import { todos } from '../../../data/todos';

export default function handler(req, res) {
  const { todoId } = req.query;

  if (req.method === 'DELETE') {
    const index = todos.findIndex((todo) => todo.id === parseInt(todoId));
    console.log(index);
    todos.splice(index, 1);
    return res
      .status(200)
      .json({ message: 'Todo Deleted Successfully !', todos });
  }
}
