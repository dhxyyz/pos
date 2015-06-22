var receive = require('../spec/fixtures.js');
var Scanner = require('./model/Scanner');
var Pos = require('./model/Pos');
var Tools = require('./model/Tools');
var _= require('./lodash');

function printInventory(inputs) {
    var result = {};

    var scanner = new Scanner();
    result = scanner.integration(inputs);
    var tools = new Tools();
    var pos = new Pos();
    pos.print_the_list(result);
    console.log(pos.print_the_list());
    return pos.print_the_list();


}
module.exports = printInventory;
