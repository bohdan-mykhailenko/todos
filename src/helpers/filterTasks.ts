import { FilterValues } from '@/types/FilterValues';
import { Task } from '@/types/Task';

export const filterTasks = (tasks: Task[], filterValues: FilterValues) => {
  const { status, priority, query } = filterValues;

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = status === 'all' || task.status === status;
    const priorityMatch = priority === 'all' || task.priority === priority;

    const normalizedTitle = task.title.toLowerCase();
    const normalizedQuery = query.toLowerCase().trim();
    const queryMatch = !query || normalizedTitle.includes(normalizedQuery);

    return statusMatch && priorityMatch && queryMatch;
  });

  return filteredTasks;
};
