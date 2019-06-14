let names = require("./test/names");
let findSuperman = require("./test/findsuperman");
let a = require("./test/test1");
let b = require("./test/test2");

if (findSuperman(names)) {
  document.write("we found Sm");
} else {
  document.write("no Sm");
}
a();
b();
