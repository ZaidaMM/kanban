import { HideSidebar } from './Icons';

const SidebarToggler = () => {
  return (
    <div className='sidebar-toggler'>
      <div className='hide-sidebar-icon'>
        <span className='icon'>
          <HideSidebar />{' '}
        </span>{' '}
        Hide Sidebar
      </div>
    </div>
  );
};
export default SidebarToggler;
