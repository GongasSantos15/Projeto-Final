import logo from './logo.svg';
import './App.css';
import { Login } from './components/login';
import { useState } from 'react';

function App() {
  
const [token, setToken] = useState()

if(!token) {
  return <Login setToken={setToken} />
}

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
