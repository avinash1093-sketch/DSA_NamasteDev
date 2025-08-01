let n = 7;
let row = '';
function fibonacciSeries(n) {
    let num1 = 0;
    let num2 = 1;
    let nextNum;
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j <= n; j++) {
            nextNum = num1 + num2;
            num1 = num2;
            num2 = nextNum;
        }
    // row = row  + num1;

    }
    return row;

}
let result = fibonacciSeries(n);
console.log(result);
