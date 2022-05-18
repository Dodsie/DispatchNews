const { Pool } = require("pg");
const pool = new Pool({
  user: "bailey_dispatch",
  password: "labber",
  host: "localhost",
  database: "dispatch",
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
    `SELECT ${search} FROM articles JOIN users ON user_id = users.id WHERE user_id = $1`,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const addFavorite = (request, response) => {
  const id = parseInt(request.params.id);

  const query = `author, content, description, publishedAt, source, title, url, urlToImage, user_id`;
  const values = `'it worked Gilbertson',
  'The other thing the Evo Lite+ offers is better low-light performance. The Air 2S has a maximum ISO of 6,400 in manual video capture, or 1,600 if youre shooting D-log. The Evo Lite+ can shoot ISO 48,… [+3808 chars]',
  'Autels new Evo Lite+ has a night mode and great flight time, and its a compelling alternative to DJIs most popular drones.',
  '2022-04-23T12:00:00Z',
  'Wired',
  'Give Autels Evo Lite+ Drone a Spin—Especially in Ludicrous Mode',
  'https://www.wired.com/review/autel-evo-lite-plus-drone/',
  'https://media.wired.com/photos/6261eae7536da34b19a67ad2/191:100/w_1280,c_limit/Autel-Evo-Lite+-Drone-Gear.jpg',
  $1
  `;

  pool.query(
    `INSERT INTO articles (${query}) VALUES (${values})`,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// };
const queries = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  getFavorite,
  addFavorite,
};

module.exports = queries
