import {React, useState, useEffect } from 'react'
import Header from './components/Header'
import Figure from './components/Figure'
import Wrongletters from './components/Wrongletters'
import Chosenword  from './components/Chosenword'
import Popup from './components/Popup'
import './App.css';

const possibleWords = ['argument', 'commemorate', 'overlook',
'necklace',
'calendar',
'detective',
'costume',
'differ',
'constellation',
'glacier',
'relation',
'conviction',
'conclusion',
'killer',
'reward',
'appreciate',
'application',
'create',
'element',
'ancestor',
'sector',
'divide',
'offensive',
'teenager',
'writer',
'retire',
'brainstorm',
'freedom',
'bathtub',
'physical',
'bomber',
'jurisdiction',
'critic',
'failure',
'supply',
'personality',
'embryo',
'sister',
'rebellion',
'bucket',
'constant',
'orange',
'information',
'council',
'foster',
'clothes',
'slogan',
'period',
'comprehensive',
'deputy']
let selectedWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]

function App() {
  const [correctLetters, setCorrectLetters] = useState([])
  const [incorrectLetters, setIncorrectLetters] = useState([])
  const [playable, setPlayable] = useState(true)

  //states created here so they can be passed down to the components that require them
  //correctLetters links to the word against with any letters that have been guessed correctly
  //incorrectLetters links to the stickman and container showing incorrect guesses.
  //both can also be used to determine whether game is won or lost
  //setPlayable used to reset the game after game completion

  useEffect(() => {
    const handleKeydown = (event) => {
      // key - the character that is pressed
      //keyCode - the correspong code, use this so only accept letters (between 65 & 90)
      const { key, keyCode } = event
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          // if letter is in selectedWord and NOT already in correctLetters, add it to correctLetters then SET
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters((currentLetters) => {
                return [...currentLetters, letter]
              });
            } 
            // if letter is NOT in incorrectLetters, then add it to incorrectLetters and SET
          } else {
            if (!incorrectLetters.includes(letter)) {
              setIncorrectLetters((currentIncorrectLetters) => {
                return [...currentIncorrectLetters, letter]
              })
            } 
          }
        }
      }
      //add eventListener upon keydown, pass in func
    window.addEventListener('keydown', handleKeydown);
      // remove the eventListener after it has been used so we don't have stacks and stacks of them, slowing the page down
      //[correctLetters, incorrectLetters, playable] there as DEPENDENCIES, useEffect will run everytime one of these is updated
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [correctLetters, incorrectLetters, playable])

  const playAgain = () => {
    setPlayable(true)
    setCorrectLetters([])
    setIncorrectLetters([])
    selectedWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]
  }

  return (
    <div className="App">
      <Header />
     <div className="game-container">
       <Figure incorrectLetters={incorrectLetters}/>
     <Wrongletters incorrectLetters={incorrectLetters}/>
     <Chosenword selectedWord={selectedWord} correctLetters={correctLetters}/>
     </div>
     <Popup playAgain ={playAgain} correctLetters={correctLetters} incorrectLetters={incorrectLetters} selectedWord={selectedWord} setPlayable={setPlayable}/>
    </div>
  );
}



export default App;
