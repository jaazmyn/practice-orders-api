const userRoutes = require("./routes/users");
const express = require("express");

const app = express();
const port = 3000;

app.use("/users", userRoutes);
app.listen(port, () => console.log(`Server listening on port ¢{port}...`));
