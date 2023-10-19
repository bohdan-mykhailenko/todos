import { Priority } from '@/types/Priority';
import { SortFields, SortOrder, SortValues } from '@/types/SortValues';
import { Status } from '@/types/Status';
import { Task } from '@/types/Task';

export const sortTasks = (tasks: Task[], sortValues: SortValues) => {
  const { field, order } = sortValues;

  if (field === SortFields.DEFAULT || order === SortOrder.DEFAULT) {
    return tasks;
  }

  const statusOrder = {
    [Status.COMPLETED]: 1,
    [Status.IN_PROGRESS]: 2,
    [Status.NOT_COMPLETED]: 3,
  };

  const priorityOrder = {
    [Priority.HIGH]: 1,
    [Priority.MEDIUM]: 2,
    [Priority.LOW]: 3,
    [Priority.DEFAULT]: 4,
  };

  const comparators =
    (field: SortValues['field']) => (taskA: Task, taskB: Task) => {
      switch (field) {
        case SortFields.TITLE:
          const nameA = taskA.title.toLowerCase();
          const nameB = taskB.title.toLowerCase();

          return nameA.localeCompare(nameB);

        case SortFields.STATUS:
          const statusA = statusOrder[taskA.status];
          const statusB = statusOrder[taskB.status];

          return statusA - statusB;

        case SortFields.PRIORITY:
          const priorityA = priorityOrder[taskA.priority];
          const priorityB = priorityOrder[taskB.priority];

          return priorityA - priorityB;

        default:
          return 0;
      }
    };

  const comparator = comparators(field);

  return tasks.sort((taskA, taskB) => {
    if (order === SortOrder.ASC) {
      return comparator(taskA, taskB);
    }

    return comparator(taskB, taskA);
  });
};
