import { Field, Form, Formik } from 'formik';
import React from 'react';

import { useUpdateTaskMutation } from '../../../services/tasks/useUpdateTaskMutation';
import { TaskSchema } from '../../../validator/task-schema';
import Button from '../../atoms/Button';
import { ButtonType } from '../../atoms/Button/types';
import { DatePickerField } from '../../atoms/Fields/DatePicker';
import { useTask } from '../../../services/tasks/useTask';
import { NotFound } from '../../atoms/NotFound';

export const EditTaskForm: React.FC<{ id: string }> = ({ id }) => {
  const { data: task, isLoading } = useTask(id);
  const { mutate: updateTask } = useUpdateTaskMutation();

  if (!task || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Formik
      initialValues={{
        name: task.name,
        isCompleted: false,
        dueDate: task.dueDate,
      }}
      validationSchema={TaskSchema}
      onSubmit={(task, actions) => {
        updateTask(task);
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
