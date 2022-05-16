import React, { useState, useEffect } from "react";
import Header from "./Header";
import Weather from "./components/Weather";
import Sidebar from "./components/Sidebar";
import "./styles/index.scss";
import Grid from "@mui/material/Grid";
import NewsCards from "./components/NewsCards/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

// Theme
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  const searchQuery = (query) => {
    const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
    const language = "&language=en";
    let searchQuery = `q=${query}`;
    let NEWS_API_URL = `https://newsapi.org/v2/everything?${searchQuery}${language}${apiKey}`;

    axios.get(NEWS_API_URL).then((res) => {
      console.log("res.data", res.data);
      const articles = res.data;
      console.log("articles", articles);
      setNewsArticles(articles.articles);
    });
  };

  console.log(newsArticles);

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newsFromSource") {
          setNewsArticles(articles);
          console.log(newsArticles);
        }
      },
    });

    // Search first Query
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
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header search={searchQuery} />
        <Weather />
        <Grid container>
          <Grid item xs={12} md={8}>
            <div id="latestNews">
              <NewsCards articles={newsArticles} />
            </div>
          </Grid>

          <Sidebar />
        </Grid>
      </ThemeProvider>
    </main>
  );
}

export default App;
