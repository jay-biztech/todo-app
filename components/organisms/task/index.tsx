import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from '../../../services/tasks';
import Button from '../../atoms/Button';
import { ButtonType } from '../../atoms/Button/types';
import { TaskProps } from './type';

export const Task: React.FC<TaskProps> = ({ id, name }) => {
  const { mutate: deleteTask } = useDeleteTaskMutation();
  const { mutate: updateTask } = useUpdateTaskMutation();

  return (
    <li key={id}>
      <div className="d-flex justify-content-between">
        {name}
        <div className="d-flex justify-content-around">
          <Button
            title="Mark as Completed"
            buttonType={ButtonType.Success}
            onClick={() => updateTask(Number(id))}
          />
          <Button
            title="Delete"
            buttonType={ButtonType.Danger}
            onClick={() => deleteTask(Number(id))}
          />
        </div>
      </div>
    </li>
  );
};
