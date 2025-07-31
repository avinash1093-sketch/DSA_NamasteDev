// console.log(' '+ '*');
// Square pattern
let n = 5;
// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j < n; j++) {
//         row = row + ' * '
//     }
//     console.log(row);
// }

// Right Angled star pattern
// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j <= i; j++) {
//         row = row + ' * '
//     }
//     console.log(row);
// }


// Right Angle with number pattern
// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j <= i; j++) {
//         row = row + (j + 1);
//     }
//     console.log(row);
// }

// Right Angle with Repeated number pattern
// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j <= i; j++) {
//         row = row + (i + 1);
//     }
//     console.log(row);
// }

// Reverse right anle traiangle of numbers
// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j < n-i; j++) {
//         row = row + (j + 1);
//     }
//     console.log(row);
// }

// Reverse right anle traiangle of stars
// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j < n-i; j++) {
//         row = row + ' * ';
//     }
//     console.log(row);
// }

// star with empty space pattern
// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j < n - (i + 1); j++) {
//         row = row + ' ';
//     }
//     for (let k = 0; k < i + 1; k++) {
//        row = row + '*'
//     }
//     console.log(row);
// }

// 1 0 pattern
for (let i = 0; i < n; i++) {
    let row = '';
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
        row = row + toggle;
        if (toggle === 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    console.log(row);
}

// 1 0 pattern- part 2
let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
        row = row + toggle;
        if (toggle === 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    console.log(row);
}