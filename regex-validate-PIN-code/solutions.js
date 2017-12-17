'use strict'
function validatePIN (pin) {
  
   if(pin.length < 4 || pin.length === 5 || pin.length > 6 || isNaN(pin) || !Number.isInteger(parseInt(pin)) || pin.includes('-') || pin.includes('.')) {
    return false;
  } else {
  return true;
  }
  }