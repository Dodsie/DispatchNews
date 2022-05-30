# Dispatch News 📰

DispatchNews is a news aggregator that can grab news across the entire world, with AI assistance to read titles, open articles, and traverse the site.

## Features 🤳

- users can search news across the entire world
- users can add & remove favorite articles
- users can use Voice AI to search articles
- users can use Voice AI to read articles
- users can use Voice AI to open articles
- users can chat live
- users can search local weather
- users can use on Mobile, Tablet or Desktop Devices

## This was published for collaborative learning purposes. 🚧

This project was created and published by [Bailey Dods](https://github.com/Dodsie), [Alastair Gardiner](https://github.com/Alastair5), and [Matt Seligman](https://github.com/MattSeligman) as part of our final project at Lighthouse Labs. We welcome any feedback!

## Begin Setup 🤓

Start in the `db` directory by typing:

- `cd DispatchNews/db/`

<br/>

## PostGres PSQL Database Setup 🖥️

---

- ![insert data](https://github.com/Dodsie/docs/psql-db.gif?raw=true)

1. Connect to PSQL with the following command:

   - `PSQL`

2. Alter 'yourdbname' then Create your Database with the altered command:

   - `CREATE DATABASE yourdbname;`

3. Alter 'youruser' and 'yourpass' then Create your User/Role with the altered command:

   - `CREATE USER youruser WITH PASSWORD 'yourpass';`

4. Revise this command with your 'yourdbname' and 'youruser' to grant your user/role permission over the database.

   - `GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;`

5. Close the PSQL connection with the following command:

   - `\q`

<br/>

## Insert Scheme & Seed Data 🌱

---

- ![insert data](https://github.com/Dodsie/docs/psql-data.gif?raw=true)

1. Connect to your Database using your user role the following command:

   - `psql -d yourdbname -U youruser`;

2. Type in your Altered password upon request.

   - `yourpass`

3. Insert your Table Schema with the following command:

   - `\i schema/01_tables.sql`

4. Insert your Seed Data with the following command:

   - `\i seeds/01_seeds.sql`

<br/>

## API & Socket.io Setup 🛣️

---

1.  Download or Clone:

    - https://github.com/Dodsie/DispatchNewsApi
      <br><br>

2.  Open the file `queries.js` and update your PSQL `user`, `password`, and `database`:

        user: 'youruser'
        password: 'yourpass'
        database: 'yourdbname'

- Proceed to save this file.

  - ![start api & chat](https://github.com/Dodsie/docs/start-api-and-chat.gif?raw=true)

2. Open Two Terminals and within both access the DispatchNewsAPI directory

   - `cd DispatchNewsAPI`

3. Within one terminal type:

   - `node index.js`

4. Within the other terminal type:

   - `node chat-index.js`

**Note:** _Leave these terminals running._

<br/>

## Configuration 📝

---

1. Rename `.env.example` to `.env`

2. Sign-up for API Key's at [Alan.app](https://alan.app/) & [NewsAPI.org](https://newsapi.org/).

3. Replacement `API_HERE` with your API Key's within the `.env` file:

   - `REACT_APP_ALAN_KEY=API_HERE`
   - `REACT_APP_NEWS_KEY=API_HERE`
     <br/>

## Starting Dispatch News 🥳

1. Return to the "DispatchNews" application and start in the DispatchNews directory.

- `cd /DispatchNews/`

2. Start the dispatch news by running the following command:

- `npm start`

  - ![npm start](https://github.com/Dodsie/docs/start-app.gif?raw=true)

3. Enjoy trying our DispatchNews!

   - ![Review App](https://github.com/Dodsie/docs/app-review.gif?raw=true)
