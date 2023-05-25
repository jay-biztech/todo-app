import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';
import Button from '../../components/atoms/Button';
import { ButtonType } from '../../components/atoms/Button/types';
import { DatePickerField } from '../../components/atoms/Fields/DatePicker';
import { useCreateTaskMutation } from '../../services/tasks';
import { Heading } from '../../components/atoms/Heading';

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

  return (
    <>
      <Heading>
        <center>Create Task</center>
      </Heading>
      <Formik
        initialValues={{
          name: '',
          isCompleted: false,
          dueDate: new Date(),
        }}
        validationSchema={TaskSchema}
        onSubmit={(task, actions) => {
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
              <DatePickerField name="dueDate" className="form-control" />
              {errors.dueDate && touched.dueDate ? (
                <div>{errors.dueDate as string}</div>
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
