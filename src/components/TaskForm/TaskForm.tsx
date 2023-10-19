import { setIsAddModalOpen } from '@/redux/features/modalsSlice';
import { addTask, editTask, setUpdatingTask } from '@/redux/features/taskSlice';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { selectUpdatingTask } from '@/redux/selectors/taskSelector';
import { Priority } from '@/types/Priority';
import { Status } from '@/types/Status';
import { Task } from '@/types/Task';
import { taskTitleValidationSchema } from '@/validation/taskTitleValidationSchema';
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';

export const TaskForm: React.FC = () => {
  const dispatch = useTypedDispatch();
  const updatingTask = useTypedSelector(selectUpdatingTask);
  const isTaskUpdating = updatingTask !== null;

  const initialValues: Task = {
    id: updatingTask?.id || 0,
    title: updatingTask?.title || '',
    description: updatingTask?.description || '',
    priority: updatingTask?.priority || Priority.DEFAULT,
    status: updatingTask?.status || Status.NOT_COMPLETED,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: taskTitleValidationSchema,
    onSubmit: (values) => {
      if (!isTaskUpdating) {
        dispatch(addTask(values));
      } else {
        const isUpdated =
          values.title !== updatingTask.title ||
          values.description !== updatingTask.description ||
          values.priority !== updatingTask.priority ||
          values.status !== updatingTask.status;

        console.log('iu', isUpdated);
        console.log('val', values);

        if (isUpdated) {
          dispatch(editTask(values));
        }
      }

      dispatch(setIsAddModalOpen(false));
      dispatch(setUpdatingTask(null));
    },
  });

  const handleCloseTaskForm = () => {
    dispatch(setIsAddModalOpen(false));
    dispatch(setUpdatingTask(null));
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
          >
            {Object.values(Priority).map((priorityValue) => (
              <MenuItem key={priorityValue} value={priorityValue}>
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
          >
            {Object.values(Status).map((statusValue) => (
              <MenuItem key={statusValue} value={statusValue}>
                {statusValue}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseTaskForm}
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
