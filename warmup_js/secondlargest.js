// find the second largest number.
let array1 = [7,6,5,4,3,2,1];
let array2 = [4, 4, 4, 4, 3];
let array3 = [1];
let array4 = [10, 20];


function secondLargest(arr) {
    let secondLargest = -Infinity;
    let largest = -Infinity;
    if (arr.length < 2) {
        return `Array Should have atleat 2 numbers`;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest === -Infinity ? `No Second largest Found` : secondLargest;
}
console.log(secondLargest(array1));
console.log(secondLargest(array2));
console.log(secondLargest(array3));
console.log(secondLargest(array4));

