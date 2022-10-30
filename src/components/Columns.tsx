import { useAppContext } from '../provider/AppProvider';

const Columns = () => {
  const { selectedBoard, boards } = useAppContext();

  return (
    <>
      {selectedBoard ? (
        selectedBoard.columns?.map((column) => (
          <div className='columns-container'>
            <div className='column-name'>
              <span className={column.name?.toLowerCase()}></span>
              <p className='column-title' key={column.name}>
                {column.name} <span>({column.tasks?.length})</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <>
          <p>This board is empty. Create a new column to get started</p>
          <button>+ Add New Column</button>
        </>
      )}
    </>
  );
};
export default Columns;
