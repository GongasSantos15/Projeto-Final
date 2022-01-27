import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import GameOffline from './GameOffline';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router";


export default function Homepage({DarkMode, setDarkMode}) {
    
const [profileMenu, setProfileMenu] = useState(null);
const [rewardsMenu, setRewardsMenu] = useState(null)
const [fullscreen, setFullscreen] = useState(false)

// Menu Rewards
const handleCloseRewardsMenu = () => {
  setRewardsMenu(null);
}

const handleClickRewardsMenu = (e) => {
  setRewardsMenu(e.currentTarget);
} 

// Menu Profile
const handleCloseProfileMenu = () => {
  setProfileMenu(null);
};

const handleClickProfileMenu = (e) => {
  setProfileMenu(e.currentTarget);
}

  return (
  <>
    <h1 className='title'>R{<img className='imgTitle' src={require('./stone.png')}></img>}ck, P{<img className='imgTitle' src={require('./paper-plane.png')}></img>}per, S{<img className='imgScissors' src={require('./cut.png')}></img>}issors</h1>
    
    {/* Navigation Bar */}
    <ul className='nav'>
        <li><a href="">Home</a></li>
        <li><a href="">Skins</a></li>
        <li><a href="">Tournaments</a></li>
        <li><a href="">Leaderboards</a></li>
        <li><a href="">Rules</a></li>
        <li><a href="">About</a></li>

        {/* Rewards */}
        <div className='rewards'>
          <Button
          aria-controls='simple-menu'
          aria-haspopup="true"
          onClick={handleClickRewardsMenu}
          >
            <img src={require('./medal.png')}></img>
          </Button>
            <Menu
            className="rewardsMenu"
            keepMounted
            profileMenu={rewardsMenu}
            onClose={handleCloseRewardsMenu}
            open={Boolean(rewardsMenu)}
            >
              <MenuItem onClick={handleCloseRewardsMenu}>Collect</MenuItem>
            </Menu>
        </div>

        {/* Dark Mode Toggle */}
        <li className='toggle'><DarkModeToggle className='darkMode' onChange={() => setDarkMode(!DarkMode)} checked={DarkMode} size={45} /></li>
        
        {/* Profile Menu */}
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClickProfileMenu}
          >
            <img src={require('./profile.png')}></img>
          </Button>
          <Menu
          className="profileMenu"
            keepMounted
            profileMenu={profileMenu}
            onClose={handleCloseProfileMenu}
            open={Boolean(profileMenu)}
          >
            <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
            <MenuItem onClick={handleCloseProfileMenu}>Settings</MenuItem>
            <MenuItem onClick={handleCloseProfileMenu}>Logout</MenuItem>
          </Menu>
        </div>
    </ul>

    {/* <div className={['game'].concat(fullscreen ? ['fullscreen'] : []).join(' ')} onClick={() => setFullscreen(f => !f)}> */}
       <GameOffline className="gameOffline" />
    {/* </div> */}

  </>
  )
}
