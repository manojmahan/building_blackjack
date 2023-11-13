let playername ="Per"
let keys = 135
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById('cards-el')

let player = {
    name: playername,
    chips: keys
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getrandom(){
    let randomnumber = Math.floor(Math.random()*13)+1
    if (randomnumber===1){
        return 11
    }
    else if (randomnumber>=11){
        return 10
    }

    return randomnumber
}


function startGame(){
    isAlive = true
    let firstCard = getrandom()
    let secondCard = getrandom()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

function renderGame(){
    // 3. Render the sum on the page using this format -> "Sum: 14"
    cardsEl.textContent = "Cards:"
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent +=" "+cards[i] 
    }
    sumEl.textContent = "Sum: "+sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    // 3. Log it out!
    messageEl.textContent=message
}

function newCard() {
    if (isAlive && hasBlackJack==false){

        let card = getrandom()
        sum +=card
        cards.push(card)

    renderGame()
    }
    else if (cards.length>0){
        window.alert("Can't add new card")
    }
    else{
        window.alert("Please start the Game first")
    }
    
    
}



