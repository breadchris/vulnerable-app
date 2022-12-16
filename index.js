const {VM} = require('vm2');
const Handlebars = require("handlebars");

const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));


new VM().run('this.constructor.constructor("return process")().exit()');
// Throws ReferenceError: process is not defined
// asdf
// asdf
// asdf
// asdf
// asdf
// asdf
