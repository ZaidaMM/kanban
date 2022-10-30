import { useThemeContext } from '../provider/ThemeModeProvider';

const ToggleSwitch = () => {
  const { handleToggleTheme } = useThemeContext();
  return (
    <div className='switch-toggle'>
      <div className='button-check' id='button-check'>
        <input
          type='checkbox'
          className='checkbox'
          name='toggleSwitch'
          id='toggleSwitch'
          onChange={(e) => handleToggleTheme()}
        />
        <span className='switch-btn'></span>
        <span className='layer'></span>
        <span className='layer'></span>
      </div>
    </div>
  );
};
export default ToggleSwitch;
