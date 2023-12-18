// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

fs.readFile("a.txt", "utf8", (err, data) => {
    if (err) {
        console.error("error reading file:", err);
    } else {
        modifiedData = data.replace(/\s+/g, ' ');

        fs.writeFile("a.txt", modifiedData, "utf8", (err) => {
            if (err){
                console.error("error writing file", err);
            } else {
                console.log("File has been successfully written.");
            }
        })
    }
})

