import React from 'react';

import { Heading } from '../../components/atoms/Heading';
import { CreateTaskForm } from '../../components/organisms/Forms/create-task';

const CreateTask: React.FC = () => {
  return (
    <>
      <Heading>
        <center>Create Task</center>
      </Heading>
      <CreateTaskForm />
    </>
  );
};

export default CreateTask;
