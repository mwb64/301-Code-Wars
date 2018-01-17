function mutateMyStrings(stringOne, stringTwo){

  let arr1 = stringOne.split('')
  
  let arr2 = stringTwo.split('')
  
  const answerString = [stringOne + '\n']
  console.log(answerString)
  for(let i = 0; i < arr1.length; i++){
  console.log('cello',i)
  if(arr1[i] !== arr2[i]) { 
  
  arr1[i] = arr2[i];
  console.log(arr1[i])
  answerString.push(arr1.join('') + '\n')
  console.log(answerString)
  
  }
  }
  return answerString.join('');