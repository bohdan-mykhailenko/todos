'use client';

import { Grid } from '@mui/material';
import { CreatePanel } from '../CreatePanel';
import { TaskList } from '../TaskList';
import { useTypedSelector } from '@/redux/hooks';
import {
  selectIsAddModalOpen,
  selectIsFormModalOpen,
} from '@/redux/selectors/modalsSelector';
import { AddModal } from '../Modal/AddModal';
import { FilterPanel } from '../FilterPanel';
import { SortPanel } from '../SortPanel/SortPanel';
import { DeleteModal } from '../Modal/DeleteModal';

export const TaskDashboard: React.FC = () => {
  const isAddModalOpen = useTypedSelector(selectIsAddModalOpen);
  const isFormModalOpen = useTypedSelector(selectIsFormModalOpen);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      gap="10px"
    >
      <CreatePanel />
      <FilterPanel />
      <SortPanel />

      {isAddModalOpen && <AddModal />}
      {isFormModalOpen && <DeleteModal />}

      <TaskList />
    </Grid>
  );
};
