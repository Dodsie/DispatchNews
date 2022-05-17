const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  host: process.env.REACT_APP_DB_HOST,
  database: process.env.REACT_APP_DATABASE,
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email, password } = request.body;

  pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    [name, email, password],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const getFavorite = (request, response) => {
  const id = parseInt(request.params.id);
  const search = [
    "author",
    "content",
    "description",
    "publishedAt",
    "source",
    "title",
    "url",
    "urlToImage",
  ];
  pool.query(
    `SELECT ${search} FROM articles JOIN favorites ON article_id = articles.id JOIN users ON user_id = users.id WHERE user_id = $1`,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// const postFavorite = (request, response) => {
//   //starting by getting state.
// };
// create a favorite needs to know the user_id and needs to push the article into the database.
//need to push
module.exports = { getUsers, getUserById, createUser, deleteUser, getFavorite };
