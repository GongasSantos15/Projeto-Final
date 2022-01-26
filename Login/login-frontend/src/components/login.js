import React, { useState } from 'react';

export function Login() {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();
}

  return (
  <div className='login'>
      <h1>Sign in to play the game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br></br>
          <input type="text" placeholder='Introduza o seu email...' value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
            <label>Password</label><br></br>
            <input type="password" placeholder='Introduza a sua password...' value={password} onChange={e => setPassword(e.target.value)} />
            <p><a href="">Forgot your password? Click here</a></p>
        </div>
        <div>
            <button>Sign in</button>
        </div>
      </form>
  </div>
 
  );
}