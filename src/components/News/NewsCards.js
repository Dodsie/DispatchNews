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
  const NewsCardsMap = props.news.map((article) => {
    let identifier = props.news.indexOf(article);
    return (
=======



  const NewsCardsMap = props.news.map((article) => {
    let identifier = props.news.indexOf(article);
    return (
      
>>>>>>> c3fee01d8962d6530f7288200f4cd9cfec87264c
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
        addFavorite={props.addFav}
        deleteFavorite={props.deleteFav}
      />
<<<<<<< HEAD
    );
  });

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header
          search={props.query}
          onToggle={props.toggleUpdate}
          getFavorite={props.fav}
        />

        {/* {mode && <Weather />} */}

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
=======
  )});

  return (
  <main>
    <ThemeProvider theme={theme}>
    <Header search={props.query} onToggle={props.toggleUpdate} getFavorite={props.fav} />
    
    {/* {mode && <Weather />} */}

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
>>>>>>> c3fee01d8962d6530f7288200f4cd9cfec87264c
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
<<<<<<< HEAD
    </main>
  );
=======
      </main>
  )
>>>>>>> c3fee01d8962d6530f7288200f4cd9cfec87264c
};

export default NewsCards;
