import React from 'react';
import TaskForm from '../components/Taskform';
import TaskList from '../components/Tasklist';

const HomePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;
