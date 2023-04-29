import React, { useState } from 'react';

const ModalAuth = ({ onClose }) => {

  const [loginData, setLoginData] = useState({
    login: '',
    password: ''
  });

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('loginData', JSON.stringify(loginData))
  }

  return (
    <div className='modal-auth' onClick={onClose}>
      <div className='modal-dialog modal-dialog-auth' onClick={e => e.stopPropagation()}>
        <button className='close-auth' onClick={onClose}>&times;</button>
        <form onSubmit={handleSubmit}>
          <fieldset className='modal-body'>
            <legend className='modal-title'>Authorisation</legend>

            <label className='label-auth'>
              <span>Login:</span>
              <input value={loginData.login} onChange={handleInputChange} type='text' name='login'/>
            </label>

            <label className='label-auth'>
              <span>Password:</span>
              <input value={loginData.password} onChange={handleInputChange} type='password' name='password'/>
            </label>

          </fieldset>

          <div className='modal-footer'>
            <div className='footer-buttons'>
              <button className='button button-primary button-login'>Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalAuth;