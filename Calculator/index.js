// Calculator

let addition, subtraction, division, multiplication, modulus;
let a, b, subtractor, subtrahend, dividend, divisor;
let info = prompt(" Enter add for Addition\n Enter sub for Subtraction\n Enter mul for Multiplication\n Enter div for Division\n Enter mod for Modulus");

// Addition
if (info === "add" || info === "ADD" || info === "Add") {
  a = Number(prompt("Enter first number a"));
  b = Number(prompt("Enter second number b"));
  if (!a || !b) {
    console.log("Please enter in numeric value format.");
  } else {
    addition = a + b;

    console.log("The sum of " + a + " and " + b + " is " + addition + ".");
  }
}

// Subtraction
else if (info === "sub" || info === "SUB" || info === "Sub") {
  subtractor = Number(prompt("Enter subtractor"));
  subtrahend = Number(prompt("Enter the subtrahend number: The number to be subtracted"));
  if (!subtractor || !subtrahend) {
    console.log("Please enter in numeric value format.");
  } else {
    subtraction = subtractor - subtrahend;
    console.log(
      "The difference of " +
        subtrahend +
        " from " +
        subtractor +
        " is " +
        subtraction +
        "."
    );
  }
}

// Multiplication
else if (info === "mul" || info === "MUL" || info === "Mul") {
  a = Number(prompt("Enter first number a"));
  b = Number(prompt("Enter second number b"));
  if (!a || !b) {
    console.log("Please enter in numeric value format.");
  } else {
    multiplication = a * b;
    console.log(
      "The multiplication of " + a + " and " + b + " is " + multiplication + "."
    );
  }
}

// Division
else if (info === "div" || info === "DIV" || info === "Div") {
  dividend = Number(prompt("Enter the number to be divided"));
  divisor = Number(prompt("Enter divisor"));
  if (!dividend || !divisor) {
    console.log("Please enter in numeric value format.");
  } else {
    division = dividend / divisor;
    console.log(
      "The division of " + dividend + " / " + divisor + " is " + division + "."
    );
  }
}
// Modulus
else if (info === "mod" || info === "MOD" || info === "Mod") {
  dividend = Number(prompt("Enter the number to be divided"));
  divisor = Number(prompt("Enter divisor"));
  if (!dividend || !divisor) {
    console.log("Please enter in numeric value format.");
  } else {
    modulus = dividend % divisor;
    console.log(
      "The modulus of " + dividend + " % " + divisor + " is " + modulus + "."
    );
  }
}

// Default condition
else {
  console.log("Please enter a valid name to continue.");
}
