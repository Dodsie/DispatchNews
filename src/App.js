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
      console.log("res.data", res.data);
      const newsApi = res.data;

      setNewsArticles(newsApi.articles);
    });
  };


  const getFavorite = async () => {
    Promise.all([axios.get("http://localhost:3001/favorite/2/")])
    .then((all) => {
      console.log('grab articles',all[0].data)
    })
    
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
    // Search first Query
    searchQuery("popular");
    getFavorite()
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
  console.log('newsArt',newsArticles);
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
            <NewsCards articles={newsArticles} />
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
