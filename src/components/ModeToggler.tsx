import { useThemeContext } from '../provider/ThemeModeProvider';
import { Dark, Light } from './Icons';
import ToggleSwitch from './ToggleSwitch';

const ModeToggler = () => {
  const { darkMode } = useThemeContext();
  return (
    <div
      className={
        darkMode
          ? 'mode-toggler-container mode-toggler-container-dark'
          : 'mode-toggler-container'
      }
    >
      <span className='mode-icon'>
        <Light />
      </span>
      <ToggleSwitch />
      <span className='mode-icon'>
        <Dark />
      </span>
    </div>
  );
};
export default ModeToggler;
