const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

let randomNumber = getRandomNumber();

function getRandomNumber() {
    return Math.floor(Math.random() * 25) + 1;
}

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/newRandomNumber', (req, res) => {
    randomNumber = getRandomNumber();
    res.sendStatus(201);
})

// // initializing Heather's guesses
// const heathersGuess = 4;

// req is what the client sent to the server
app.post('/guess', (req,res) => {

    // we want to see what the client sent to the server
    console.log(req.body);

    res.end();
})
// function to compare random number to Heather's guesses

function compareGuesses(number){
    console.log('in compareGuesses');
    
    if (number === randomNumber) {
      return 'You got it!';
    } else if (number > randomNumber) {
      return 'Too high!';
    } else if (number < randomNumber) {
      return 'Too low!';
    } 
} // end compareGuesses



// console.log('Compare guesses with Heather guess', compareGuesses(heathersGuess));
// console.log('Random number', randomNumber);


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
