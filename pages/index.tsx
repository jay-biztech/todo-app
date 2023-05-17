import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Heading } from '../components/atoms/Heading';
import { List } from '../components/atoms/List';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heading>Task List</Heading>
      <List>{['Swimming', 'Learn Next JS']}</List>
    </div>
  );
};

export default Home;
