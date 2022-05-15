
const express = require('express')
const app = express()
// https://newsapi.org/v2/top-headlines?apiKey=dc11c84507144528b39adde6ced6ec24&category=technology

const search = (query) => {
let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_KEY}&category=${query}`
app.get(NEWS_API_URL, function (req, res) {
  console.log(req.body)
  console.log(res.body)
})
};

export default search