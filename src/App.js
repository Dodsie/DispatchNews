import React, { useState, useEffect } from "react";
import Header from "./Header";
import Weather from "./components/Weather";
import Sidebar from "./components/Sidebar";
import "./styles/index.scss";
import "./styles/Sidebar.scss";
import Grid from "@mui/material/Grid";
import NewsCards from "./components/NewsCards/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

// Theme
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [mode, setMode] = useState(false);
  const [user_id, setUser_id] = useState(1)
  //Helpers and querys
  const toggleWeather = () => {
    console.log(mode);
    if (!mode) {
      setMode(true);
    } else {
      setMode((prevMode) => !prevMode);
    }
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
    });
  };


  const getFavorite = async () => {
    Promise.all([axios.get("http://localhost:3001/favorite/1/")])
    .then((all) => {
      console.log('grab articles',all)
    })
    
  }

  const addFavorite = async (article_id) => {
    console.log("newsArticles",newsArticles) 
    const x = newsArticles.length > 0 && newsArticles[article_id]
    // console.log(x.content)
    return axios.post(`http://localhost:3001/addfav/${user_id}/`, { author: x.author, content: x.content, description: x.description, publishedAt: x.publishedAt,  source: x.source.name, title: x.title, url: x.url, urlToImage: x.urlToImage})
    .then((response) => {console.log('res',response.config.data)}
    ).catch(function (error) {
      console.log(error);
    });
  
    
  }

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newsFromSource") {
          setNewsArticles(articles);
        }
      },
    });

    // // Search first Query
    searchQuery("popular");
  }, []);

  // Theme Style
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
      secondary: {
        main: "#0044ff",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });
  // console.log('newsArt',newsArticles);
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header search={searchQuery} onToggle={toggleWeather} />

        {mode && <Weather />}

        <Grid container>
          <Grid
            item
            id="latestNews"
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            display={{ xs: "block", md: { display: "flex" } }}
          >
            <NewsCards articles={newsArticles} addFavorite={addFavorite} />
          </Grid>
          <Grid
            item
            md={2}
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
