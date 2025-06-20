
const toNumberArray =(stringarray) =>{
  const array= []

  for(let i=0;i<stringarray.length;i++){

    const add = parseFloat(stringarray[i])
    array.push(add)
  }
  return array;

}
console.log(toNumberArray(['2','3.9','6.1']))