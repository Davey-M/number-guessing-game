const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

let randomNumber = getRandomNumber();

function getRandomNumber() {
	return Math.floor(Math.random() * 25) + 1;
}

let heathersArray = [];
let leahsArray = [];
let dansArray = [];
let davesArray = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));

// GET & POST Routes go here
app.get("/newRandomNumber", (req, res) => {
	randomNumber = getRandomNumber();
	res.sendStatus(201);
});

// // initializing Heather's guesses
// const heathersGuess = 4;

// req is what the client sent to the server
app.post("/guess", (req, res) => {
	// we want to see what the client sent to the server
	console.log(req.body);

	let heathersGuess = Number(req.body.inputParams.heather);
	let leahsGuess = Number(req.body.inputParams.leah);
	let dansGuess = Number(req.body.inputParams.dan);
	let davesGuess = Number(req.body.inputParams.dave);

	let validatedGuesses = {
		heather: compareGuesses(heathersGuess),
		leah: compareGuesses(leahsGuess),
		dan: compareGuesses(dansGuess),
		dave: compareGuesses(davesGuess),
		random: randomNumber,
	};

	heathersArray.push(heathersGuess);
	console.log("heathersArray", heathersArray);

	leahsArray.push(leahsGuess);
	dansArray.push(dansGuess);
	davesArray.push(davesGuess);

	res.send(validatedGuesses);
});
// function to compare random number to Heather's guesses

function compareGuesses(number) {
	console.log("in compareGuesses");

	if (number === randomNumber) {
		return "You got it!";
	} else if (number > randomNumber) {
		return "Too high!";
	} else if (number < randomNumber) {
		return "Too low!";
	}
} // end compareGuesses

// console.log('Compare guesses with Heather guess', compareGuesses(heathersGuess));
// console.log('Random number', randomNumber);

app.get("/arrays", (req, res) => {
	let array = {
		heather: heathersArray,
		leah: leahsArray,
		dan: dansArray,
		dave: davesArray,
	};
	res.send(array);
});

app.listen(PORT, () => {
	console.log("Server is running on port", PORT);
});
