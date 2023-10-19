import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTypedDispatch, useTypedSelector } from '@/redux/hooks';
import { SortFields, SortOrder, SortValues } from '@/types/SortValues';
import { setSortValues } from '@/redux/features/sortSlice';
import { selectSortValues } from '@/redux/selectors/sortSelector';
import useTheme from '@mui/material/styles/useTheme';

export const SortPanel = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const sortValues = useTypedSelector(selectSortValues);

  const sortField = sortValues.field;
  const sortOrder = sortValues.order;

  const sortOptions = [
    { field: SortFields.TITLE },
    { field: SortFields.STATUS },
    { field: SortFields.PRIORITY },
  ];

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
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: theme.palette.white.main,

        width: '300px',
      }}
    >
      <Typography variant="h5" textAlign="center" marginBottom="10px">
        Sort by:
      </Typography>
      <Grid container justifyContent="center" gap="5px">
        {sortOptions.map((option) => (
          <Button
            sx={{
              width: '85px',
              fontSize: '12px',
              fontWeight: '700',
            }}
            key={option.field}
            onClick={() => handleSort(option.field)}
            variant="outlined"
          >
            {option.field}
            {sortField === option.field &&
              (sortOrder === SortOrder.ASC ? (
                <ArrowUpwardIcon fontSize="small" />
              ) : (
                <ArrowDownwardIcon fontSize="small" />
              ))}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};
