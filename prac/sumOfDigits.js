/*

Find the sum of digits in given number
Input: int i = 1234;
output: 1+2+3+4 = 10
 
 Find the list of unique numbers where frequency in more than 1.
 
Input : list l = {1,2, 3,2,3,3,4,2}
Output: {2, 3}


*/

let i = 1234;

function sumDigit(i) {
    return String(i).split('').map(Number).reduce((acc, cur, arr) => {
        return acc + cur;
    }, 0);
}
console.log(sumDigit(i));

let j = [1, 2, 3, 2, 3, 3, 4, 2];

function uniqueNumber(arr) {
    return new Set([...arr]);
};

console.log(uniqueNumber(j));
