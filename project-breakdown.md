# Final Project - Dispatch News

## Pick a Project

- News application with vocal control and response option

### Users

- As a User, I want to browse current news, to know whats happening in the world.
- As a User, I want to filter news by age, category and location.
- As a User, I can favorite a news article for later.


## User Scenarios

----------//

## ERD

----------//

### Nouns:

- User (Users)

  - id PK
  - name
  - email
  - password

- Favorites (Save for viewing later)

  - id PK
  - user_id FK
  - article_id FK

- Articles (Current News)

  - id PK
  - favorite_id FK
  - title
  - URL

- Use these nouns/entities to build out your database (ie. tables are the nouns from the stories)

## Tech Choices

We have made all the tech choices for you
Back End: React, Express, Nodejs
Front End: HTML, CSS, JS
This will get you up and running quickly
