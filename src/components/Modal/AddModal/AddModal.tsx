'use client';

import React from 'react';
import { useTypedDispatch } from '@/redux/hooks';
import { setIsAddModalOpen } from '@/redux/features/modalsSlice';
import { BasicModal } from '../BasicModal';
import { TaskForm } from '@/components/TaskForm';

export const AddModal = () => {
  const dispatch = useTypedDispatch();

  const closeAddModal = () => {
    dispatch(setIsAddModalOpen(false));
  };

  return (
    <BasicModal onClose={closeAddModal}>
      <TaskForm />
    </BasicModal>
  );
};
