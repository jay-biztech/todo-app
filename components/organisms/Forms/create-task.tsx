import React from 'react';
import { Field, Form, Formik } from 'formik';

import { useCreateTaskMutation } from '../../../services/tasks';
import { TaskSchema } from '../../../validator/task-schema';
import Button from '../../atoms/Button';
import { ButtonType } from '../../atoms/Button/types';
import { DatePickerField } from '../../atoms/Fields/DatePicker';

export const CreateTaskForm: React.FC = () => {
  const { mutate: createTask } = useCreateTaskMutation();

  return (
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
            <DatePickerField
              name="dueDate"
              className="form-control"
              minDate={new Date()}
            />
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
  );
};
