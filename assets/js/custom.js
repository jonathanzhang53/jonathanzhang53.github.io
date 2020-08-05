/* Custom JS
 * Written by Jonathan Zhang for jonathanzhang53.github.io
 */

document.addEventListener("DOMContentLoaded",
	function (event) {
		console.log("This website was made with the help of an audited Web Development Coursera course taught by Yaakov Chaikan. Thanks for viewing! - Jonathan Zhang");
	}
);

function quoteVoice () {
	console.log("Quote sound played!");
	var track = document.getElementById("quote-audio");
	track.play();
}

document.querySelector("#quote").onclick = quoteVoice;
