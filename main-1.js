//Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
 
  
for (loades in gunners){
if(gunners[loades] !== 'aye'){
  return 'Shiver me timbers!';
} 
}
    return 'Fire!'
  }

  //KATA: Multiply
  function multiply(a, b){
   return a * b;
}
//Kata: Multiply the number 
function multiply(number){
  
  const numStr = String(number)
  
 const num2 = numStr.split('').filter(num => num >= 0 )
   const multiple = Math.pow(5,num2.length)
   
  return number * multiple;
}
console.log(multiply(-2))//prints: -10