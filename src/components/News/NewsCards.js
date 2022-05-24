import React, { useState } from "react";
import NewsCard from "./NewsCard";
import Sidebar from "./Sidebar";
import theme from "../../helpers/theme";
import Header from "./Header";
import Weather from "./Weather";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const NewsCards = (props) => {
<<<<<<< HEAD
  // console.log("props", props);
=======
  console.log("props", props);
>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725
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
<<<<<<< HEAD
        publishedat={article.publishedat || article.publishedAt}
        source={article.source.name}
        title={article.title}
        url={article.url}
        urltoimage={article.urltoimage || article.urlToImage}
=======
        publishedat={article.publishedat}
        source={article.source.name}
        title={article.title}
        url={article.url}
        urltoimage={article.urltoimage}
>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725
        className="flex-container-row"
        addFavorite={props.addFav}
        deleteFavorite={props.deleteFav}
        activeArticle={props.activeArticle}
        i={i}
<<<<<<< HEAD
        isFavoriteView={props.isFavoriteView}
=======
>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725
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
<<<<<<< HEAD
          isWeather={props.setWeather}
        />

        {props.isWeather && <Weather />}
=======
        />

        {/* {mode && <Weather />} */}
>>>>>>> 35896cd74b94e25a5084d92fa5ee9f9e6ed3c725

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
