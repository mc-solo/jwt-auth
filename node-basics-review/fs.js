import fs from "fs";

// reading data

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    // console.error("error reading file", err);
    throw new Error(`Error reading file ${err}`);
  } else {
    console.log(data);
  }
});
