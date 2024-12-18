import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/api';

interface Task {
  _id: string;
  title: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task._id !== id));
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <li key={task._id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <span>{task.title}</span>
          <button onClick={() => handleDelete(task._id)} style={{ cursor: 'pointer', color: 'red' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
