function findMin(arr) {
    // Assume the first element is the minimum
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            // Update min if a smaller value is found
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([18, 2, 35, 46, -10, 1, 0, -3]));