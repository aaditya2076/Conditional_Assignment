let a = Number(prompt("Enter any number", "Suppose 5"));
b=typeof(a)
console.log(b);
if (!a){
    console.log("Enter a valid number.");
}
else if (a % 2 === 0){
    console.log(a + " is an even number.");
}
else {
    console.log(a + " is an odd number.")
}