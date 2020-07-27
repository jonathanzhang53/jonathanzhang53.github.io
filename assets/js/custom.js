/* Custom JS
 * Written by Jonathan Zhang for jonathanzhang53.github.io
 */

document.addEventListener("DOMContentLoaded",
	function (event) {
		console.log("Website was made from an audited WebDev Coursera course. Bootstrap 4 and beginner. Thanks for viewing! - Jonathan Zhang");
	}
);

function quoteVoice () {
	console.log("Quote sound played!");
	var track = document.getElementById("quote-audio");
	track.play();
}

document.querySelector("#quote").onclick = quoteVoice;