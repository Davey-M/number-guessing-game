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

	$.ajax(settings).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}
