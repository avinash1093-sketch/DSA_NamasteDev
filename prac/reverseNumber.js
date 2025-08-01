let num = 125;

function reverseNumber(num) {
    if (num === 0) return false;
    let rev = 0;
    let rem;
    while (num > 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10)
    }
    return rev ;
};

let result = reverseNumber(num);
console.log(result);

