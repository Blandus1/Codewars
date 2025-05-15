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

//second kata
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
