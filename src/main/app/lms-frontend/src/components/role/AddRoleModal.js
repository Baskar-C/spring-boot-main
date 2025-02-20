import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';

const AddDepartmentModal = ({ isOpen, onClose, onSave }) => {
  const [department, setDepartment] = useState({
    departmentName: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDepartment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(department);
    setDepartment({ departmentName: '', description: '' });
    onClose();
  };


  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '1px solid #BDBDBD',
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Add Department
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="departmentName"
          value={department.departmentName}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          value={department.description}
          onChange={handleChange}
        />
        <Box mt={2}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{ ml: 2 }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddDepartmentModal;
