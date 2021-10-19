import { React, useState } from 'react';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import logo from '../assets/shared/desktop/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    isSidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  };
  return (
    <>
      <nav className='nav-container'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <button type='button' className='nav-toggle' onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className='nav-links'>
          <ul>
            {links.map((item) => {
              return (
                <li key={item.id} className='nav-link'>
                  <Link to={item.url}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <ul className='sidebar-links'>
          {links.map((item) => {
            return (
              <li key={item.id} className='sidebar-link'>
                <Link to={item.url}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
