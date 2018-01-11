function cubeOdd(arr) {


  let newList = arr.filter( arr => arr % 2 == 1 || arr % 2 == (-1) || !Number.isInteger(arr))
  
  return newList.reduce((previous, current) => {
  
  let newNum = current * current * current;
  
  let newNum2 = previous * previous * previous;
  
  
  return newNum += newNum2;
  
  
  })
  return newList;
  
  
    }