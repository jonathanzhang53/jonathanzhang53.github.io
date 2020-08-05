/* Custom JS
 * Written by Jonathan Zhang for jonathanzhang53.github.io
 */

document.addEventListener("DOMContentLoaded",
	function (event) {
		console.log("This website was made with the help of an audited Web Development Coursera course taught by Yaakov Chaikan. Thanks for viewing! - Jonathan Zhang");
		
		// get the form elements defined in the form HTML
		var form = document.getElementById("my-form");
    	var button = document.getElementById("my-form-button");
    	var status = document.getElementById("my-form-status");

    	// success and error functions after form submission
	    function success() {
	      form.reset();
	      button.style = "display: none ";
	      status.innerHTML = "<a style = 'color:green'>Thanks!</a>";
	    }

	    function error() {
	      status.innerHTML = "<a style = 'color:red'>Check to make sure all fields are filled in correctly.</a>";
	    }

	    // handle the form submission event
	    form.addEventListener("submit", function(ev) {
	      ev.preventDefault();
	      var data = new FormData(form);
	      ajax(form.method, form.action, data, success, error);
	    });
	});
  
// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
};

// quote sound functionality
function quoteVoice () {
	console.log("Quote sound played!");
	var track = document.getElementById("quote-audio");
	track.play();
}
document.querySelector("#quote").onclick = quoteVoice;
