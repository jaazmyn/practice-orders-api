const userRoutes = require("./routes/users");
const orderRoutes = require("./routes/orders");
const express = require("express");

const app = express();
const port = 3000;

app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.listen(port, () => console.log(`Server listening on port ¢{port}...`));
