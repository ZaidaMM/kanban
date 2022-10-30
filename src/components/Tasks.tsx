import { useAppContext } from '../provider/AppProvider';

const Tasks = () => {
  const { selectedBoard, selectedColumn, columns, column } = useAppContext();

  return (
    <div>
      {selectedColumn?.tasks?.map((task) =>
        column?.name === selectedColumn?.name ? (
          <>
            <p>{task.title}</p>{' '}
          </>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
export default Tasks;
