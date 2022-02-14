
const middle = function(numberAr) {

  let middleElements = [];

  // Arrays with one or two elements, Return an empty array.
  if (numberAr.length <= 2) {
    return middleElements;
  }

  //Find middle index of array
  let middleIndex = Math.floor(numberAr.length / 2);

  // Even length --> return two values
  // Odd length --> return single middle value
  if (!(numberAr.length % 2)) {
    middleElements.push(numberAr[[middleIndex - 1]]);
    middleElements.push(numberAr[[middleIndex]]);
  } else {
    middleElements.push(numberAr[middleIndex]);
  }

  return middleElements;
};



module.exports = middle;