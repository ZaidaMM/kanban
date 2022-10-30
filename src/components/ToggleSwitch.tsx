const ToggleSwitch = () => {
  return (
    <div className='switch-toggle'>
      <div className='button-check' id='button-check'>
        <input type='checkbox' className='checkbox' />
        <span className='switch-btn'></span>
        <span className='layer'></span>
        <span className='layer'></span>
      </div>
    </div>
  );
};
export default ToggleSwitch;
