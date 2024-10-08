import './sidebar.css'
import { sidebar } from '../../../assets/webData/sidebar'; // Assuming the JSON data is exported from a separate file
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='sidebarCantainer'>
      <div>
        <img src='/logo.png' alt='lgo' width={250} className='sidebarlogo' />
      </div>
      <div className='ulCantainer '>
        {sidebar.sidebarItems.map((item, index) => (
          <div key={index} className="sidebar-item">
            <Link to={item.link} className="sidebar-link">
              <span className='mx-2 ' >{item?.icon}</span>
              <span>{item.text}</span>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

