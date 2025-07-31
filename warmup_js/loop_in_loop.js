// Loop Within a Loop

// for (let i = 0; i < 3; i++) {
//     console.log(`I--> ${i}`);
//     console.log(`==============>`)
//     for (let j = 0; j < 3; j++) {
//         console.log(`J--> ${j}`);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`i=${i} j=${j}`);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log(`i=${i} j=${j}`);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j <= i; j++) {
//         console.log(`i=${i} j=${j}`);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = i; j > 0; j--) {
//         console.log(`i=${i} j=${j}`);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = i; j >= 0; j--) {
//         console.log(`i=${i} j=${j}`);
//     }
// }

for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(`i=${i} j=${j}`);
    }
}