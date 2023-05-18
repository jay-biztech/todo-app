import Link from 'next/link';
import { useTasksQuery } from '../../../services/tasks';
import Button, { ButtonType } from '../../atoms/Button';

export const Tasks: React.FC = () => {
  const { data: tasks, isLoading } = useTasksQuery();

  return (
    <>
      <ul>
        {tasks === undefined || isLoading
          ? 'Loading...'
          : tasks.map((task) => {
              return (
                <li key={task.id}>
                  <div className="d-flex justify-content-between">
                    {task.name}
                    <Button
                      title="Delete"
                      buttonType={ButtonType.Danger}
                      onClick={() => alert(task.id)}
                    />
                  </div>
                </li>
              );
            })}
      </ul>
    </>
  );
};
