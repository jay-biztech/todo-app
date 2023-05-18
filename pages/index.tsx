import type { NextPage } from 'next';
import { Tasks } from '../components/pages/tasks';
import Link from 'next/link';
import { Heading } from '../components/atoms/Heading';

const Home: NextPage = () => {
  return (
    <>
      <Heading>
        <center>Tasks List</center>
      </Heading>
      <Link href={'/tasks/create'}>Create Task</Link>
      <Tasks />
    </>
  );
};

export default Home;
