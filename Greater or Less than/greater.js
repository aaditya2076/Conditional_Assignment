let a;
a = Number(prompt("Enter any value for a"));
console.log(a);

let b;
b = Number(prompt("Enter any value for b")); 
console.log(b);

if (!a || !b){
    console.log("Enter a valid value in integer.");
}
else if (a>b){
    console.log(a+ " is greater.");
}
else{
    console.log(a + " is smaller.");
}