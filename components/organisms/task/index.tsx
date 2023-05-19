import { useDeleteTaskMutation } from '../../../services/tasks';
import Button from '../../atoms/Button';
import { ButtonType } from '../../atoms/Button/types';
import { TaskProps } from './type';

export const Task: React.FC<TaskProps> = ({ id, name }) => {
  const { mutate } = useDeleteTaskMutation();

  return (
    <li key={id}>
      <div className="d-flex justify-content-between">
        {name}
        <Button
          title="Delete"
          buttonType={ButtonType.Danger}
          onClick={() => mutate(Number(id))}
        />
      </div>
    </li>
  );
};
