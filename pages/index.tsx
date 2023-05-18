import type { NextPage } from 'next';
import { Tasks } from '../components/pages/tasks';
import Link from 'next/link';
import { Heading } from '../components/atoms/Heading';
import Button from '../components/atoms/Button';
import { ButtonType } from '../components/atoms/Button/types';

const Home: NextPage = () => {
  return (
    <>
      <center>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <Heading>Tasks List</Heading>
            <Link href={'/tasks/create'} className="mt-1">
              <Button title="Create" buttonType={ButtonType.Secondary} />
            </Link>
          </div>
          <Tasks />
        </div>
      </center>
    </>
  );
};

export default Home;
