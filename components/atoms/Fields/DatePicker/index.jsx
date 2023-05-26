import { format } from 'date-fns';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={field.value && new Date(field.value)}
      onChange={(val) => {
        setFieldValue(field.name, format(val, 'yyyy-MM-dd'));
      }}
    />
  );
};
