'use client';

import React from 'react';
import { IconButton } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import EditIcon from '@mui/icons-material/Edit';

export const EditButton: React.FC = () => {
  const theme = useTheme();

  return (
    <IconButton
      sx={{
        marginLeft: '15px',
        color: theme.palette.gray.main,
        fontSize: '20px',
        width: '10px',
      }}
    >
      <EditIcon fontSize="small" />
    </IconButton>
  );
};
