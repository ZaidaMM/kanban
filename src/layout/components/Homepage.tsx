import Columns from '../../components/Columns';
import { useAppContext } from '../../provider/AppProvider';

const Homepage = () => {
  const { selectedBoard } = useAppContext();
  return (
    <div>
      {selectedBoard ? (
        <Columns />
      ) : (
        <>
          <div className='empty-board'>
            <p className='empty-board-text'>
              This board is empty. Create a new column to get started
            </p>
            <button className='btn btn-nav'>+ Add New Column</button>
          </div>
        </>
      )}
    </div>
  );
};
export default Homepage;
