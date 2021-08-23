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


const takeUntil = function(array, callback) {
  const resultArray = [];
  for( let item of array){
    if(callback(item)){
      return resultArray;
    } else {
      resultArray.push(item);
    }
  }
}

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//AssertEqual Test cases
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;