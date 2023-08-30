import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useTaskUsecase } from '../../features/tasks/taskUsecase';

const HomePage: React.FC = () => {
  const { getTasks } = useTaskUsecase();

  const tasks = getTasks(); // Obtenez la liste des tâches depuis le cas d'utilisation

  return (
    <div>
      <h1>Task Keeper</h1>
      <TaskList tasks={tasks} />
      <TaskForm />
    </div>
  );
};

export default HomePage;
