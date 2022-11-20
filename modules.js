//Access Other File On This File Using Require
const names = require('./test');
const sayHi = require('./workWithFunction');
const data = require('./arrays');
require("./mindgranade");


sayHi("Abhay");
sayHi(names.john);
sayHi(names.peter);