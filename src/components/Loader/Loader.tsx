import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useTheme from '@mui/material/styles/useTheme';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface LoaderProps {
  message?: string;
  size?: number;
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  message,
  size = 40,
  color,
}) => {
  const theme = useTheme();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {message && (
        <Typography variant="h4" color="primary" sx={{ marginBottom: '20px' }}>
          {message}
        </Typography>
      )}
      <CircularProgress
        size={size}
        sx={{
          color: color ? color : theme.palette.primary.main,
        }}
      />
    </Grid>
  );
};
