

// **** Solution to using document write to print text
let name = prompt("What's your name?");
let allowedText = checkName(name);
document.writeln(allowedText);


// ** Aother soluion
//document.writeln(checkName(prompt("What's your name?")));

// *** try it out with html
// let name = prompt("What's your name?");
// let allowedText = checkName(name);
// document.writeln("<h2 class=allowedText>" + allowedText +"<h2>");

// HOMEWORK Use if-else to show a different style for each text.
// FILL IN HERE

function checkName(name) {
    if (name === "Oliver"){
        return "permitted";
    } else {
        return "denied";
    }
}

