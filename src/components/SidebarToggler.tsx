import { HideSidebar } from './Icons';

const SidebarToggler = () => {
  return (
    <div className='sidebar-toggler nav-link'>
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
