import { Task } from './../../../pages/api/tasks/types';
export type TaskProps = Pick<Task, 'id' | 'name'>;
