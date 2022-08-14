import React from 'react'

const Figure = ({incorrectLetters}) => {

const incorrectGuesses = incorrectLetters.length

return (
      <svg height="250" width="200" className="figure-container">
        
        {incorrectGuesses > 0 && <line x1="20" y1="230" x2="100" y2="230"/>}
        {incorrectGuesses > 1 && <line x1="60" y1="20" x2="60" y2="230"/>}
        {incorrectGuesses > 2 && <line x1="60" y1="20" x2="140" y2="20"/>}
        {incorrectGuesses > 3 && <line x1="140" y1="20" x2="140" y2="50"/>}
        {incorrectGuesses > 4 && <circle cx="140" cy="70" r="20" />}
        {incorrectGuesses > 5 && <line x1="140" y1="90" x2="140" y2="150" />}
        {incorrectGuesses > 6 && <line x1="140" y1="120" x2="120" y2="100" />}
        {incorrectGuesses > 7 && <line x1="140" y1="120" x2="160" y2="100" />}
        {incorrectGuesses > 8 && <line x1="140" y1="150" x2="120" y2="180" />}
        {incorrectGuesses > 9 && <line x1="140" y1="150" x2="160" y2="180" />}

      </svg>
)
}

export default Figure

/*
Each line is a section of the hangman
if statement dealt with in-line, each one personalised so adds them in order
need access to the incorrectLetters so we can see how many lives lost */