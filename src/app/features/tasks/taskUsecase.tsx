import { useState } from 'react'; 
import { Task, NewTask } from './taskModel';

export function useTaskUsecase() {
  const [tasks, setTasks] = useState<Task[]>([]); 

  const createTask = (task: NewTask) => {
    const newTask: Task = { id: Date.now().toString(), title: task.title, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]); 
  };

  const markTaskComplete = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === taskId ? { ...task, completed: true } : task))
    ); 
  };

  const getTasks = () => {
    return tasks; // Retournez la liste des tâches
  };

  return { tasks, createTask, markTaskComplete, getTasks };
}
