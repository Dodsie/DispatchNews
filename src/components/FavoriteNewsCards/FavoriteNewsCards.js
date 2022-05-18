import React, { useState } from "react";
import FavoriteNewsCard from "../FavoriteNewsCard/FavoriteNewsCard";

const FavoriteNewsCards = (props) => {
  const FavoriteNewsCardsMap = props.articles.map((article) => {
    let identifier = props.articles.indexOf(article);
    return (
      <FavoriteNewsCard
        values={props.article}
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
        addFavorite={props.addFavorite}
      />
    );
  });

  return <>{FavoriteNewsCardsMap}</>;
};

export default FavoriteNewsCards;
