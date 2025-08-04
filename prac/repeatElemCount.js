// program to get count of elements in array, ie frequency of element in an array.

let elem = [1, 1, 2, 3, 3, 4];

function checkFrequency(arr) {
    const freqObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (freqObj[arr[i]]) {
            freqObj[arr[i]] += 1;
        } else {
            freqObj[arr[i]] = 1;
        }
    }
    return freqObj;
}
console.log(checkFrequency(elem));