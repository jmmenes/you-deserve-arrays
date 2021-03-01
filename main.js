/******************
 * YOUR CODE HERE *
 ******************/

// 1. `getFirstItemFrom`: takes in an array as a parameter and returns the first item from that array.

function getFirstItemFrom(array) {
  return array[0];
}

// 2. `getLastItemFrom`: takes in an array as a parameter and returns the last item from that array.

function getLastItemFrom(array) {
  lastItem = array.length - 1;
  return array[lastItem];
}

// 3. `getIndex3`: takes in an array as a parameter and returns the item at the 3rd index.
// If there are not four items (i.e., if there is no index 3), it returns the value at the last index.

function getIndex3(array) {
  lastItem = array.length - 1;

  if (array.length >= 4) {
    return array[3];
  } else if (array.length < 4) {
    return array[lastItem];
  }
}

// 4. `isLongList`: takes in an array as a parameter and returns a boolean indicating whether the
// array's length is at least 10.

function isLongList(array) {
  if (array.length >= 10) {
    return true;
  } else if (array.length < 10) {
    return false;
  }
}

// 5. `firstItemIsNumber`: takes in an array as a parameter and returns a boolean indicating whether
// or not the first item in the array is a number.

function firstItemIsNumber(array) {
  if (typeof array[0] === "number") {
    return true;
  } else {
    return false;
  }
}

// 6. `secondCharOfThirdString`: takes in an array as a parameter and returns the second character
// in the third item in the array. We'll assume that that third item is a string for now, but
// a good function would check that's true!
// (In the same way the previous question checked if it's a number, if you did it the easy way.)

function secondCharOfThirdString(array) {
  return array[2][1];
}

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof getFirstItemFrom === "undefined") {
  getFirstItemFrom = undefined;
}

if (typeof getLastItemFrom === "undefined") {
  getLastItemFrom = undefined;
}

if (typeof getIndex3 === "undefined") {
  getIndex3 = undefined;
}

if (typeof firstItemIsNumber === "undefined") {
  firstItemIsNumber = undefined;
}

if (typeof isLongList === "undefined") {
  isLongList = undefined;
}

if (typeof secondCharOfThirdString === "undefined") {
  secondCharOfThirdString = undefined;
}

module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
};
