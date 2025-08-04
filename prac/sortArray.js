// ascending.

let arr = [5, 3, 8, 1];

function sortAsc(elem) {
    for (let i = 0; i < elem.length; i++) {
        for (let j = i + 1; j < elem.length; j++) {
            if (elem[i] > elem[j]) {
                let temp = elem[i];
                elem[i] = elem[j];
                elem[j] = temp;
            }
        }
    }
    return elem;
}
console.log(sortAsc(arr));



// Descending.
function sortArrayDesc(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArrayDesc([5, 3, 8, 1]));
