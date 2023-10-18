'use client';

import React from 'react';
import { Task } from '@/types/Task';
import { Grid, IconButton, ListItem, Typography } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import FlagIcon from '@mui/icons-material/Flag';
import { useTypedDispatch } from '@/redux/hooks';
import { removeTask, setUpdatingTask } from '@/redux/features/taskSlice';
import { Status } from '@/types/Status';
import { Priority } from '@/types/Priority';
import { setIsAddModalOpen } from '@/redux/features/modalsSlice';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useTypedDispatch();
  const theme = useTheme();
  const { id, title, description, priority, status } = task;

  const priorityColors = {
    [Priority.High]: 'red',
    [Priority.Medium]: 'orange',
    [Priority.Low]: 'blue',
    [Priority.Default]: theme.palette.primary.main,
  };

  const statusIcons = {
    [Status.Completed]: <CheckCircleOutlineIcon />,
    [Status.NotCompleted]: <QueryBuilderIcon />,
    [Status.InProgress]: <NotInterestedIcon />,
  };

  const currentPriorityColor = priorityColors[priority];

  const handleOpenEditModal = () => {
    dispatch(setIsAddModalOpen(true));
    dispatch(setUpdatingTask(task));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(id));
  };

  return (
    <ListItem>
      <Grid
        container
        sx={{
          padding: '10px',
          borderRadius: '10px',
          border: `3px solid ${currentPriorityColor}`,
          gap: '10px',
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid
            item
            sx={{
              direction: 'row',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Typography>
          </Grid>

          <Grid item>
            <IconButton onClick={handleOpenEditModal}>
              <EditIcon />
            </IconButton>

            <IconButton onClick={handleRemoveTask}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container>
          <Grid container alignItems="center">
            <Typography
              variant="h3"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: theme.palette.gray.main,
              }}
            >
              {description}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <IconButton
              sx={{
                color: currentPriorityColor,
              }}
            >
              <FlagIcon />
            </IconButton>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              textAlign: 'right',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textTransform: 'capitalize',
              }}
            >
              <IconButton
                sx={{
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
              >
                {statusIcons[status]}
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};
