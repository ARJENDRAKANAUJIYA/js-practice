 let a = prompt("Hey whats your age:");
// a = Number.parseInt(a) // Converting the string to a number
// if (a>0){
//     alert("This is valid age for driving")
// }
// let age = "driving";
// if( age => 18 ){
//     console.log("you are eligibal for driving!")
// }
// else{
//     console.log("not eligibal");
// }

if(a < 0){
    console.log("This is a valid age");
}
else if(a < 9){
    console.log("You are a kid and you cannot think of driving")
}
else if( a < 9 && a < 18){
    console.log("You are a kid and you  think of driving after 18");
}
else{
    console.log("This is an invalid age");
}
console.log("done");