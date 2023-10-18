import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTypedDispatch } from '@/redux/hooks';
import { setIsAddModalOpen } from '@/redux/features/modalsSlice';

interface CreatePanelProps {}

export const CreatePanel: React.FC<CreatePanelProps> = () => {
  const dispatch = useTypedDispatch();

  const handleOpenTaskForm = () => {
    dispatch(setIsAddModalOpen(true));
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Typography variant="h3">Create new task</Typography>

      <IconButton onClick={handleOpenTaskForm}>
        <AddCircleIcon />
      </IconButton>
    </Grid>
  );
};
