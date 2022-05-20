import React, { useState } from "react";
import NewsCard from "./NewsCard";
import Sidebar from "./Sidebar";
import theme from "../../helpers/theme";
import Header from "./Header";
import Weather from "./Weather";
import useApplicationData from "../../hooks/useApplicationData";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const NewsCards = (props) => {
 const {newsArticles, mode, user_id, toggleWeather, searchQuery, getFavorite, getPopular, addFavorite, deleteFavorite} = useApplicationData()



  const NewsCardsMap = props.news.map((article) => {
    let identifier = props.news.indexOf(article);
    return (
      
      <NewsCard
        values={article}
        key={identifier}
        id={identifier}
        author={article.author}
        content={article.content}
        description={article.description}
        publishedat={article.publishedat}
        source={article.source.name}
        title={article.title}
        url={article.url}
        urltoimage={article.urltoimage}
        className="flex-container-row"
        addFavorite={addFavorite}
      />
  )});

  return (
  <main>
    <ThemeProvider theme={theme}>
    <Header search={props.query} onToggle={props.toggleUpdate} getFavorite={props.fav} getPopular={getPopular} />
    
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

        <>{NewsCardsMap}</>

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
  )
};

export default NewsCards;
