// pages/index.js
import React from 'react';
import { useQuery, useMutation, queryClient } from 'react-query';
import { fetchTasks, createTask, updateTask, deleteTask } from 'Front/app/models/tasks.js';

const Home = () => {
  const { data: tasks } = useQuery('tasks', fetchTasks);

  const createTaskMutation = useMutation(createTask, {
    onSuccess: (newTask) => {
      queryClient.setQueryData('tasks', (oldTasks) => [...oldTasks, newTask]);
    },
  });

  const updateTaskMutation = useMutation(updateTask);

  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });

  const handleToggleComplete = async (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
    await updateTaskMutation.mutateAsync({ taskId, updatedTask });
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTaskMutation.mutateAsync(taskId);
  };

  return (
    <div>
      <h1>Task Keeper</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => createTaskMutation.mutate({ title: 'New Task' })}>
        Add Task
      </button>
    </div>
  );
};

export default Home;
