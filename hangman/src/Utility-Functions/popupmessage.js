export const checkResult = (correctLetters, incorrectLetters, selectedWord) => {
let winStatus = 'win'

selectedWord.split("").forEach(letter => {
    if(!correctLetters.includes(letter)){
        winStatus = ""
    }

    if(incorrectLetters.length === 9){
        winStatus = "lose"
    }
});
return winStatus
}

/*function used to declare a winStatus
    first we split the word and iterate through each letter
    first if - if correctLetters does NOT include one of the words letters, doesnt mean
    we have lost, could also be that we haven't guessed it yet -> winStatus as ""
    second if - if incorrectLetters == 9, that means we have guessed incorrectly 9 times
    therefore we have filled the hangman -> winStatus = "lose"*/