'use client';

import { Grid } from '@mui/material';
import { CreatePanel } from '../CreatePanel';
import { TaskList } from '../TaskList';
import { useTypedSelector } from '@/redux/hooks';
import { selectIsAddModalOpen } from '@/redux/selectors/modalsSelector';
import { AddModal } from '../Modal/AddModal';

export const TaskDashboard: React.FC = () => {
  const isAddModalOpen = useTypedSelector(selectIsAddModalOpen);

  return (
    <Grid position="relative">
      <CreatePanel />
      {isAddModalOpen && <AddModal />}

      <TaskList />
    </Grid>
  );
};
