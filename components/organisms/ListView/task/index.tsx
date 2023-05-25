import { useDeleteTaskMutation } from '../../../../services/tasks';
import { useCompleteTaskMutation } from '../../../../services/tasks/useCompleteTaskMutation';
import Button from '../../../atoms/Button';
import { ButtonType } from '../../../atoms/Button/types';
import { TaskProps } from './type';

export const Task: React.FC<TaskProps> = ({ id, name, isCompleted, dueDate }) => {
  const { mutate: deleteTask } = useDeleteTaskMutation();
  const { mutate: completeTask } = useCompleteTaskMutation();

  return (
    <li key={id}>
      <div className="d-flex justify-content-between">
        {name}
        <div className="d-flex justify-content-around">
          {!isCompleted && (
            <Button
              title="Mark as Completed"
              buttonType={ButtonType.Success}
              onClick={() => completeTask(Number(id))}
            />
          )}
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
