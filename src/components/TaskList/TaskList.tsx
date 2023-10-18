'use client';

import { List } from '@mui/material';
import React from 'react';
import { TaskItem } from '../TaskItem';
import { Priority } from '@/types/Priority';
import { Status } from '@/types/Status';
import { Task } from '@/types/Task';

interface TaskListProps {}

export const TaskList: React.FC<TaskListProps> = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Develop Website Homepage',
      description: 'Design and code the homepage of the company website.',
      priority: Priority.Default,
      status: Status.InProgress,
    },
    {
      id: 2,
      title: 'Meeting with Client',
      description: 'Discuss project requirements and gather feedback.',
      priority: Priority.Medium,
      status: Status.NotCompleted,
    },
    {
      id: 3,
      title: 'Content Writing',
      description: 'Write content for the "About Us" page.',
      priority: Priority.Low,
      status: Status.InProgress,
    },
    {
      id: 4,
      title: 'QA Testing',
      description:
        'Test the new features and functionalities of the application.',
      priority: Priority.Medium,
      status: Status.Completed,
    },
    {
      id: 5,
      title: 'Project Presentation',
      description: 'Prepare a presentation for the upcoming project review.',
      priority: Priority.High,
      status: Status.NotCompleted,
    },
  ];

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};
