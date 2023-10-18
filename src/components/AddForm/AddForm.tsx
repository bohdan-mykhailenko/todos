import { addTask, setIsAddFormOpenned } from '@/redux/features/taskSlice';
import { useTypedDispatch } from '@/redux/hooks';
import { Priority } from '@/types/Priority';
import { Status } from '@/types/Status';
import { Task } from '@/types/Task';
import { addFormValidationSchema } from '@/validation/addFormValidationSchema';
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';

export const AddForm: React.FC = () => {
  const dispatch = useTypedDispatch();
  const initialValues: Task = {
    id: 0,
    title: '',
    description: '',
    priority: Priority.Default,
    status: Status.NotCompleted,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: addFormValidationSchema,
    onSubmit: (values) => {
      dispatch(addTask(values));
      dispatch(setIsAddFormOpenned(false));
    },
  });

  const handleCloseAddForm = () => {
    dispatch(setIsAddFormOpenned(false));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        padding="20px"
        gap="10px"
        margin="0 auto"
        sx={{
          backgroundColor: '#dea',
          width: '50%',
        }}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            labelId="priority-label"
            id="priority"
            name="priority"
            variant="outlined"
            fullWidth
            value={formik.values.priority}
            onChange={formik.handleChange}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            {Object.values(Priority).map((priorityValue) => (
              <MenuItem
                key={priorityValue}
                value={priorityValue}
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                {priorityValue}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            name="status"
            variant="outlined"
            fullWidth
            value={formik.values.status}
            onChange={formik.handleChange}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            {Object.values(Status).map((statusValue) => (
              <MenuItem
                key={statusValue}
                value={statusValue}
                sx={{
                  textTransform: 'capitalize',
                }}
              >
                {statusValue}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseAddForm}
          >
            Cancel
          </Button>

          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
