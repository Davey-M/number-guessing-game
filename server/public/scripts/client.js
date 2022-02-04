$(document).ready(handleReady);

function handleReady() {
	console.log("jquery is loaded!");
	$("#submit-button").on("click", getNumbers);
}

function getNumbers() {
	let heatherGuess = $("#heather-guess").val();
	let leahGuess = $("#leah-guess").val();
	let danGuess = $("#dan-guess").val();
	let daveGuess = $("#dave-guess").val();
	console.log("heather guess is", heatherGuess);
	console.log("leah guess is", leahGuess);
	console.log("dan guess is", danGuess);
	console.log("dave guess is", daveGuess);

	let settings = {
		method: "POST",
		url: "/guess",
		data: {
			inputParams: {
				heather: heatherGuess,
				leah: leahGuess,
				dan: danGuess,
				dave: daveGuess,
			},
		},
	};

	$.ajax(settings)
		.then(function (response) {
			console.log(response);
			getPreviousGuesses();
			renderLastResult(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

function getPreviousGuesses() {
	$.ajax({
		method: "GET",
		url: "/arrays",
	})
		.then(function (res) {
			console.log(res);
			addGuesses(res);
			countClicks(res.heather);
		})
		.catch(function (error) {
			console.log(error);
		});
}
function addGuesses(guesses) {
	$("#heather-row").empty();
	$("#leah-row").empty();
	$("#dan-row").empty();
	$("#dave-row").empty();

	for (let number of guesses.heather) {
		$("#heather-row").append(`${number} `);
	}
	for (let number of guesses.leah) {
		$("#leah-row").append(`${number} `);
	}
	for (let number of guesses.dan) {
		$("#dan-row").append(`${number} `);
	}
	for (let number of guesses.dave) {
		$("#dave-row").append(`${number} `);
	}
}

function renderLastResult(response) {
	$("#heather-result").empty();
	$("#leah-result").empty();
	$("#dan-result").empty();
	$("#dave-result").empty();

	$("#heather-result").text(`${response.heather}`);
	$("#leah-result").text(`${response.leah}`);
	$("#dan-result").text(`${response.dan}`);
	$("#dave-result").text(`${response.dave}`);

	if (response.heather === "You got it!") {
		$("#winner-container").text("Heather WINS!!!");
	}

	if (response.heather === "You got it!") {
		$("#winner-container").text("Heather WINS!!!");
	}

	if (response.heather === "You got it!") {
		$("#winner-container").text("Heather WINS!!!");
	}

	if (response.heather === "You got it!") {
		$("#winner-container").text("Heather WINS!!!");
	}
}

function countClicks(array) {
	let clicks = array.length;
	console.log("clicks are", clicks);
	$("#click-count").text(clicks);
}
