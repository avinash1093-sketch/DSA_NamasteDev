/*

* 
* * 
* * * 
* * * * 
* * * * * 

*/
let n = 5;
function triang1(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row = row + ' * '
        }
        console.log(row);
    }
}
triang1(n)

function triang2(n) {
    for (let i = 1; i <= n ; i++) {
        let row = ' * ';
        console.log(row.repeat(i));
    }
}
triang2(n)

for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat((n-i))+str.repeat(i));
}