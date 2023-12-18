// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

fs.readFile("1-counter.js", "utf8", (err, data) => {
    if(err){
        console.error("error reading the file", err);
    } else {
        console.log(data);
    }
});

// Since fs.readFile is a asynchronous operation, for will start executing immediately after fs.readFile is called.
let sum = 0;
for(let i = 0; i < 100000000000; i++){
    sum += i
}
console.log(sum);