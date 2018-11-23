const fs = require('fs');

const stringTo_dos = fs.readFileSync("./to-dos.json", "utf-8");
const to_dos = JSON.parse(stringTo_dos);

const writeData = data => {
  let string = JSON.stringify(data);
  fs.writeFile("./to-dos.json", string, err => {
    if (err) {
      console.log("there is no data");
    }
  })
}

const convertData = fs.writeFileSync("./convert.json", JSON.stringify(to_dos));

module.exports = {
  writeData,
  stringTo_dos,
  to_dos,
  convertData
}
