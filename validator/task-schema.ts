import * as Yup from 'yup';

export const TaskSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Title is required'),
  isCompleted: Yup.boolean().default(false),
  dueDate: Yup.date().required('Date is required'),
});
