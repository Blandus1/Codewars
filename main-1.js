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

//KATA: Plural
function plural(n) {
  
  if( n >= 0 && n !== 1 ){
    return true;
  }
  return false;
}

//KATA: BINARY ADDITION
function addBinary(a,b) {
const sum = a+b;
let sumInBinary = sum.toString(2);
return sumInBinary;
}
//KATA:Ternary Operator
const age=30
const describeAge = (age)=> `You\'re a(n) ${age <= 12 ? "kid" : age >= 13 && age <= 17? "teenager" :age >= 18 && age <= 64? "adult":"elderly"}`;