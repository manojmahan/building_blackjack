// 1. Create two variables, firstCard and secondCard. 
let firstCard=6
let secondCard=9
let sum = firstCard+secondCard +6
let hasablackjack = false

if (sum <21){
    console.log("Do you want to draw a new card? 🙂")
}
else if (sum ===21){
    console.log("You have got the blackjack 🎉")
    hasablackjack = true
}
else {
    console.log("You are out of the game 😭")
}
console.log(hasablackjack)