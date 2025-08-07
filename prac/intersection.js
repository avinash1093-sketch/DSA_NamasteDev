function arrayIntersection(arr1, arr2) 
{
  const set2 = new Set(arr2); 
  return arr1.filter(value => set2.has(value));
}

console.log(arrayIntersection([5, 6, 7], [6, 7,8 ]));

const a = [1, 2, 3, 4, 5, 6];
const b = [3, 4, 3, 8, 9, 0];

function interSect(a, b) {
  let arr = [...a, ...b];
  return [...new Set(arr.filter((elem, index, array) => array.indexOf(elem) !== index))];
}
console.log(interSect(a, b));