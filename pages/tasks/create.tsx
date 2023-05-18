import axios from 'axios';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Heading } from '../../components/atoms/Heading';
import Button, { ButtonType } from '../../components/atoms/Button';

const CreateTask: React.FC = () => {
  let TaskSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Title is required'),
    isCompleted: Yup.boolean().default(false),
    date: Yup.date(),
  });

  return (
    <>
      <Heading>
        <center>Create Task</center>
      </Heading>
      <Formik
        initialValues={{
          name: '',
          isCompleted: false,
          date: new Date(),
        }}
        validationSchema={TaskSchema}
        onSubmit={(values, actions) => {
          const { name, isCompleted, date } = values;
          axios.post('http://localhost:4000/tasks', {
            name,
            isCompleted,
            date,
          });
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
