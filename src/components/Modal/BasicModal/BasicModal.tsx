'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useTheme from '@mui/material/styles/useTheme';

interface DeleteModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const BasicModal: React.FC<DeleteModalProps> = ({
  children,
  onClose,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            //   padding: '20px',

            //   width: '400px',

            position: 'absolute',
            top: '10%',
            left: '25%',

            //   transform: 'translate(-50%, -50%)',

            //   backgroundColor: theme.palette.white.main,
            //   border: `2px solid ${theme.palette.primary.main}`,
            //   boxShadow: 24,
            //   borderRadius: '5px',

            //   [theme.breakpoints.down('sm')]: {
            //     width: '80%',
            //   },
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
};
