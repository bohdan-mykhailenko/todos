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
} from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

export const FilterPanel: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues: FilterValues = {
    query: '',
    priority: 'all',
    status: 'all',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      dispatch(setFilterValues(values));
    },
  });

  const handleResetFilters = () => {
    formik.resetForm();
    dispatch(setFilterValues(initialValues));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid>
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

      <Grid>
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
      <Grid>
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
      <Grid>
        <Button variant="contained" type="submit">
          Apply Filters
        </Button>

        <Button variant="contained" onClick={handleResetFilters}>
          Reset
        </Button>
      </Grid>
    </form>
  );
};
