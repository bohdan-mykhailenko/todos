'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { Button, Grid } from '@mui/material';
import { BasicModal } from '../BasicModal';
import { setIsFormModalOpen } from '@/redux/features/modalsSlice';
import { selectSelectedTask } from '@/redux/selectors/taskSelector';
import { removeTask } from '@/redux/features/taskSlice';
import {
  setAlertMessage,
  setIsAlertOppened,
} from '@/redux/features/alertSlice';

export const DeleteModal = () => {
  const dispatch = useTypedDispatch();
  const { id = 0, title } = useTypedSelector(selectSelectedTask) || {};

  const handleCloseDeleteModal = () => {
    dispatch(setIsFormModalOpen(false));
  };

  const handleRemoveTask = () => {
    const deleteMessage = {
      title: 'Delete',
      text: 'Successfully deleted task!',
      severity: 'success',
    };

    dispatch(removeTask(id));
    dispatch(setIsFormModalOpen(false));
    dispatch(setIsAlertOppened(true));
    dispatch(setAlertMessage(deleteMessage));
  };

  return (
    <BasicModal onClose={handleCloseDeleteModal}>
      <Grid
        padding="20px"
        width="250px"
        container
        direction="column"
        margin="0 auto"
      >
        <Typography variant="h4" textAlign="center">
          Are you sure you wanna delete
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          color="error"
          sx={{
            marginBottom: '20px',
          }}
        >
          {title}
        </Typography>

        <Grid item xs={12} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseDeleteModal}
            sx={{
              marginRight: '15px',
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleRemoveTask}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </BasicModal>
  );
};
