// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("tb_burger", function(res) {
        cb(res);
      });
    },
    //Insert one burger into the table, with eaten = 0 (Not eaten)
    insertOne: function(burgerName, cb) {
      orm.insertOne("tb_burger", {burger_name: burgerName, eaten : 0}, function(res) {
        cb(res);
      });
    },
    //Update one burger, according to the id provided, with eaten = 1 (Eaten)
    updateAsEaten: function(idUpd, cb) {
      orm.updateOne("tb_burger", {eaten: 1}, {id:idUpd}, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  