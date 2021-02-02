const db = require("../db/");

const usersController = {
  getAll: (req, res) => {
    db.query("SELECT * FROM users")
      .then((results) => res.json(results.rows))
      .catch((error) => res.send("Oooop"));
  },
};

module.exports = usersController;
