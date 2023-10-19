'use client';

import { Grid, List, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { TaskItem } from '../TaskItem';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { setTasks } from '@/redux/features/taskSlice';
import { selectTasks } from '@/redux/selectors/taskSelector';
import { filterTasks } from '@/helpers/filterTasks';
import { selectFilterValues } from '@/redux/selectors/filterSelector';
import { selectSortValues } from '@/redux/selectors/sortSelector';
import { sortTasks } from '@/helpers/sortTasks';
import { demoTasks } from '@/data/demoTasks';
import useTheme from '@mui/material/styles/useTheme';
import { Loader } from '../Loader';

interface TaskListProps {}

export const TaskList: React.FC<TaskListProps> = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const tasks = useTypedSelector(selectTasks);
  const filterValues = useTypedSelector(selectFilterValues);
  const sortValues = useTypedSelector(selectSortValues);
  const [loading, setLoading] = useState(true);

  const filteredTasks = useMemo(
    () => filterTasks(tasks, filterValues),
    [tasks, filterValues],
  );

  const sortedTasks = useMemo(
    () => sortTasks(filteredTasks, sortValues),
    [tasks, sortValues, filterValues],
  );

  const isListEmpty = sortedTasks.length === 0;

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);

      dispatch(setTasks(parsedTasks));
      setLoading(false);
    } else {
      dispatch(setTasks(demoTasks));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (tasks.length !== 0) {
      const tasksToSave = JSON.stringify(tasks);

      localStorage.setItem('tasks', tasksToSave);
    }
  }, [tasks]);

  return (
    <Grid
      sx={{
        width: '70%',

        [theme.breakpoints.down('md')]: {
          width: '80%',
        },

        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }}
    >
      <Typography variant="h2" textAlign="center" marginBottom="20px">
        Tasks List:
      </Typography>

      {loading ? (
        <Loader />
      ) : (
        <>
          {isListEmpty ? (
            <Typography variant="h3" textAlign="center">
              Here is empty... Please create a new task!
            </Typography>
          ) : (
            <List>
              {sortedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </List>
          )}
        </>
      )}
    </Grid>
  );
};
