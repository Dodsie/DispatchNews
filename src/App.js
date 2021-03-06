import React, { useState, useEffect } from "react";
import Header from "./Header";
import Weather from "./components/Weather";
import Sidebar from "./components/Sidebar";
import theme from "./helpers/theme.js";
import "./styles/index.scss";
import "./styles/Sidebar.scss";
import Grid from "@mui/material/Grid";
import NewsCards from "./components/NewsCards/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";
import FavoriteNewsCards from "./components/FavoriteNewsCards/FavoriteNewsCards";

import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  const [mode, setMode] = useState(false);
  const [user_id, setUser_id] = useState(1);
  const [favorite, setFavorite] = useState(false);
  //Helpers and querys
  const toggleWeather = () => {
    console.log(mode);
    setMode(!mode);
  };

  const searchQuery = (query) => {
    const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
    const language = "&language=en";
    let searchQuery = `q=${query}`;
    let NEWS_API_URL = `https://newsapi.org/v2/everything?${searchQuery}${language}${apiKey}`;

    axios.get(NEWS_API_URL).then((res) => {
      // console.log("res.data", res.data);
      const newsApi = res.data;

      setNewsArticles(newsApi.articles);
      setFavorite(false);
    });
  };

  const getFavorite = async (user_id) => {
    Promise.all([axios.get("http://localhost:3001/favorite/1/")]).then(
      (all) => {
        console.log("grab articles", all[0].data);
        setNewsArticles(all[0].data);
        setFavorite(true);
        console.log("state", favorite);
      }
    );
  };

  const getPopular = () => {
    console.log("pressed");
    const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
    const language = "&language=en";
    let searchQuery = `q=popular`;
    let date = `&from=${Date}`;
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ca${apiKey}`;

    axios.get(NEWS_API_URL).then((res) => {
      // console.log("res.data", res.data);
      const newsApi = res.data;
      setFavorite(false);
      setNewsArticles(newsApi.articles);
    });
  };

  const addFavorite = async (article_id) => {
    console.log("newsArticles", newsArticles);
    const x = newsArticles.length > 0 && newsArticles[article_id];
    return axios
      .post(`http://localhost:3001/addfav/${user_id}/`, {
        author: x.author,
        content: x.content,
        description: x.description,
        publishedAt: x.publishedAt,
        source: x.source.name,
        title: x.title,
        url: x.url,
        urlToImage: x.urlToImage,
      })
      .then((response) => {
        console.log("res", response.config.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onEvent: function (e) {
        console.info("onEvent", e);
      },
      onCommand: ({ command, articles }) => {
        if (command === "newsFromSource") {
          setNewsArticles(articles);
          setFavorite(false);
        }
      },
    });
    // Search first Query
    searchQuery("fortnite");
    console.log("newsArticles in UE", newsArticles);
  }, []);

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header search={searchQuery} onToggle={toggleWeather} />
        {console.log({ mode })}
        {mode && <Weather applyClassName={mode} />}

        <Grid container>
          <Grid
            item
            id="latestNews"
            xs={12}
            sm={12}
            md={8.5}
            lg={9.5}
            xl={9.5}
            display={{ xs: "block", md: { display: "flex" } }}
          >
            {!favorite && (
              <NewsCards articles={newsArticles} addFavorite={addFavorite} />
            )}
            {favorite && (
              <FavoriteNewsCards
                articles={newsArticles}
                addFavorite={addFavorite}
              />
            )}
          </Grid>
          <Grid
            item
            sm={0}
            md={3.5}
            lg={2.5}
            xl={2.5}
            className="sidebar"
            display={{ xs: "none", md: "flex" }}
          >
            <Sidebar />
          </Grid>
        </Grid>
      </ThemeProvider>
    </main>
  );
}

export default App;
