import React, {useEffect} from 'react'
import { checkResult } from '../Utility-Functions/popupmessage';

const Popup = ({correctLetters, incorrectLetters, selectedWord, setPlayable, playAgain}) => {
    
    let finalMessage = "";
    let finalMessageRevealWord = "";
    let playable = true;

    if(checkResult(correctLetters, incorrectLetters, selectedWord) === "win"){
        finalMessage = `Congratulations, you found the word!`
        playable = false
    } else if (checkResult(correctLetters, incorrectLetters, selectedWord) === "lose") {
        finalMessage = `Better luck next time!`
        finalMessageRevealWord = `The word was ${selectedWord}!`
        playable = false
    }
    useEffect(() => setPlayable(playable));

    return(
    <div className="popup-container">
        <div className="popup-message">
            <h3>{finalMessage}</h3>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick={playAgain} className="popup-button">Play Again</button>
        </div>
    </div>
    )
}

export default Popup

/*
access to checkResult function so can check if win or lose 
initial messages set to ""
if win - give message and playable now false since game over
if lose - give message and playable now false since game over */