// creating Module for math operations
import  { add, sub} from "./math.js";
// Module in js used for manage and maintanance code and project learge project 

function add(a,b) {
        return a+b;
}

function sub(a,b) {
        return a-b;
}

// Export modules tranforms functions

module.exports = {
        add, sub
};


// Using to modules part 2
const math = require('./math.js');

console.log(Math.add(10, 50));