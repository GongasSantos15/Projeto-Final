import React from 'react'
import './App.css';


export function Rules(){
    return (
    <div>     
                 
    <h1 className='title'style={{color: "Black"}}>What are the rules of RPS?</h1>
    <p className='text' style={{color: "Black"}}>Although the game has a lot of complexity to it, the rules to play it are pretty simple.
The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules:</p>
    <ul>
       <li className='rules'><b>Rock wins against scissors.</b></li>
       <li className='rules'><b>Scissors win against paper.</b></li>
       <li className='rules'><b>Paper wins against rock.</b></li>
    </ul>
    </div>
    )
}
