import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/icon/logo.svg';
import Portal from '../Portal/Portal';
import ModalAuth from '../ModalAuth/ModalAuth';

const Header = () => {

  const [isLoginModal, setIsLoginModal] = useState(false);

  const toggleLoginModalOpen = () => {
    setIsLoginModal(!isLoginModal);
  }

  return (
    <header className='store-header'>
      <div className='container'>

        <div className='store-header__wrapper'>

          <Link to="/">
            <img src={logo} alt='logo'/>
          </Link>

          <label className='store-header__address'>
            <input 
              type='text'
              className='input store-header__input-address'
              placeholder='Адреса доставки'
            />
          </label>

          <div className='store-header__buttons'>
            <span className='store-header__user-name'>Test name</span>

            <button onClick={toggleLoginModalOpen} className='button button-primary button-auth'>
              <span className='button-auth-svg'></span>
              <span className='button-text'>Увійти</span>
            </button>
          </div>
        </div>
      </div>

      {isLoginModal && <Portal><ModalAuth onClose={toggleLoginModalOpen} /></Portal>}
    </header>
  )
}

export default Header;