const db = require("../db/");

const usersController = {
  getAll: (req, res) => {
    db.query("SELECT * FROM users")
      .then((results) => res.json(results.rows))
      .catch((error) => res.send("Oooop"));
  },
  getById: (req, res) => {
    db.query("SELECT * FROM users WHERE id=$1", [req.params.id])
      .then((results) => res.json(results.rows))
      .catch((error) => res.send("Ooooooopsi"));
  },
};

module.exports = usersController;
