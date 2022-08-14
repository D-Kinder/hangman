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