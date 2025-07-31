// Function to return count of digits from a number

function countDigits(n) {
    if (n === 0 ) return 1;
    let count = 0;
    n = Math.abs(n);
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

let num = 123455758785858756789;
let result = countDigits(num);
console.log(result);

console.log(Math.round(10.4));
console.log(Math.ceil(10.5));
console.log(Math.abs(10.4));
console.log(Math.floor(10.6));



