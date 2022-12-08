window.onLoadActions()

function onLoadActions() {
for (let number = 1; number <= 76; number ++) {
    let numberNode = document.createElement('div')
    numberNode.innerText = number
    numberNode.classList.add('bingoNumber')
    document.getElementById('bingo-numbers-container').appendChild(numberNode)
    numberNode.addEventListener("click", onNumberClick)
}
}

function onNumberClick (event) {
    let clickedNumberNode = event.target
//    console.log(clickedNumberNode)
clickedNumberNode.classList.add('selectedNumber')
}

function generateRandomNumber() {
    let min = 1
    let max = 76
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNumber)
    return randomNumber
  }
  
  function generateRandomNumberDisplay() {
    let random = generateRandomNumber()
    let numberNode = document.querySelectorAll(".bingoNumber")[random - 1]
    console.log(numberNode)
    numberNode.style.background = "grey"
  }   



/*
function generateRandomNumber() {
    let min = 1
    let max = 76
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
}
*/

/*
function generateRandomNumberDisplay(num) {
    let numberNode = document.querySelectorAll('randomNumber')
    console.log(generateRandomNumberDisplay)

//console.log(numberNode)
// numberNode.classList.add("randomNumber")
}
*?

/*
function generateRandomNumberDisplay() {
    let random = generateRandomNumber()
    let bingoButtonOutput = document.getElementById('')
    bingoButtonOutput.classList.add('random')
    document.getElementById('bingoButtonOutput').appendChild(random)
}


function onBingoButtonClick (event) {
    let clickedButtonNode = event.target
    clickedButtonNode.addEventListener('generateRandomNumber')
}
*/