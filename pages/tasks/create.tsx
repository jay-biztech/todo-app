import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import Button from '../../components/atoms/Button';
import { ButtonType } from '../../components/atoms/Button/types';
import { Heading } from '../../components/atoms/Heading';
import { useCreateTaskMutation } from '../../services/tasks';
import { useState } from 'react';

const CreateTask: React.FC = () => {
  const TaskSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Title is required'),
    isCompleted: Yup.boolean().default(false),
    dueDate: Yup.date().required('Date is required'),
  });

  const { mutate: createTask } = useCreateTaskMutation();
  const [dueDate, setDueDate] = useState<Date>();

  return (
    <>
      <Heading>
        <center>Create Task</center>
      </Heading>
      <Formik
        initialValues={{
          name: '',
          isCompleted: false,
          dueDate: null,
        }}
        validationSchema={TaskSchema}
        onSubmit={(task, actions) => {
          console.log(task);

          createTask(task);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form method="POST">
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                className="form-control"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>

            <div className="mb-3">
              <label htmlFor="date">Date</label>
              <DatePicker
                id="dueDate"
                name="dueDate"
                selected={dueDate}
                onChange={(date: Date) => setDueDate(date)}
                className="form-control"
                value={dueDate}
              />
              {errors.dueDate && touched.dueDate ? (
                <div>{errors.dueDate}</div>
              ) : null}
            </div>

            <Button
              title="Submit"
              type="submit"
              buttonType={ButtonType.Success}
            ></Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateTask;
