const db = require("../db/");

const ordersController = {
  getAll: (req, res) => {
    db.query("SELECT * FROM orders")
      .then((results) => res.json(results.rows))
      .catch((error) => res.send("Oooop"));
  },
  getById: (req, res) => {
    db.query("SELECT * FROM orders WHERE id=$1", [req.params.id])
      .then((results) => res.json(results.rows))
      .catch((error) => res.send("Ooopsi"));
  },
};

module.exports = ordersController;
