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

const letterPositions = function(sentence) {
  //sentence = sentence.split(" ").join("");
  const results = {};
  for( let i = 0; i < sentence.length; i++){
    if((sentence[i] !== " ")){
      if(results[sentence[i]]){
        results[sentence[i]].push(i);
       } else{
       results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
