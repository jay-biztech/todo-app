import { useRouter } from 'next/router';
import React from 'react';
import { Heading } from '../../../../components/atoms/Heading';
import { EditTaskForm } from '../../../../components/organisms/Forms/edit-task';

const EditTask: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <Heading>
        <center>Edit Task</center>
      </Heading>
      <EditTaskForm {...{ id }} />
    </>
  );
};

export default EditTask;
