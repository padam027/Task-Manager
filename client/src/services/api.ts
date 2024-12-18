import axios from 'axios';

const API_URL = 'http://localhost:7000/api/tasks'; // Adjust based on your backend

// Fetch all tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a new task
export const createTask = async (task: { title: string }) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

// Delete a task
export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
