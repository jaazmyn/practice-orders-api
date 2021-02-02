const db = require("../db/");
const bodyParser = require("body-parser");

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
  createUser: (req, res) => {
    console.log([req.body.firstName, req.body.lastName, req.body.age]);
    db.query(
      "INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3)",
      [req.body.firstName, req.body.lastName, req.body.age]
    )
      .then((response) => res.send(response))
      .catch((error) => res.send("Ooopsi"));
  },
};

module.exports = usersController;
