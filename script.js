var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>what is your name?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>Hello ' + (input + " 😎" ) + '</h1>';                                               
    document.getElementById("input").value = "";              // output response
    document.getElementById("input").placeholder = "cm"  		// clear text box
    question = '<h1>Input your height</h1>';			    	// load next question		
    setTimeout(timedQuestion, 1500);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    // output.innerHTML = '<h1>Your height is ' + (2016 - input) + '</h1>';
    output.innerHTML = '<h1>Your height is ' + ( input + "cm" + "😂" ) + '</h1>';
    document.getElementById("input").value = "";   
    }   
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});