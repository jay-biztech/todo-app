import { format, parseISO } from 'date-fns';
import { useDeleteTaskMutation } from '../../../../services/tasks';
import { useCompleteTaskMutation } from '../../../../services/tasks/useCompleteTaskMutation';
import Button from '../../../atoms/Button';
import { ButtonType } from '../../../atoms/Button/types';
import { TaskProps } from './type';

export const Task: React.FC<TaskProps> = ({
  id,
  name,
  isCompleted,
  dueDate,
}) => {
  const { mutate: deleteTask } = useDeleteTaskMutation();
  const { mutate: completeTask } = useCompleteTaskMutation();

  return (
    <>
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {format(parseISO(dueDate.toString()), 'yyyy-MM-dd')}
            </p>
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
      </div>
    </>
  );
};
