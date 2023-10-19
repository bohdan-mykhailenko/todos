'use client';

import { Grid, List, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { TaskItem } from '../TaskItem';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setTasks } from '@/redux/features/taskSlice';
import { selectTasks } from '@/redux/selectors/taskSelector';
import { filterTasks } from '@/helpers/filterTasks';
import { selectFilterValues } from '@/redux/selectors/filterSelector';
import { selectSortValues } from '@/redux/selectors/sortSelector';
import { sortTasks } from '@/helpers/sortTasks';
import { demoTasks } from '@/data/demoTasks';

interface TaskListProps {}

export const TaskList: React.FC<TaskListProps> = () => {
  const dispatch = useTypedDispatch();
  const tasks = useTypedSelector(selectTasks);
  const filterValues = useTypedSelector(selectFilterValues);
  const sortValues = useTypedSelector(selectSortValues);

  const filteredTasks = useMemo(
    () => filterTasks(tasks, filterValues),
    [tasks, filterValues],
  );

  const sortedTasks = useMemo(
    () => sortTasks(filteredTasks, sortValues),
    [tasks, sortValues],
  );

  const isListEmpty = sortedTasks.length === 0;

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);

      dispatch(setTasks(parsedTasks));

      return;
    }

    dispatch(setTasks(demoTasks));
  }, []);

  useEffect(() => {
    if (tasks.length !== 0) {
      const tasksToSave = JSON.stringify(tasks);

      localStorage.setItem('tasks', tasksToSave);
    }
  }, [tasks]);

  return (
    <Grid>
      {isListEmpty ? (
        <Typography>Emptyy</Typography>
      ) : (
        <List>
          {sortedTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </List>
      )}
    </Grid>
  );
};
