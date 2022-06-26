const { convert } = require("convert-gitmoji");

var content =
  ":arrow_up: bump qs from 6.10.3 to 6.10.4 (xxx) - **helper:** :pencil:  Updated TSDoc (xxx) ";

var newContent = convert(content, true);
console.log(newContent);
