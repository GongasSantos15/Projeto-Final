import React, { useState } from 'react';
import styles from './GameOffline.module.css'

export default function GameOffline() {


    // Definir um state com a escolha do utilizador, em que o mesmo começa com uma string vazia
    const [userChoice, setUserChoice] = useState({})

    // Definir a escolha do computador, em que o mesmo começa com uma string vazia
    const [computerChoice, setComputerChoice] = useState({})

    const [versus, setVersus] = useState()

    // Definir as opções de escolha, no caso, pedra, papel e tesoura num array
    const choices = [
      {
        text: "Rock", 
        img: <img src={require('./rocks.png')} />
      }, 
      
      {
        text: "Paper", 
        img: <img src={require('./paper.png')} />
      }, 
      
      {
        text: "Scissors", 
        img: <img src={require('./scissors.png')} />
      }
    ]

    // Esta função serve para ao clicar no botão, a escolha do utilizador muda consoante o valor do botão clicado
    function handleClick(value) {
        setUserChoice(value)
        setVersus(<img src={require('./versus.png')} />)
        CPUChoice()
    }

    // Esta função serve para fazer com que a escolha do computador seja aleatória
    function CPUChoice() {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)]
      setComputerChoice(randomChoice)
    }

    // Esta função serve para verificar o resultado, consoante as escolhas, tanto do utilizador, como do computador
    function result() {
      console.log(userChoice)
      console.log(computerChoice)
      if (userChoice.text === "Rock" && computerChoice.text === "Rock") {
        return <h2 className={styles.tie}>It's a tie! =/</h2>
      } else if (userChoice.text === "Rock" && computerChoice.text === "Paper") {
        return <h2 className={styles.lose}>You Lose! =(</h2>
      } else if (userChoice.text === "Rock" && computerChoice.text === "Scissors") {
        return <h2 className={styles.win}>You Win! =)</h2>
      }
      
      if (userChoice.text === "Paper" && computerChoice.text === "Rock") {
        return <h2 className={styles.win}>You Win! =)</h2>
      } else if (userChoice.text === "Paper" && computerChoice.text === "Paper") {
        return <h2 className={styles.tie}>It's a tie! =/</h2>
      } else if (userChoice.text === "Paper" && computerChoice.text === "Scissors") {
        return <h2 className={styles.lose}>You Lose! =(</h2>
      }

      if (userChoice.text === "Scissors" && computerChoice.text === "Rock") {
        return <h2 className={styles.lose}>You Lose! =(</h2>
      } else if (userChoice.text === "Scissors" && computerChoice.text === "Paper") {
        return <h2 className={styles.win}>You Win! =)</h2>
      } else if (userChoice.text === "Scissors" && computerChoice.text === "Scissors") {
        return <h2 className={styles.tie}>It's a tie! =/</h2>
      }
    }
    
  return (
  <div className='game'>
    <p className={styles.player}>Player </p>
    <p className={styles.computer}>Computer</p>
    <p className={styles.userChoice}>{userChoice.img}</p>
    <p className={styles.versus}>{versus}</p>
    <p className={styles.CPUChoice}>{computerChoice.img}</p>
    <p className={styles.result}>{result()}</p>
    

    {/* <button onClick={() => handleClick("Rock")}>Rock</button>
    <button onClick={() => handleClick("Paper")}>Paper</button>
    <button onClick={() => handleClick("Scissors")}>Scissors</button> */}

    {/* Mapear o array para selecionar a escolha do utilizador de acordo com o botão clicado, e definir uma key própria para cada um deles */}
    <div className='choices'>
      {choices.map((e, i) => <div className={styles.button} key={i} onClick={() => handleClick(e)}>{e.img}</div>)}
    </div>
  </div>
  );
}
