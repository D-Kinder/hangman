import React from 'react'

const Wrongletters = ({incorrectLetters}) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {incorrectLetters.length > 0 && <p>Wrong Letters</p>}
                {incorrectLetters.map((letter, index) => {
                    return <span key={index}>{letter + " "}</span>
                })}
            </div>
        </div>
    )
}

export default Wrongletters

/*
Acess to incorrectLetters needed so we can display which ones they are
<p> just title saying wrong letters if there are any
.map used to print each letter in the array, with space after for easier visuals */