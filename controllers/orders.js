const db = require("../db/");

const ordersController = {
  getAll: (req, res) => {
    db.query("SELECT * FROM orders")
      .then((results) => res.json(results.rows))
      .catch((error) => res.send("Oooop"));
  },
};

module.exports = ordersController;
