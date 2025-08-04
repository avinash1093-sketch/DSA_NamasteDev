// factorial of any given number

let n = 10;

function factorialOf(num) {
    let fac = 1;
    for (let i = 2; i <= num; i++) {
       fac = fac * i;
    }
    return fac;
};

let result = factorialOf(n);
console.log(result);
