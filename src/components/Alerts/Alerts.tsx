import React, { useEffect } from 'react';
import { Alert, AlertColor, AlertTitle, Grid, useTheme } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { selectAlertMessage } from '../../redux/selectors/alertSelector';
import { setIsAlertOppened } from '../../redux/features/alertSlice';

export const Alerts: React.FC = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const alertMessage = useTypedSelector(selectAlertMessage);

  const { title, text, severity } = alertMessage;

  const handleCloseAlert = () => {
    dispatch(setIsAlertOppened(false));
  };

  useEffect(() => {
    const autoCloseTimeout = setTimeout(() => {
      handleCloseAlert();
    }, 2000);

    return () => {
      clearTimeout(autoCloseTimeout);
    };
  }, []);

  return (
    <Grid
      sx={{
        position: 'absolute',
        top: '30px',
        right: '30px',
        transition: 'all 0.3s',

        [theme.breakpoints.down('sm')]: {
          top: '10px',
          right: '10px',
        },
      }}
    >
      <Alert severity={severity as AlertColor} onClose={handleCloseAlert}>
        <AlertTitle>{title}</AlertTitle>

        {text}
      </Alert>
    </Grid>
  );
};
