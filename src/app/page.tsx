import { Grid, Typography } from '@mui/material';

import { TaskList } from '@/components/TaskList';

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      sx={{
        alignItems: 'center',
        minHeight: '100vh',
        padding: '30px',
      }}
    >
      <Typography variant="h1" color="primary" marginBottom="20px">
        TODOS
      </Typography>

      <TaskList />
    </Grid>
  );
}
