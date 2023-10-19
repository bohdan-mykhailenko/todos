import { Priority } from '@/types/Priority';
import { Status } from '@/types/Status';
import { Task } from '@/types/Task';

export const demoTasks: Task[] = [
  {
    id: 1,
    title: 'Develop Website Homepage',
    description: 'Design and code the homepage of the company website.',
    priority: Priority.DEFAULT,
    status: Status.IN_PROGRESS,
  },
  {
    id: 2,
    title: 'Meeting with Client',
    description: 'Discuss project requirements and gather feedback.',
    priority: Priority.HIGH,
    status: Status.COMPLETED,
  },
  {
    id: 3,
    title: 'Content Writing',
    description: 'Write content for the "About Us" page.',
    priority: Priority.LOW,
    status: Status.IN_PROGRESS,
  },
  {
    id: 4,
    title: 'QA Testing',
    description:
      'Test the new features and functionalities of the application.',
    priority: Priority.MEDIUM,
    status: Status.COMPLETED,
  },
  {
    id: 5,
    title: 'Project Presentation',
    description: 'Prepare a presentation for the upcoming project review.',
    priority: Priority.HIGH,
    status: Status.NOT_COMPLETED,
  },
  {
    id: 6,
    title: 'Task 6',
    description: 'Description of Task 6',
    priority: Priority.DEFAULT,
    status: Status.IN_PROGRESS,
  },
  {
    id: 7,
    title: 'Task 7',
    description: 'Description of Task 7',
    priority: Priority.MEDIUM,
    status: Status.COMPLETED,
  },
  {
    id: 8,
    title: 'Task 8',
    description: 'Description of Task 8',
    priority: Priority.LOW,
    status: Status.IN_PROGRESS,
  },
  {
    id: 9,
    title: 'Task 9',
    description: 'Description of Task 9',
    priority: Priority.MEDIUM,
    status: Status.COMPLETED,
  },
  {
    id: 10,
    title: 'Task 10',
    description: 'Description of Task 10',
    priority: Priority.HIGH,
    status: Status.NOT_COMPLETED,
  },
];
