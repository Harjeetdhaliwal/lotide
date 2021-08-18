const exp = require('constants');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if(keys1.length !== keys2.length){
    return false;
  } else {
    for( let key of keys1){
      if((Array.isArray(object1[key])) && (Array.isArray(object2[key]))){
        const result = eqArrays(object1[key], object2[key]);
        if(!result){
          return false;
        }
      } else if (object1[key] !== object2[key]){
        return false;
      }
    }
    return true;
  }
}

const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect; 
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);