import React from "react";
import "../styles/index.scss";
import "../styles/Sidebar.scss";
import NewsCards from "./News/NewsCards";
import FavoriteNewsCards from "./News/FavoriteNewsCards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const ADDFAV = "ADDFAV";
  const INITIAL = "INITIAL";
  const FAV = "FAV";
  const SEARCH = "SEARCH";
  const ONDELETE = "ONDELETE";
  const REMOVED = "REMOVED";

  const [update, setUpdate] = React.useState(false);
  const [news, setNews] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [mode, setMode] = React.useState(INITIAL);
  const [user, setUser] = React.useState(1);
  const [articleId, setArticleId] = React.useState("");
  const [publishDate, setPublishDate] = React.useState("");
  // const [weather, setWeather] = React.useState(false)
  const [removedState, setRemovedState] = React.useState([]);
  const [activeArticle, setActiveArticle] = React.useState(0);

  function ConvertKeysToLowerCase(obj) {
    var output = {};
    for (let i in obj) {
      if (Object.prototype.toString.apply(obj[i]) === "[object Object]") {
        output[i.toLowerCase()] = ConvertKeysToLowerCase(obj[i]);
      } else if (Object.prototype.toString.apply(obj[i]) === "[object Array]") {
        output[i.toLowerCase()] = [];
        output[i.toLowerCase()].push(ConvertKeysToLowerCase(obj[i][0]));
      } else {
        output[i.toLowerCase()] = obj[i];
      }
    }
    return output;
  }

  React.useEffect(() => {
    console.log("I re-rendered!");
  }, [update]);

  React.useEffect(() => {
    const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
    let didCancel = false;

    async function fetchNews() {
      let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ca${apiKey}`;
      if (!didCancel) {
        let response = await axios.get(NEWS_API_URL);
        let data = await Object.values(
          ConvertKeysToLowerCase(response.data.articles)
        );
        console.log("data", data);
        setNews(data);
      }
    }

    async function fetchSearch(x) {
      const language = "&language=en";
      let searchQuery = `q=${x}`;
      let NEWS_API_URL = `https://newsapi.org/v2/everything?${searchQuery}${language}${apiKey}`;
      if (!didCancel) {
        let response = await axios.get(NEWS_API_URL);
        let data = await Object.values(
          ConvertKeysToLowerCase(response.data.articles)
        );
        console.log("afterfunction", data);
        setNews(data);
        setSearch("");
      }
    }

    async function favSearch() {
      let NEWS_API_URL = `http://localhost:3001/favorite/1/`;
      if (!didCancel) {
        let response = await axios.get(NEWS_API_URL);
        let data = await response.data;
        setNews(data);
        console.log("data", data);
      }
    }

    async function deleteFav(userId, publishDate) {
      console.log("before", news);
      let NEWS_API_URL = `http://localhost:3001/delete/${userId}/${publishDate}/`;

      let res = await axios.delete(NEWS_API_URL);
      favSearch();
      if (res.data.status === 200) {
        console.log("Delete Succesful");
      }
    }

    async function addFavorite(id) {
      console.log(id);
      const x = news.length > 0 && news[id];
      console.log(news[id]);
      let res = axios.post(`http://localhost:3001/addfav/1`, {
        author: x.author,
        content: x.content,
        description: x.description,
        publishedAt: x.publishedat,
        source: x.source.name,
        title: x.title,
        url: x.url,
        urlToImage: x.urltoimage,
      });
      console.log(res.data);
    }

    if (mode === INITIAL) {
      fetchNews();
    }
    if (mode === SEARCH) {
      fetchSearch(search);
    }
    if (mode === FAV) {
      favSearch();
    }
    if (mode === ONDELETE) {
      deleteFav(user, publishDate);
    }

    if (mode === ADDFAV) {
      addFavorite(articleId);
    }

    // if (mode === REMOVED) {
    //   favSearch()
    // }

    return () => {
      didCancel = true;
    };
  }, [update]);

  const popularNews = () => {
    setMode(INITIAL);
    setUpdate((prevState) => !prevState);
  };

  const searchBar = (query) => {
    setSearch(query);
    setMode(SEARCH);
    setUpdate((prevState) => !prevState);
  };

  const favoriteToggle = () => {
    setMode(FAV);
    setUpdate((prevState) => !prevState);
  };

  const deleteFavorite = (published, article_id) => {
    setPublishDate(published);
    setArticleId(article_id);
    setMode(ONDELETE);
    setUpdate((prevState) => !prevState);
  };

  const addFav = (article_id) => {
    setArticleId(article_id);
    setMode(ADDFAV);
    setUpdate((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NewsCards
              deleteFav={deleteFavorite}
              news={news}
              toggleUpdate={popularNews}
              query={searchBar}
              addFav={addFav}
              fav={favoriteToggle}
              activeArticle={activeArticle}
            />
          }
        />
        <Route path="/favorites" element={<FavoriteNewsCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
