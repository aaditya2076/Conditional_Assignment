// let confirm_message = confirm(" Enter three numbers \n Press Yes to Continue.");
// console.log(confirm_message);

let a = Number(prompt("Enter first number.", "Suppose 5"));
console.log(a);

let b = Number(prompt("Enter second number.", "Suppose 4"));
console.log(b);

let c = Number(prompt("Enter third number.", "Suppose 8"));
console.log(c);

// Ascending Order
if ( !a || !b || !c ){
    console.log("Enter a valid number.");
}
else if ( a < b && a < c && b < c ){
    console.log("The ascending order is \n" + a + "\n" + b + "\n" + c);
}
else if ( a < b && a < c && c < b ){
    console.log("The ascending order is \n" + a + "\n" +c + "\n" + b);
}
else if ( b < a && b < c && a < c){
    console.log("The ascending order is \n" + b + "\n" + a + "\n" + c);
}
else if ( b < a && b < c && c < a){
    console.log("The ascending order is \n" + b + "\n" + c + "\n" + a);
}
else if ( c < a && c < b && b < a){
    console.log("The ascending order is \n" + c + "\n" + b + "\n" + a);
}
else {
    console.log("The ascending order is \n" + c + "\n" + a + "\n" + b);
}

// Descending Order
if ( !a || !b || !c ){
    console.log("Enter a valid number.");
}
else if ( a > b && a > c && b > c ){
    console.log("The descending order is \n" + a + "\n" + b + "\n" + c);
}
else if ( a > b && a > c && c > b ){
    console.log("The descending order is \n" + a + "\n" +c + "\n" + b);
}
else if ( b > a && b > c && a > c){
    console.log("The descending order is \n" + b + "\n" + a + "\n" + c);
}
else if ( b > a && b > c && c > a){
    console.log("The descending order is \n" + b + "\n" + c + "\n" + a);
}
else if ( c > a && c > b && b > a){
    console.log("The descending order is \n" + c + "\n" + b + "\n" + a);
}
else {
    console.log("The descending order is \n" + c + "\n" + a + "\n" + b);
}