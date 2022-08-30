import React from 'react';
import '../styles/header.css';
import DropdownLang from './DropdownLang';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-contacts'>
        <p className='header-phone'>
          <a href='tel:+37322838787'>+(373) 22 83-87-87</a>
        </p>
        <div className='header-icons'>
          <span className='header-icon icon-instagram'>
            <a href="#"></a>
          </span>
          <span className='header-icon icon-facebook'>
            <a href="#"></a>
          </span>
          <span className='header-icon icon-whatsapp'>
            <a href="#"></a>
          </span>
          <span className='header-icon icon-viber'>
            <a href="#"></a>
          </span>
        </div>
        <DropdownLang/>
      </div>
      <div className='header-navigation'>
        <div className='header-menu'></div>
        <div className='header-logo'>
          <p className='logo-title'>YOUR LOGO</p>
          <p className='logo-text'>ADDITIONAL TEXT</p>
        </div>
        <button className='header-btn' type='button'>Прайс-лист</button>
      </div>
    </header>
  )
}
