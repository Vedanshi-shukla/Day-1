const numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers and double them
const result = numbers
  .filter(num => num % 2 === 0) // Keep even numbers
  .map(num => num * 2);         // Double the numbers

console.log(result); 

  
