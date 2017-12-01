'use strict'

var re = /[.]/g; 
var replaceDots = function(str) {
  return str.replace(re, '-');
}
replaceDots("one.two.three");