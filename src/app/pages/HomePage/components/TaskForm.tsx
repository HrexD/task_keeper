import React, { useState } from 'react';
import { useTaskUsecase } from '../../../features/tasks/taskUsecase';
import { Task, NewTask } from '../../../features/tasks/taskModel'; // Assurez-vous d'ajuster le chemin si nécessaire

const TaskForm: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { createTask } = useTaskUsecase();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      const newTask: Task = { id: Date.now().toString(), title: taskTitle, completed: false };
      createTask(newTask);
      setTaskTitle('');
    }
  };

  return (
    <div>
      <h2>Add Task:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
