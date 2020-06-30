var data = require("currency-codes/data");
const fs = require("fs");
fs.writeFile("file.txt", JSON.stringify(data), function (err) {
  if (err) console.log(err);
  console.log("Saved..!!");
});
// console.log(data);
