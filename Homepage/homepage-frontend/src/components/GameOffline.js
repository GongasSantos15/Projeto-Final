import React, { useState } from 'react';
export default function GameOffline() {

    // Definir um state com a escolha do utilizador, em que o mesmo começa com uma string vazia
    const [userChoice, setUserChoice] = useState("")

    // Definir a escolha do computador, em que o mesmo começa com uma string vazia
    const [computerChoice, setComputerChoice] = useState("")

    // Definir as opções de escolha, no caso, pedra, papel e tesoura num array
    const choices = [
      {text: "Rock"}, 
      {text: "Paper"}, 
      {text: "Scissors"}]

    // Esta função serve para ao clicar no botão, a escolha do utilizador muda consoante o valor do botão clicado
    function handleClick(value) {
        setUserChoice(value)
        CPUChoice()
    }

    // Esta função serve para fazer com que a escolha do computador seja aleatória
    function CPUChoice() {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)]
      setComputerChoice(randomChoice)
    }

    // Esta função serve para verificar o resultado, consoante as escolhas, tanto do utilizador, como do computador
    function result() {
      if (userChoice === "Rock" && computerChoice === "Rock") {
        return <h2 className='tie'>It's a tie! =/</h2>
      } else if (userChoice === "Rock" && computerChoice === "Paper") {
        return <h2 className='lose'>You Lose! =(</h2>
      } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        return <h2 className='win'>You Win! =)</h2>
      }
      
      if (userChoice === "Paper" && computerChoice === "Rock") {
        return <h2 className='win'>You Win! =)</h2>
      } else if (userChoice === "Paper" && computerChoice === "Paper") {
        return <h2 className='tie'>It's a tie! =/</h2>
      } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        return <h2 className='lose'>You Lose! =(</h2>
      }

      if (userChoice === "Scissors" && computerChoice === "Rock") {
        return <h2 className='lose'>You Lose! =(</h2>
      } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        return <h2 className='win'>You Win! =)</h2>
      } else if (userChoice === "Scissors" && computerChoice === "Scissors") {
        return <h2 className='tie'>It's a tie! =/</h2>
      }
    }
    
  return (
  <div>
    <p><span className='player'>Player</span> choice is: {userChoice}</p>
    <p><span className='computer'>Computer</span> choice is: {computerChoice}</p>
    <p>{result()}</p>
    

    {/* <button onClick={() => handleClick("Rock")}>Rock</button>
    <button onClick={() => handleClick("Paper")}>Paper</button>
    <button onClick={() => handleClick("Scissors")}>Scissors</button> */}

    {/* Mapear o array para selecionar a escolha do utilizador de acordo com o botão clicado, e definir uma key própria para cada um deles */}
    {choices.map((e, i) => <button className='button' key={i} onClick={() => handleClick(e.text)}>{e.text}</button>)}
  </div>
  );
}
