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

module.exports = middle;