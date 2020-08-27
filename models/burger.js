// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //Insert one burger into the table, with devoured = 0 (Not devoured)
    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", { burger_name: burgerName, devoured: 0 }, function(res) {
            cb(res);
        });
    },
    //Update one burger, according to the id provided, with devoured = 1 (Devoured)
    updateAsDevoured: function(idUpd, cb) {
        orm.updateOne("burgers", { devoured: 1 }, { id: idUpd }, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;