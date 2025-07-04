
const toNumberArray =(stringarray) =>{
  const array= []

  for(let i=0;i<stringarray.length;i++){

    const add = parseFloat(stringarray[i])
    array.push(add)
  }
  return array;

}
console.log(toNumberArray(['2','3.9','6.1']))

//sum arrays
function arrayPlusArray(arr1, arr2) {
   
let sum = [...arr1,...arr2]
let sumarr= sum.reduce((c,d) => c+d,0)
return sumarr
}
console.log(arrayPlusArray([1,2,3], [4,5,7]))
