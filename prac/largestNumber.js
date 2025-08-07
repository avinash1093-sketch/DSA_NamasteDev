let arr = [99, 5, 3, 100, 111];

function findLargestNumber(array) {
    let largest = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}
let result = findLargestNumber(arr);
console.log(result);

function findLargest(arr) {
    // Math.max() is used to find the largest number
    return Math.max(...arr); 
}

console.log(findLargest([99, 5, 3, 100, 1]));