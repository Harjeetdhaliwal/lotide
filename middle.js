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

const middle = function(array){
  const length = array.length;
  const middleIndex = Math.floor(length/2);
  let result = [];
  if(length < 3){
    return result;
  } else if(length % 2 === 0){
  result.push(array[middleIndex]-1, array[middleIndex]);
  }else {
    result.push(array[middleIndex]);
  }
  return result;
}

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1]))
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);