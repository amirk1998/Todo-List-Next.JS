import dbConnect from '../../../server/utils/dbConnect';
import Todo from '../../../server/models/todo';

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  if (method === 'POST') {
    const { formData } = body;

    await Todo.create({
      title: formData.title,
      description: formData.description,
      isCompleted: false,
    });

    const todos = await Todo.find({}).maxTimeMS(30000);
    return res.status(201).json({ message: 'New Todo Added !', todos });
  } else if (method === 'GET') {
    const todos = await Todo.find({}).maxTimeMS(30000);
    return res.status(200).json({ todos });
  }
}
