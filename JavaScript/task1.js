// Higher-order function
const processData = (array, filterCallback, mapCallback) => {
    return array.filter(filterCallback).map(mapCallback);
  };
  
  // Sample data
  const data = [
    { id: 1, name: "Sonali", age: 25 },
    { id: 2, name: "Aditya", age: 17 },
    { id: 3, name: "Ben", age: 30 },
    { id: 4, name: "Harsh", age: 15 },
  ];
  
  // Usage: Filter people older than 20 and transform to their names in uppercase
  const result = processData(
    data,
    person => person.age > 20, // Filter callback: Keep only those older than 20
    person => person.name.toUpperCase() // Map callback: Convert names to uppercase
  );
  
  console.log(result); // Output: ["ALICE", "CHARLIE"]
  