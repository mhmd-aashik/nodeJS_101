// CommonJs every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternativeFlavour");

require("./7-mind-grenade");

sayHi("Aashik");
sayHi(john);
sayHi(peter);
