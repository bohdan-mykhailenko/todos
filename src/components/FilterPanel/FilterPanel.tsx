import { setFilterValues } from '@/redux/features/filterSlice';
import { FilterValues } from '@/types/FilterValues';
import { Priority } from '@/types/Priority';
import { Status } from '@/types/Status';
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import useTheme from '@mui/material/styles/useTheme';

export const FilterPanel: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const initialValues: FilterValues = {
    query: '',
    priority: 'all',
    status: 'all',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(setFilterValues(values));
    },
  });

  const handleResetFilters = () => {
    formik.resetForm();

    dispatch(setFilterValues(initialValues));
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
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: theme.palette.white.main,

          width: '300px',
        }}
      >
        <Typography textAlign="center" variant="h5">
          Filter:
        </Typography>

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
            <MenuItem value={'all'}>all</MenuItem>
            {Object.values(Status).map((statusValue) => (
              <MenuItem key={statusValue} value={statusValue}>
                {statusValue}
              </MenuItem>
            ))}
          </Select>
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
            <MenuItem value={'all'}>all</MenuItem>
            {Object.values(Priority).map((priorityValue) => (
              <MenuItem key={priorityValue} value={priorityValue}>
                {priorityValue}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="query"
            name="query"
            label="Find task..."
            variant="outlined"
            fullWidth
            value={formik.values.query}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Button
            variant="contained"
            onClick={handleResetFilters}
            sx={{
              marginRight: '15px',
            }}
          >
            Reset
          </Button>

          <Button variant="contained" type="submit">
            Apply
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
