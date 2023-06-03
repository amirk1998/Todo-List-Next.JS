import { todos } from '../../../data/todos';

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.todo);
    const newTodo = {
      id: Date.now(),
      title: req.body.todo,
      completed: false,
    };
    todos.push(newTodo);
    return res.status(201).json({ message: 'New Todo Added !', todos });
  } else if (req.method === 'GET') {
    return res.status(200).json({ todos });
  }
}
