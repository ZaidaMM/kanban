import { Dark, Light } from './Icons';
import ToggleSwitch from './ToggleSwitch';

const ModeToggler = () => {
  return (
    <div className='mode-toggler-container'>
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
