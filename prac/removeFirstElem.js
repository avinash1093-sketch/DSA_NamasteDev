// Initialize an array
let arr = [5, 6, 7];
arr = arr.slice(1); 
// Create a new array without the first element
console.log(arr); // [6,7]

// How to write call back
function greet(name, callback) {
    callback(`Hello, ${name}!`);
}
greet('Geek', message => console.log(message));