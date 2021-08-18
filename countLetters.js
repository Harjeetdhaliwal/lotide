const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str){
  str = str.split(" ").join("");
  const result = {};
 for( let char of str){
   if(result[char]){
     result[char] += 1;
     }else{
     result[char] = 1;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));