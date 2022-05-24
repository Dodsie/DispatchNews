import React from "react";
import "../styles/index.scss";
import "../styles/Sidebar.scss";
import NewsCards from "./News/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import FavoriteNewsCards from "./News/FavoriteNewsCards";
import wordsToNumbers from "words-to-numbers";
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
  const [articleOpen, setArticleOpen] = React.useState(false);
  const [weather, setWeather] = React.useState(false);
<<<<<<< HEAD
  const [activeArticle, setActiveArticle] = React.useState(-1);
  const [favoriteView, setFavoriteView] = React.useState(false)

  const alanBtnInstance = React.useRef(null);

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

=======
  const [removedState, setRemovedState] = React.useState([]);
  const [activeArticle, setActiveArticle] = React.useState(-1);

  const alanBtnInstance = React.useRef(null);

>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725
  React.useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, articles, number }) => {
          switch (command) {
            case "newsFromSource":
              setNews(articles);
              break;

            case "newHeadlines":
              console.log("Does this show anything", articles);
              setNews(articles);
              setActiveArticle(-1);
              break;

            case "instructions":
              setArticleOpen(true);
              break;

            case "highlight":
              setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
              break;

            case "open":
              const parsedNumber =
                number.length > 2
                  ? wordsToNumbers(number, { fuzzy: true })
                  : number;
              const article = articles[parsedNumber - 1];

              if (parsedNumber > articles.length) {
                alanBtn().playText("Please try that again...");
              } else if (article) {
                window.open(article.url, "_blank");
                alanBtn().playText("Opening...");
              } else {
                alanBtn().playText("Please try that again...");
              }
              break;

            default:
              break;
          }
        },
      });
    }
  }, []);

<<<<<<< HEAD

=======
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
>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725

  React.useEffect(() => {
    console.log("I re-rendered!");
  }, [update]);

  React.useEffect(() => {
    const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
    let didCancel = false;
    const exclude = `&excludeDomains=youtube.com`;
    async function fetchNews() {
      let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ca${apiKey}${exclude}`;
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
      const today = new Date();
      const exclude = `&excludeDomains=youtube.com`;
      const relevancy = `&sortBy=relevancy`;
      const fromDate = `&from=${today}`;

      let NEWS_API_URL = `https://newsapi.org/v2/everything?${searchQuery}${language}${apiKey}${relevancy}${fromDate}`;
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
<<<<<<< HEAD
      setFavoriteView(false)
    }
    if (mode === SEARCH) {
      fetchSearch(search);
      setFavoriteView(false)
    }
    if (mode === FAV) {
      favSearch();
      setFavoriteView(true)
=======
    }
    if (mode === SEARCH) {
      fetchSearch(search);
    }
    if (mode === FAV) {
      favSearch();
>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725
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
<<<<<<< HEAD

  const weatherToggle = () => {
    setWeather(prev => !prev)
  }
=======
>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725

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
<<<<<<< HEAD
              isFavoriteView={favoriteView}
              isWeather={weather}
              setWeather={weatherToggle}
=======
>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725
            />
          }
        />
        <Route path="/favorites" element={<FavoriteNewsCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
