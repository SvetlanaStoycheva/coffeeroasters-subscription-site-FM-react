import React from 'react';
import { links, socialLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo-footer.svg';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-left-side'>
        <img src={logo} alt='' />
        <ul className='footer-links'>
          {links.map((item) => {
            return (
              <li key={item.id} className=' footer-link'>
                <Link className='single-footer-link' to={item.url}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=' footer-social-links'>
        {socialLinks.map((item) => {
          return (
            <button key={item.id} type='button' className='footer-social-link'>
              <Link className='footer-social-icon' to={item.url}>
                {item.icon}
              </Link>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
