// import { todos } from '../../../data/todos';

import dbConnect from '../../../server/utils/dbConnect';
import Todo from '../../../server/models/todo';

dbConnect();

export default async function handler(req, res) {
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
    const todos = await Todo.find({}).maxTimeMS(30000);
    return res.status(200).json({ todos });
  }
}
