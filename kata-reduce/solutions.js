'use strict'
function find_average(array) {
  let sum = array.reduce((previous, current) => current += previous);
  let avg = sum / array.length;
   return avg;
  }