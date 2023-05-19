import type { NextPage } from 'next';
import Link from 'next/link';

import Button from '../components/atoms/Button';
import { ButtonType } from '../components/atoms/Button/types';
import { Heading } from '../components/atoms/Heading';
import { Tasks } from '../components/pages/tasks';
import Image from 'next/image';
import { useState } from 'react';

const Home: NextPage = () => {
  const [view, setView] = useState<string>('list');

  return (
    <>
      <center>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <Heading>All Tasks</Heading>

            <Link href={'/tasks/create'} className="mt-1">
              <Button title="Create" buttonType={ButtonType.Secondary} />
            </Link>

            <div>
              {view === 'card' ? (
                <Image
                  src="/icons/list-view.png"
                  alt="list-view"
                  width={50}
                  height={50}
                  onClick={() => setView('list')}
                />
              ) : (
                <Image
                  src="/icons/card-view.png"
                  alt="card-view"
                  width={50}
                  height={50}
                  onClick={() => setView('card')}
                />
              )}
            </div>
          </div>
          <Tasks {...{ view }} />
        </div>
      </center>
    </>
  );
};

export default Home;
