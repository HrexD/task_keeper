import { useState } from 'react'; // Importez useState
import { Task, NewTask } from './taskModel';

export function useTaskUsecase() {
  const [tasks, setTasks] = useState<Task[]>([]); // Initialisez l'état tasks

  const createTask = (task: NewTask) => {
    const newTask: Task = { id: Date.now().toString(), title: task.title, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]); // Ajoutez la nouvelle tâche à l'état
  };

  const markTaskComplete = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === taskId ? { ...task, completed: true } : task))
    ); // Marquez la tâche comme complétée dans l'état
  };

  const getTasks = () => {
    return tasks; // Retournez la liste des tâches
  };

  return { tasks, createTask, markTaskComplete, getTasks };
}
