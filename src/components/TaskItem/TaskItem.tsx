'use client';

import React from 'react';
import { Task } from '@/types/Task';
import { Grid, IconButton, ListItem, Typography } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { EditButton } from '../EditButton';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const theme = useTheme();
  const { title, description, priority, status } = task;

  const priorityBorderColors = {
    default: 'gray',
    high: 'red',
    medium: 'orange',
    low: 'blue',
  };

  const borderColor =
    priorityBorderColors[task.priority] || theme.palette.primary.main;

  return (
    <ListItem>
      <Grid
        container
        sx={{
          padding: '10px',
          borderRadius: '10px',
          border: `3px solid ${borderColor}`,
          gap: '10px',
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item direction="row" display="flex" alignItems="center">
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

            <EditButton />
          </Grid>

          <Grid item>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container>
          <Grid container xs={12} alignItems="center">
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.gray.main,
              }}
            >
              {description}
            </Typography>

            <EditButton />
          </Grid>

          {/* <Grid item xs={6}>
            <Typography variant="h3">{priority}</Typography>
          </Grid> */}

          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'right',
            }}
          >
            <Typography variant="h3">{status}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};
