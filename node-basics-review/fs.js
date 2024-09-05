import fs from "fs";

// reading data
// try catch is designed to handle errors for synchronous codes
// for asynchronous codes like this errors should be handled like this by using callback functions

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    // console.error("error reading file", err);
    throw new Error(`Error reading file ${err}`);
  } else {
    console.log(data);
  }
});

// writing a file
const myData =
  "This is supposed to be written after the execution of the below function";

fs.writeFile("writtenFile.txt", myData, (err) => {
  if (err) {
    throw new Error("Error writing file", err);
    return;
  }
  console.log("File has been saved!");
});
