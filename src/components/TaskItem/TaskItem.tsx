'use client';

import React from 'react';
import { Task } from '@/types/Task';
import { Box, Grid, IconButton, ListItem, Typography } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import FlagIcon from '@mui/icons-material/Flag';
import { useTypedDispatch } from '@/redux/hooks';
import { setSelectedTask, toggleTaskStatus } from '@/redux/features/taskSlice';
import { Status } from '@/types/Status';
import { Priority } from '@/types/Priority';
import {
  setIsAddModalOpen,
  setIsFormModalOpen,
} from '@/redux/features/modalsSlice';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useTypedDispatch();
  const theme = useTheme();
  const { id, title, description, priority, status } = task;

  const priorityColors = {
    [Priority.HIGH]: theme.palette.priority.dark,
    [Priority.MEDIUM]: theme.palette.priority.main,
    [Priority.LOW]: theme.palette.priority.light,
    [Priority.DEFAULT]: theme.palette.primary.main,
  };

  const priorityNames = {
    [Priority.HIGH]: 'P1',
    [Priority.MEDIUM]: 'P2',
    [Priority.LOW]: 'P3',
    [Priority.DEFAULT]: 'P4',
  };

  const statusColors = {
    [Status.COMPLETED]: theme.palette.success.main,
    [Status.NOT_COMPLETED]: theme.palette.error.main,
    [Status.IN_PROGRESS]: theme.palette.info.main,
  };

  const statusIcons = {
    [Status.COMPLETED]: <CheckCircleOutlineIcon fontSize="medium" />,
    [Status.NOT_COMPLETED]: <NotInterestedIcon fontSize="medium" />,
    [Status.IN_PROGRESS]: <QueryBuilderIcon fontSize="medium" />,
  };

  const handleOpenEditModal = () => {
    dispatch(setIsAddModalOpen(true));
    dispatch(setSelectedTask(task));
  };

  const handleOpenDeleteModal = () => {
    dispatch(setIsFormModalOpen(true));
    dispatch(setSelectedTask(task));
  };

  const handleStatusToggle = () => {
    dispatch(toggleTaskStatus(id));
  };

  return (
    <ListItem>
      <Grid
        container
        sx={{
          padding: '20px',
          borderRadius: '10px',
          border: `3px solid ${theme.palette.primary.main}`,
          gap: '10px',
          backgroundColor: theme.palette.white.main,

          [theme.breakpoints.down('sm')]: {
            padding: '10px',
            gap: '5px',
          },
        }}
      >
        <Grid
          xs={12}
          item
          sx={{
            textAlign: 'right',
          }}
        >
          <IconButton onClick={handleOpenEditModal}>
            <EditIcon />
          </IconButton>

          <IconButton onClick={handleOpenDeleteModal}>
            <CloseIcon />
          </IconButton>
        </Grid>

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
              [theme.breakpoints.down('sm')]: {
                fontSize: '20px',
              },
            }}
          >
            {title}
          </Typography>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.gray.dark,

                [theme.breakpoints.down('md')]: {
                  fontSize: '16px',
                },

                [theme.breakpoints.down('sm')]: {
                  fontSize: '14px',
                },
              }}
            >
              {description}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                display: 'flex',
                color: priorityColors[priority],
              }}
            >
              <Typography variant="h4">{priorityNames[priority]}</Typography>
              <FlagIcon />
            </Box>
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
                  color: statusColors[status],
                  border: `2px solid ${statusColors[status]}`,
                }}
                onClick={handleStatusToggle}
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
