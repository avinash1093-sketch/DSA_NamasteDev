
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
  let result = setTimeout(() => {
      let a = divide()
      return a;
  }, 1000);
  console.log('Done');
  console.log(result);
};

function divide() {
  return 6 / 2;
}

console.log('Now Done');
hello();