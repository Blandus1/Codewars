//Codewars done using TypeScript

//1. KATA:Basic variable assignment
let a: string = "code";
let b: string ="wa.rs";
export let name: string = a + b;

//2. KATA: Finding the third angle
export const otherAngle = (a: number, b: number): number => {
  return (180 - (a + b));
}

//3.KATA: Personalized message
export function greet(name: string, owner: string): string{
return name === owner ? "Hello boss" : "Hello guest";
}

