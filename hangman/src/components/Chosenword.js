import React from 'react'

const Chosenword = ({selectedWord, correctLetters}) => {
    return (
    <div className="word">
        {selectedWord.split("").map((letter, index) => {
            return (
            <span key={index} className="letter">
            {correctLetters.includes(letter) ? letter : ""}
            </span>
            )
        })}
    </div>
    )
}

export default Chosenword

/*
props - selectedWord - so we can display the random word that was selected
props - correctLetters - check correctLetters against word and display any letters that are present*/ 