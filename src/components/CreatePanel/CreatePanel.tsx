import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTypedDispatch } from '@/redux/hooks';
import { setIsAddFormOpenned } from '@/redux/features/taskSlice';

interface CreatePanelProps {}

export const CreatePanel: React.FC<CreatePanelProps> = () => {
  const dispatch = useTypedDispatch();

  const handleOpenAddForm = () => {
    dispatch(setIsAddFormOpenned(true));
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Typography variant="h3">Create new task</Typography>

      <IconButton onClick={handleOpenAddForm}>
        <AddCircleIcon />
      </IconButton>
    </Grid>
  );
};
