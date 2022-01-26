import React from 'react';

export default function InitialPage() {
  return (
  <div>
    <h1>Rock, Paper, Scissors</h1>
    <div className='divButtons'>
      <button className='button'>
        Create Account
        <img 
          src={require('./add-user.png')}
          className='createAccount'
          alt='Create Account'/>
      </button>
      
      <button className='button'>
        Login
        <img 
          src={require('./login.png')} 
          className='login'
          alt='Login'/>
      </button>
      
      
      
      <button className='button'>
        Play as Guest 
        <img src={require('./profile.png')} 
        className='guest' 
        alt="Guest"/>
        </button>
      </div>
  </div>
  );
}
