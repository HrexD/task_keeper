interface Task {
    id: string;
    title: string;
    completed: boolean;
  }
  
  const tasks: Task[] = [];
  
  export function addTask(task: Task) {
    tasks.push(task);
  }
  
  export function completeTask(taskId: string) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = true;
    }
  }
  
  export function getAllTasks() {
    return tasks;
  }
      