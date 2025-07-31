// count negative Numbers in array
let arr = [2, -9, 17, 0, 1, -10, -4, 8, -100, -200];

function countNegativeNumbers(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count = count + 1
        }
    }
    return count;
}
let result = countNegativeNumbers(arr);
// console.log(result);

// Write a function that searches for an element in an array and returns the index.
// If the element is not present then just return -1.
let arr1 = [4, 2, 0, 10, 8, 30];
function searchElement(arr, searchElem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElem) {
            return `${searchElem} is found at Index ${i}`;
        }
    }
    return -1;
}
// console.log(searchElement(arr1, 30));

// Find smallest number in array;
let numberArr = [2, -6, 4,-1000, 8, 1, -9,-10]
function checkSmallNumber (arr){
    let smallest = Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]< smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}
// console.log(checkSmallNumber(numberArr));

// Find The largest Number
function findLargestNumber(arr){
    let largest = -Infinity;
    for(let i=0;i<arr.length;i++){
        if (arr[i]> largest){
            largest = arr[i]
        }
    }
    return largest;
}
console.log(findLargestNumber(numberArr));
// console.log(10 > Infinity);



