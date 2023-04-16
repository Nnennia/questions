// Write a JavaScript program where the program takes a random integer between 1 to 10,
// the user is then prompted to input a guess number.
// If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched". 

function guessRandomNumber(){
    let number = Math.floor(Math.random() * 10);
    let guess = prompt("Guess the number between 1 and 10")
    if (guess === number){
        console.log("Good Work")
    }
    else{
        console.log(`Not Matched! The number was ${number}`)
    }
}
guessRandomNumber()
