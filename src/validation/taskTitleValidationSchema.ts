import * as Yup from 'yup';

export const taskTitleValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters'),
});
