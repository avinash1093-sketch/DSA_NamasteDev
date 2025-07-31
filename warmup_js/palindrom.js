// An Integer is a palindrome when it reads the same forward and backward Eg: 121

function checkPalindrome(n) {
    let rev = 0, nCopy = n;
    if (n === 0) return false;
    while (n > 0) {
        let rem = n % 10;
        rev = rev * 10 + rem; // very important step to reverse te number
        n = Math.floor(n / 10);
    }
    return rev === nCopy;
}

let result = checkPalindrome(-121);
console.log(result);

// End
