// print all even numbers in array.
function printEvenNumbers(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            console.log(`${arr[index]} is a even number`);
        }
    }
}
let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// printEvenNumbers(numArray);

// for (let index = 0; index < 10; index++) {
//     console.log(`Hello World`);
// }

// for (let index = 5; index > 0; index--) {
//     console.log(`Hello World`);
// }

// While loop

let i  = 0;
while (i < 5) {
    console.log(`Inside While Loop`);
    i++;
}


