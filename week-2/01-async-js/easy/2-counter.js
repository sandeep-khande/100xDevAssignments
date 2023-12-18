// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


// initializing a variable to store the counter value
let counter = 0;

function incrementAndLog() {
    console.log(counter++);
  setTimeout(incrementAndLog, 10000); // Schedule the next iteration after 1000 milliseconds (1 second)
}

// Start the counter
incrementAndLog();






































































// (Hint: setTimeout)