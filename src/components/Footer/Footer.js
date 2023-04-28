import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/icon/logo.svg';
import SocialIcons from '../../assets/img/social';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-block'>

          <Link to="/" className='logo footer-logo'>
            <img src={logo} alt='logo'/>
          </Link>

          <nav className='footer-nav'>
            <a href='#' className='footer-link'>Ресторанам</a>
            <a href='#' className='footer-link'>Кур'єрам</a>
            <a href='#' className='footer-link'>Прес-центр</a>
            <a href='#' className='footer-link'>Контакти</a>
          </nav>

          <div className='social-links'>
            <a href='#' target='_blank' className='social-link'>
              <SocialIcons.instagram />
            </a>

            <a href='#' target='_blank' className='social-link'>
              <SocialIcons.fb />
            </a>

            <a href='#' target='_blank' className='social-link'>
              <SocialIcons.twitter />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;