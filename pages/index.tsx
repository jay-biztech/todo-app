import type { NextPage } from 'next';
import { Tasks } from '../components/pages/tasks';
import Link from 'next/link';
import { Heading } from '../components/atoms/Heading';
import Button, { ButtonType } from '../components/atoms/Button';

const Home: NextPage = () => {
  return (
    <>
      <Heading>
        <center>Tasks List</center>
      </Heading>
      <Link href={'/tasks/create'}>
        <Button title="Create Task" buttonType={ButtonType.Secondary} />
      </Link>
      <Tasks />
    </>
  );
};

export default Home;
