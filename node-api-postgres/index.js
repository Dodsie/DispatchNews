const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({
    info: "Node.js, Express, and Postgres API",
  });
});

app.get("/users", db.getUsers);

app.get("/users/:id", db.getUserById);

app.post("/users", db.createUser);

app.get("/users/delete/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
