let randomNumber=parseInt(Math.random() * 100 + 1);
const submit =document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guessSlot =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowerHi =document.querySelector('.lowerHi')
const startOver =document.querySelector('.resultParas')
const p=document.createElement('p')

let prevGuess =[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess =parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)

    })  
}

function validateGuess(guess){
    if(isNaN(guess)){
       alert('Please enter a valid number') 
    }else if(guess < 1){
        alert('Please enter a valid number') 
    }
    else if(guess > 100){
        alert('Please enter a valid number') 
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber} &#128517;`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`U guess it right &#128511;`)
        endGame()
    } else if( guess < randomNumber){
        displayMessage(`Number is low`)
    }else if(guess > randomNumber){
        displayMessage(`number is high`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remaining.innerHTML =`${11 - numGuess}`

}

function displayMessage(message){
    lowerHi.innerHTML =`<h2>${message}</h2>`

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =`<h2 id='newGame'>Start new Game &#128511;</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

}





