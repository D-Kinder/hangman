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