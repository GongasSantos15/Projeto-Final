import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import GameOffline from './GameOffline';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router";


export default function Homepage({DarkMode, setDarkMode}) {
    
const [fullscreen, setFullscreen] = useState(false)

  return (
  <>
    <h1 className='title'>R{<img className='imgTitle' src={require('./stone.png')}></img>}ck, P{<img className='imgTitle' src={require('./plane.png')}></img>}per, S{<img className='imgScissors' src={require('./cut.png')}></img>}issors</h1>
    
    {/* Navigation Bar */}

    <ul className='nav'>
        <li>Home</li>
        <li>Rules</li>
        <li>About</li>

        <div className='things'>
          {/* Dark Mode Toggle */}
          <li className='toggle'><DarkModeToggle className='darkMode' onChange={() => setDarkMode(!DarkMode)} checked={DarkMode} size={45} /></li>
          
          {/* Profile Menu */}
          <div>
              <img src={require('./profile.png')}></img>
          </div>
        </div>
    </ul>

    {/* <div className={['game'].concat(fullscreen ? ['fullscreen'] : []).join(' ')} onClick={() => setFullscreen(f => !f)}> */}
       <GameOffline className="gameOffline" />
    {/* </div> */}

  </>
  )
}
