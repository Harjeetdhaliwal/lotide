const eqArrays = function(input1, input2) {
  if (input1.length !== input2.length) {
    return false;
  } else {
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] !== input2[i]) {
        return false;
      }
    }
    return true;
  }
}

const assertArraysEqual = function(input1, input2){
  const result = eqArrays(input1, input2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${input1} !== ${input2}`);
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];
  for( let item of array){
   results.push(callback(item))
  }
  return results;
}
const result = map(words, word => word[0]);
console.log(result);

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

module.exports = map;