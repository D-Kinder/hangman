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

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters((currentLetters) => {
                return [...currentLetters, letter]
              });
            } 
          } else {
            if (!incorrectLetters.includes(letter)) {
              setIncorrectLetters((currentIncorrectLetters) => {
                return [...currentIncorrectLetters, letter]
              })
            } 
          }
        }
      }
    window.addEventListener('keydown', handleKeydown);

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
