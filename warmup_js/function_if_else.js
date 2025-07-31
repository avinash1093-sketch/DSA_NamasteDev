function printHelloWorld() {
    console.log('Hello World');
    
}

// printHelloWorld();

function greet(name){
    console.log(`Namaste! ${name}`);
}

// greet('Avinash');

function addTwoNumber(num1 , num2) {
    console.log(num1 + num2);
}
// addTwoNumber(1,2);

function square(num) {
  return num*num;
}
let value = square(4);
// console.log(`Square --> ${value}`);

// create a function which accept the age and tells whether a person
// is eligible to vote or not.

function checkVotingEligibility(age) {
    if (age >= 18) {
        return `Person with age ${age} is eligibal to vote`
    }
    return `Person is not eligible.`
}
let result = checkVotingEligibility(60);
// console.log(result);

// check even or odd number

function checkEvenOrOdd(num) {
  return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`
}
console.log(checkEvenOrOdd(1));
