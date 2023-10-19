'use client';

import { Grid, List, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { TaskItem } from '../TaskItem';
import { Priority } from '@/types/Priority';
import { Status } from '@/types/Status';
import { Task } from '@/types/Task';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setTasks } from '@/redux/features/taskSlice';
import {
  selectFilterValues,
  selectTasks,
} from '@/redux/selectors/taskSelector';
import { filterTasks } from '@/helpers/filterTasks';

interface TaskListProps {}

export const TaskList: React.FC<TaskListProps> = () => {
  const dispatch = useTypedDispatch();

  const tasksFromStorage: Task[] = [
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
      status: Status.Completed,
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

  const tasks = useTypedSelector(selectTasks);
  const filterValues = useTypedSelector(selectFilterValues);

  const filteredTasks = filterTasks(tasks, filterValues);
  const isListEmpty = tasks.length === 0;

  useEffect(() => {
    // const savedTasks = localStorage.getItem('tasks');

    // if (savedTasks) {
    //   const parsedTasks = JSON.parse(savedTasks);

    //   dispatch(setTasks(parsedTasks));
    // } else {
    //   dispatch(setTasks(tasksFromStorage));
    // }

    dispatch(setTasks(tasksFromStorage));

    return () => {
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    };
  }, []);

  return (
    <Grid>
      {isListEmpty ? (
        <Typography>Emptyy</Typography>
      ) : (
        <List>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </List>
      )}
    </Grid>
  );
};
