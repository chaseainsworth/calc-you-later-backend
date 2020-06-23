/******************
 * YOUR CODE HERE *
 ******************/
function calculate(string1, string2, operation) {
  let num1 = parseFloat(string1);
  let num2 = parseFloat(string2);

  if (operation === "+" || operation === "plus" || operation === "added to") {
      return num1 + num2;
  } else if (operation === "-" || operation === "minus" || operation === "subtracted from") {
      return num1 - num2;
  } else if (operation === "x" || operation === "X" || operation === "times" || operation === "multiplied by") {
      return num1 * num2;
  } else if (operation === "/" || operation === "divided by") {
      return num1 / num2;
  } else if (operation === "%" || operation === "modulus" || operation === "mod") {
      return num1 % num2;
  } else {
    return `Sorry, that's not a mathematical operation!`
  }
  
}

 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;