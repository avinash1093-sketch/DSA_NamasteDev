let n = 7;
let row = [];

function fibonacciSeries(n) {
    let num1 = 0;
    let num2 = 1;
    let nextNum;
    for (let i = 1; i <= n; i++) {
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
        row.push(num1);
    }
    return row.join('');
}
console.log(fibonacciSeries(n));