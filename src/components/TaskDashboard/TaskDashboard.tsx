'use client';

import { Grid } from '@mui/material';
import { CreatePanel } from '../CreatePanel';
import { TaskList } from '../TaskList';
import { useTypedSelector } from '@/redux/hooks';
import { selectIsAddModalOpen } from '@/redux/selectors/modalsSelector';
import { AddModal } from '../Modal/AddModal';
import { FilterPanel } from '../FilterPanel';
import { SortPanel } from '../SortPanel/SortPanel';

export const TaskDashboard: React.FC = () => {
  const isAddModalOpen = useTypedSelector(selectIsAddModalOpen);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <CreatePanel />
      <FilterPanel />
      <SortPanel />

      {isAddModalOpen && <AddModal />}

      <TaskList />
    </Grid>
  );
};
