// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

fs.writeFile("a.txt", "Hello this is to test 4th assignment", "utf8", (err) => {
    if(err){
        console.error("error writing to file:", err);
    } else {
        console.log("file has been written successfully");
    }
})