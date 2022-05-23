import React, { useState } from "react";
import NewsCard from "./NewsCard";
import Sidebar from "./Sidebar";
import theme from "../../helpers/theme";
import Header from "./Header";
import Weather from "./Weather";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const NewsCards = (props) => {
  // console.log("props", props);
  const NewsCardsMap = props.news.map((article, i) => {
    let identifier = props.news.indexOf(article);
    return (
      <NewsCard
        values={article}
        key={identifier}
        id={identifier}
        author={article.author}
        content={article.content}
        description={article.description}
        publishedat={article.publishedat || article.publishedAt}
        source={article.source.name}
        title={article.title}
        url={article.url}
        urltoimage={article.urltoimage || article.urlToImage}
        className="flex-container-row"
        addFavorite={props.addFav}
        deleteFavorite={props.deleteFav}
        activeArticle={props.activeArticle}
        i={i}
        isFavoriteView={props.isFavoriteView}
      />
    );
  });

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header
          search={props.query}
          onToggle={props.toggleUpdate}
          getFavorite={props.fav}
          isWeather={props.setWeather}
        />

        {props.isWeather && <Weather />}

        <Grid container>
          <Grid
            item
            id="latestNews"
            xs={12}
            sm={12}
            md={9}
            lg={9.5}
            xl={10}
            display={{ xs: "block", md: { display: "flex" } }}
          >
            <>{NewsCardsMap}</>
          </Grid>
          <Grid
            item
            xs={0}
            sm={0}
            md={3}
            lg={2.5}
            xl={2}
            className="sidebar"
            display={{ xs: "none", md: "flex" }}
          >
            <Sidebar />
          </Grid>
        </Grid>
      </ThemeProvider>
    </main>
  );
};

export default NewsCards;
