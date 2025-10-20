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
  
  //KATA: Find average
  
   function findAverage(array) {
   
      if (array.length !== 0){
      let sum = array.reduce((acc,curr) => acc + curr,0)
    let average= sum/array.length
    return average;
    
    }else{
      return 0;
    }
  }
 //8kyu: simple multiplication
 const simpleMultiplication =(number)=> {
  
  if(number % 2 === 0)  {
    return number*8;
}else{
  return number*9;
}

  }


//multiples
const sumMul=(n,m)=>{
  if(m <= 0 || n <=0) {
    return 'INVALID';
  }
let sum = 0
  for(let i=1; i< m; i++){
    if(i % n === 0){
      sum += i;
    }
  }
  return sum;
  }
//KATA: merging sorted arrays
const mergeArrays=(arr1, arr2)=> {

let conct= arr1.concat (arr2)
if (arr1.length=== 0 && arr2.length === 0){
   return [];
}else {
     return [...new Set(conct)].sort((a,b)=> a - b)
}

}



let a = 10; // Outer scope { var a = 20; // Illegal shadowing, as 'var' is function-scoped } console.log(a); // Outputs 20, but this can lead to confusion

//KATA: switchItUp
 const switchItUp=(n)=> {

  const names={0:"Zero",1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine"}; 
  
return names[n]
   }


   //KATA: did she say 'hallo'?
   const validateHello = (string)=> {
  let words = ['hello','ciao','salut','hallo','hola','ahoj','czesc']
    for (let item of words){
      if (string.toLowerCase().includes(item)){
         return true;
      }
    }
  
  return false;
}

//KATA: remove every other: removing the second character in the array
const  removeEveryOther=(arr)=>{
  let array=[]
  for (let i=0; i< arr.length; i++){ //no <= in the condition to avoid accessing undefined
    if (i % 2 === 0){
      array.push(arr[i]);
    }
  }
  return array;
 }

 //the classes
 class Ghost{
  constructor (){
    const colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  Mycolor () {
    console.log('instatiated')
  }
    
  }

const instance= new Ghost()
instance.Mycolor();


// Rock paper scissors!
const rps = (p1, p2) => {
  if (p1 === p2)return "Draw!"
  if ((p1=== 'rock' && p2==='scissors') || (p1=== 'scissors' && p2==='paper') || (p1=== 'paper' && p2==='rock')){
    return "Player 1 won!"
  }
  return "Player 2 won!"
};
//KAATA: finding a needle in a haystack
const findNeedle=(haystack) =>{
  
  for(const [index,item] of haystack.entries()){
  if(item === "needle"){
   return `found the needle at position ${index}`
  }

  }
  return "no needle found"
}