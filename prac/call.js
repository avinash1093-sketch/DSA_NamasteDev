
// function test (name , callback){
//   callback(err,name)
// }

// function greeting(err,name){
//     // if()
//     console.log(`Hello ${name}`);

// }

// let result = test('Ron',greeting);
// console.log(result);

async function hello() {
  let result = await divide();
  console.log(result);
  console.log('Done');
};





function divide() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = 6 / 2;
      resolve(a);
    }, 5000);

  })
}

console.log('Now Done');
hello();