import { Grid, Typography } from '@mui/material';
import { StoreProvider } from '@/redux/provider';
import { TaskDashboard } from '@/components/TaskDashboard/TaskDashboard';

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        padding: '30px',
        minHeight: '100vh',

        backgroundColor: 'mediumspringgreen',
      }}
    >
      <Typography variant="h1" color="primary" marginBottom="20px">
        TODOS
      </Typography>

      <StoreProvider>
        <TaskDashboard />
      </StoreProvider>
    </Grid>
  );
}
