import { React, useState } from 'react';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
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
              <img className='logo-img' src={logo} alt='' />
            </Link>
          </div>
          <button type='button' className='nav-toggle' onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div>
          <ul className='nav-links'>
            {links.map((item) => {
              return (
                <li key={item.id} className='nav-link'>
                  <Link className='single-nav-link' to={item.url}>
                    {item.text}
                  </Link>
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
              <li
                key={item.id}
                onClick={() => setSidebarOpen(false)}
                className='sidebar-link '
              >
                <Link className='single-sidebar-link' to={item.url}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className='btn' onClick={() => setSidebarOpen(false)}>
          <Link className='btn' to='/plan'>
            Create your plan
          </Link>
        </button>
      </aside>
    </>
  );
};

export default Navbar;
