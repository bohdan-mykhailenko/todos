import { setIsAddModalOpen } from '@/redux/features/modalsSlice';
import { addTask, editTask, setSelectedTask } from '@/redux/features/taskSlice';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { selectSelectedTask } from '@/redux/selectors/taskSelector';
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
import useTheme from '@mui/material/styles/useTheme';

export const TaskForm: React.FC = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const selectedTask = useTypedSelector(selectSelectedTask);
  const isTaskUpdating = selectedTask !== null;

  const initialValues: Task = {
    id: selectedTask?.id || 0,
    title: selectedTask?.title || '',
    description: selectedTask?.description || '',
    priority: selectedTask?.priority || Priority.DEFAULT,
    status: selectedTask?.status || Status.NOT_COMPLETED,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: taskTitleValidationSchema,
    onSubmit: (values) => {
      if (!isTaskUpdating) {
        dispatch(addTask(values));
      } else {
        const isUpdated =
          values.title !== selectedTask.title ||
          values.description !== selectedTask.description ||
          values.priority !== selectedTask.priority ||
          values.status !== selectedTask.status;

        if (isUpdated) {
          dispatch(editTask(values));
        }
      }

      dispatch(setIsAddModalOpen(false));
      dispatch(setSelectedTask(null));
    },
  });

  const handleCloseTaskForm = () => {
    dispatch(setIsAddModalOpen(false));
    dispatch(setSelectedTask(null));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        padding="20px"
        gap="10px"
        margin="0 auto"
        direction="column"
        sx={{
          borderRadius: '10px',
          backgroundColor: theme.palette.white.main,

          [theme.breakpoints.up('md')]: {
            width: '600px',
          },

          [theme.breakpoints.up('sm')]: {
            width: '400px',
          },

          [theme.breakpoints.up('xs')]: {
            width: '300px',
          },
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
        <Grid item xs={12} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseTaskForm}
            sx={{
              marginRight: '15px',
            }}
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
