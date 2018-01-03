'use strict'
function solution(str){
  //var beenReversed = solution.reverse(str);
  var splitString = str.split('');
  var reverseArrayString = splitString.reverse();
  var rejoinArrayString = reverseArrayString.join('');
  return rejoinArrayString;
 }