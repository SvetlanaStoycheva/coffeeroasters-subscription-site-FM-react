import React from 'react';
import { links, socialLinks } from '../utils/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className='sidebar-links'>
        {links.map((item) => {
          return (
            <li key={item.id} className='sidebar-link '>
              <Link className='single-sidebar-link' to={item.url}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='social-links'>
        {socialLinks.map((item) => {
          return (
            <button key='item.id' type='button'>
              <Link to={item.url}>{item.icon}</Link>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
