// Counter 
const Counter = (() => {
    
    let count = 0;

    return {

        //for increasing count
        increment() {
        count++;
        console.log("Count after increment: ${count}"); //$ is a template literal and used to print the value of count here .
        },

        //for decreasing
        decrement() {
        count--;
        console.log("Count after decrement: ${count}");
        },

        //it resets the count
        reset() {
        count = 0;
        console.log("Count after reset: ${count}");
        },
        
        getCount() {console.log("Current count: ${count}");
        return count;
        },
    };
  })();
  
  // Using the Counter
  Counter.increment(); 
  Counter.increment(); 
  Counter.increment(); 
  Counter.decrement(); 
  Counter.decrement();
  Counter.reset();     
  Counter.getCount();  
  
