import { Box, Button, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { SortFields, SortOrder, SortValues } from '@/types/SortValues';
import { setSortValues } from '@/redux/features/sortSlice';
import { selectSortValues } from '@/redux/selectors/sortSelector';

export const SortPanel = () => {
  const dispatch = useTypedDispatch();
  const sortValues = useTypedSelector(selectSortValues);
  const sortField = sortValues.field;
  const sortOrder = sortValues.order;

  const handleSort = (field: SortFields) => {
    if (field === sortField) {
      const newOrder =
        sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;

      dispatch(setSortValues({ field, order: newOrder }));
    } else {
      dispatch(setSortValues({ field, order: SortOrder.ASC }));
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1">Sort by:</Typography>
      <Button onClick={() => handleSort(SortFields.TITLE)}>
        Title
        {sortField === SortFields.TITLE &&
          (sortOrder === SortOrder.ASC ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />)}
      </Button>
      <Button onClick={() => handleSort(SortFields.STATUS)}>
        Status
        {sortField === SortFields.STATUS &&
          (sortOrder === SortOrder.ASC ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />)}
      </Button>
      <Button onClick={() => handleSort(SortFields.PRIORITY)}>
        Priority
        {sortField === SortFields.PRIORITY &&
          (sortOrder === SortOrder.ASC ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />)}
      </Button>
    </Box>
  );
};
