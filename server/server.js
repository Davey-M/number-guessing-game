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

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
