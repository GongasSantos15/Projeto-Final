import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import { useState } from 'react';

function App() {

  const [DarkMode, setDarkMode] = useState(false)

  return (
    <div className="App">
      <div className={DarkMode ? "darkMode" : "lightMode"}>
        <Homepage DarkMode={DarkMode} setDarkMode={setDarkMode}/>
      </div>
    </div>
  );
}

export default App;
