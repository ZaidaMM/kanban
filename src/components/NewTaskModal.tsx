import { useAppContext } from '../provider/AppProvider';
import { useThemeContext } from '../provider/ThemeModeProvider';
import { ChevronDown, CrossIcon } from './Icons';

interface showNewTaskModalProps {
  showNewTaskModal?: boolean;
  setShowNewTaskModal?: (value: boolean) => void;
}

const NewTaskModal = ({ showNewTaskModal }: showNewTaskModalProps) => {
  const { darkMode } = useThemeContext();
  const { openNewTaskModal } = useAppContext();
  return (
    <div>
      {showNewTaskModal ? (
        <>
          <div onClick={() => openNewTaskModal()} className='modal-wrapper'>
            {darkMode ? (
              <>
                <form
                  className='form form-dark'
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3>Add New Task</h3>
                  <div className='form-group'>
                    <label
                      htmlFor='title'
                      className='form-label form-label-dark'
                    >
                      Title
                    </label>
                    <div className='form-input'>
                      <input
                        type='text'
                        className='form-control form-control-dark'
                        id='title'
                        name='title'
                        value=''
                        placeholder='e.g. Take coffee break'
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <label
                      htmlFor='description'
                      className='form-label  form-label-dark'
                    >
                      Description
                    </label>
                    <div className='form-input'>
                      <textarea
                        className='form-control  form-control-dark'
                        id='description'
                        name='description'
                        value=''
                        placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
                      ></textarea>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='subtasks' className='form-label'>
                      Subtasks
                    </label>
                    <div className='form-input'>
                      <input
                        type='text'
                        className='form-control  form-control-dark'
                        id='subtasks'
                        name='subtasks'
                        value=''
                        placeholder='e.g. Make coffee'
                      />
                      <span className='form-icon'>
                        <CrossIcon />
                      </span>
                    </div>
                    <div className='form-input'>
                      <input
                        type='text'
                        className='form-control  form-control-dark'
                        id='subtasks'
                        name='subtasks'
                        value=''
                        placeholder='e.g. Drink coffee and smile'
                      />
                      <span className='form-icon'>
                        <CrossIcon />
                      </span>
                    </div>
                    <button
                      className={
                        darkMode
                          ? 'btn-dark-mode btn-modal btn-block'
                          : 'btn-modal btn-light btn-block'
                      }
                      onClick={() => {
                        return console.log('add subtask');
                      }}
                    >
                      + Add New Subtask
                    </button>
                    <div className='form-group'>
                      <label
                        htmlFor='status'
                        className='form-label  form-label-dark'
                      >
                        Status
                      </label>
                      <div className='form-input'>
                        <select
                          className='form-control  form-control-dark'
                          id='status'
                          name='status'
                          value='Todo'
                          placeholder='e.g. Take coffee break'
                        >
                          <option value='todo'>Todo</option>
                          <option value='doing'>Doing</option>
                          <option value='done'>Done</option>
                        </select>
                      </div>
                    </div>
                    <button
                      className='btn-modal btn-dark btn-block'
                      onClick={() => {
                        return console.log('create task');
                      }}
                    >
                      Create Task
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <form className='form' onClick={(e) => e.stopPropagation()}>
                  <h3>Add New Task</h3>
                  <div className='form-group'>
                    <label htmlFor='title' className='form-label'>
                      Title
                    </label>
                    <div className='form-input'>
                      <input
                        type='text'
                        className='form-control'
                        id='title'
                        name='title'
                        value=''
                        placeholder='e.g. Take coffee break'
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='description' className='form-label'>
                      Description
                    </label>
                    <div className='form-input'>
                      <textarea
                        className='form-control'
                        id='description'
                        name='description'
                        value=''
                        placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'
                      ></textarea>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='subtasks' className='form-label'>
                      Subtasks
                    </label>
                    <div className='form-input'>
                      <input
                        type='text'
                        className='form-control'
                        id='subtasks'
                        name='subtasks'
                        value=''
                        placeholder='e.g. Make coffee'
                      />
                      <span className='form-icon'>
                        <CrossIcon />
                      </span>
                    </div>
                    <div className='form-input'>
                      <input
                        type='text'
                        className='form-control'
                        id='subtasks'
                        name='subtasks'
                        value=''
                        placeholder='e.g. Drink coffee and smile'
                      />
                      <span className='form-icon'>
                        <CrossIcon />
                      </span>
                    </div>
                    <button
                      className='btn-modal btn-light btn-block'
                      onClick={() => {
                        return console.log('add subtask');
                      }}
                    >
                      + Add New Subtask
                    </button>
                    <div className='form-group'>
                      <label htmlFor='status' className='form-label'>
                        Status
                      </label>
                      <div className='form-input'>
                        <select
                          className='form-control'
                          id='status'
                          name='status'
                          value='Todo'
                          placeholder='e.g. Take coffee break'
                        >
                          <option value='todo'>Todo</option>
                          <option value='doing'>Doing</option>
                          <option value='done'>Done</option>
                        </select>
                      </div>
                    </div>
                    <button
                      className='btn-modal btn-dark btn-block'
                      onClick={() => {
                        return console.log('create task');
                      }}
                    >
                      Create Task
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default NewTaskModal;
