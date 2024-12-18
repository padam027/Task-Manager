import React, { useState } from 'react';
import { createTask } from '../services/api';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createTask({ title });
    setTitle('');
    window.location.reload(); // Refresh the task list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
