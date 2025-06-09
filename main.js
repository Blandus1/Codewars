// first kata: checking if number is even or odd
function evenOrOdd(number) {
  if (number % 2 === 0){
    return 'Even';
  }else {
    return 'Odd';
}
}
//example
let number = 7;
console.log(evenOrOdd(number));

//second kata: removing duplicates
function distinct(a) {
     let b =[];
     let c = new Set();
     for ( const item of a){
       if (!c.has(item)){
         c.add(item);
         b.push(item);
       }
     }
  return b;
}
//example
let a = [12,3,4,1,1,1,2,3,3]
console.log(distinct(a))

//Third kata
function isVow(a){
  const b= { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' };
  
  return a.map(num => b[num] || num);

    }

// Kata: Write a function "greet" that returns "hello world!"
function greet(){
  return "hello world!"
}
// Kata:a function that takes an argument and returns the square of it.
function square(m){
  return m**2;
}
//Kata:an array of integers that return a new array with each value doubled.
function maps(x){
 
  return x.map((num) => num*2);
}
//KATA
function isOpposite(s1, s2){
  //coding here...
  if (s1.length === 0 || s2.length === 0 || s1.length !== s2.length) {
    return false;
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1[i].toLowerCase() !== s2[i].toLowerCase()) {
      return false;
    }
    
    if (s1[i] === s2[i]) {
      return false; 
    }
  }
  return true;

}

//KATA
function countPositivesSumNegatives(input) {
   // your code here
  
  if (!input || input.length === 0) {
    return [];
  }
  
  let count = 0; //count of positive numbers
  let sum = 0;// sum of negative numbers

  for (const num of input) {
    if (num > 0) {
      count++; //counts positives
    } else if (num < 0) {
    sum += num; //add negatives
    }
  }
  return [count,sum];
}
// KATA:a function that takes an array of numbers and returns the sum of the numbers. If the array does not contain any numbers then you should return 0.
function sum (numbers) {
  let sum = 0
  for (const num of numbers){
    sum+=num;
   if (numbers.length === 0){
      0;
    }
  }
  return sum;
}
console.log(sum([2,3]))
//KATA: ["h","o","l","a"] ->"h,o,l,a"
function printArray(array){
  //show me the code!
  let arr= array.join(',')
  return arr;
}
//kata:
var Ball = function(ballType) {
  // your code goes here
  
  class Ball {
    constructor(ballType = "regular"){
      this.ballType= ballType;
  }
    }
  return new Ball(ballType)
};
const ball1= new Ball("super")// returns super
const ball2 = new Ball() // returns regular
console.log(ball1.ballType)

//KATA: count the monkeys
function monkeyCount(n) {
const counting= [];
  for (let i=1; i<=n; i++){
    /*if(counting[i].length > 0)*/
    counting.push(i);
  }
  return counting;
}
//Duck Duck Goose
function duckDuckGoose(players, goose) {
  // ...
const positionInArray = (goose-1) % players.length

return players[positionInArray].name;
}
//alternative of duck duck goose
function duckDuckGoose(players, goose) {
  for (var i = 0; i < players.length; i++) {
    if (i === (goose-1) % players.length) {
      return players[i].name;
    }
  }
}
//KATA: Neutralisation
function neutralise(s1, s2) {
  
 let arrS1= s1.split('')
 let arrS2= s2.split('')
 
  for (let i=0; i< arrS1.length; i++){
       if(arrS1[i]=== "+" && arrS2[i]=== "+"){
       arrS1[i]="+";
    }else if(arrS1[i]==="-" && arrS2[i]==="-") {
      arrS1[i]="-";
    }else{
      arrS1[i]= 0;
    }
 
  }
return arrS1.join('');
  }



