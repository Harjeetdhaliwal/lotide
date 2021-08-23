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

const assertArraysEqual = function(input1, input2) {
  const result = eqArrays(input1, input2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${input1} !== ${input2}`);
  }
}

const result = [];
const flatten = function(array){
  for(let i = 0; i<array.length; i++){
    if(Array.isArray(array[i])){
      for ( let j = 0; j < array[i].length; j++){
       result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;