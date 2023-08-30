import React from 'react';
import { useTaskUsecase } from '../../../features/tasks/taskUsecase';
import { Task } from '../../../features/tasks/taskModel';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const { markTaskComplete } = useTaskUsecase();

  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => markTaskComplete(task.id)} />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
