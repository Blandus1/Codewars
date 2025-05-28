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

