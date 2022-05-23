import React from "react";
import FavoriteNewsCard from "./FavoriteNewsCard";
import Sidebar from "./Sidebar";
import theme from "../../helpers/theme";
import Header from "./Header";
import Weather from "./Weather";
import useApplicationData from "../../hooks/useApplicationData";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const FavoriteNewsCards = () => {
  const {
    favArticles,
    mode,
    user_id,
    toggleWeather,
    searchQuery,
    getFavorite,
    getPopular,
    addFavorite,
    deleteFavorite,
  } = useApplicationData();

  const FavoriteNewsCardsMap = favArticles.map((article) => {
    let identifier = favArticles.indexOf(article);
    return (
      <FavoriteNewsCard
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
        deleteFavorite={deleteFavorite}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Header
        search={searchQuery}
        onToggle={toggleWeather}
        getFavorite={getFavorite}
        getPopular={getPopular}
      />

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
          <>{FavoriteNewsCardsMap}</>
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
  );
};

export default FavoriteNewsCards;
