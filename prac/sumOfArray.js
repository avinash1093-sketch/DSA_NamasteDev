function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([15, 6, 10, 2]));

function sumArray1(arr) {
    return arr.reduce((acc, curr, array) => {
        return acc + curr;
    }, 0);
}

console.log(sumArray1([15, 6, 10, 2]));