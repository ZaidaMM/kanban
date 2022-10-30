import { useAppContext } from '../provider/AppProvider';

const Columns = () => {
  const { selectedBoard, boards } = useAppContext();

  return (
    <>
      <div className='selected-board'>
        {selectedBoard?.columns?.map((column) => (
          <div className='columns-container'>
            <div className='column-name'>
              <span className={column.name?.toLowerCase()}></span>
              <p className='column-title' key={column.name}>
                {column.name} <span>({column.tasks?.length})</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Columns;
