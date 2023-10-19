'use client';

import { Grid } from '@mui/material';
import { CreatePanel } from '../CreatePanel';
import { TaskList } from '../TaskList';
import { useTypedSelector } from '@/redux/hooks';
import { selectIsAddModalOpen } from '@/redux/selectors/modalsSelector';
import { AddModal } from '../Modal/AddModal';
import { FilterPanel } from '../FilterPanel';

export const TaskDashboard: React.FC = () => {
  const isAddModalOpen = useTypedSelector(selectIsAddModalOpen);

  return (
    <Grid position="relative">
      <CreatePanel />
      <FilterPanel />

      {isAddModalOpen && <AddModal />}

      <TaskList />
    </Grid>
  );
};
