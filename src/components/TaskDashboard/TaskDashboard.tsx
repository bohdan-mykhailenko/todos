'use client';

import { Grid } from '@mui/material';
import { CreatePanel } from '../CreatePanel';
import { AddForm } from '../AddForm';
import { TaskList } from '../TaskList';
import { useTypedSelector } from '@/redux/hooks';
import { selectIsAddFormOpenned } from '@/redux/selectors/taskSelector';

export const TaskDashboard: React.FC = () => {
  const isAddFormOpenned = useTypedSelector(selectIsAddFormOpenned);

  return (
    <Grid>
      <CreatePanel />
      {isAddFormOpenned && <AddForm />}

      <TaskList />
    </Grid>
  );
};
