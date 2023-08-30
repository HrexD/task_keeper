// models/tasks.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Remplacez par l'URL de votre API

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(`${API_URL}/tasks`, taskData);
  return response.data;
};
