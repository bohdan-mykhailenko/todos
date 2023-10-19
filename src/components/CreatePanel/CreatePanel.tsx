import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTypedDispatch } from '@/redux/hooks';
import { setIsAddModalOpen } from '@/redux/features/modalsSlice';
import useTheme from '@mui/material/styles/useTheme';

interface CreatePanelProps {}

export const CreatePanel: React.FC<CreatePanelProps> = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();

  const handleOpenTaskForm = () => {
    dispatch(setIsAddModalOpen(true));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      marginBottom="10px"
    >
      <Typography variant="h3">Create new task</Typography>

      <IconButton
        onClick={handleOpenTaskForm}
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        <AddCircleIcon fontSize="medium" />
      </IconButton>
    </Grid>
  );
};
