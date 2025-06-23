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

//KATA: Tip calculator
function calculateTip(amount,rating){

  switch (rating.toLowerCase()){
      case 'terrible': return Math.ceil((amount *0)/100);
      case 'poor': return Math.ceil((amount * 5)/100);
      case 'good':return Math.ceil((amount * 10)/100);
      case 'great':  return Math.ceil((amount * 15)/100);
      case 'excellent': return Math.ceil((amount * 20)/100);
      default: return  "Rating not recognised";
  }
}

//KATA: Will you make it 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

if (fuelLeft * mpg >= distanceToPump){
 return true; 
}else {
     return false;
}
};

//KATA: string to number
const stringToNumber= (str) => {
  return Number(str);
}
//KATA: string array to number array

const toNumberArray =(stringarray) =>{
  const array= []

  for(let i=0;i<stringarray.length;i++){

    const add = parseFloat(stringarray[i])
    array.push(add)
  }
  return array;

}
  //KATA: Quarter of the year
  const quarterOf= (month)=> month < 4 ? 1: month <7 ? 2: month < 10 ? 3:month <=12? 4: undefined;
  
