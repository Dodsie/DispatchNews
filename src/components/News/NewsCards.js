import React, { useState } from "react";
import NewsCard from "./NewsCard";

const NewsCards = (props) => {
  const NewsCardsMap = props.articles.map((article) => {
    let identifier = props.articles.indexOf(article);
    return (
      <NewsCard
        values={props.article}
        key={identifier}
        id={identifier}
        author={article.author}
        content={article.content}
        description={article.description}
        publishedAt={article.publishedAt}
        source={article.source.name}
        title={article.title}
        url={article.url}
        urlToImage={article.urlToImage}
        className="flex-container-row"
        addFavorite={props.addFavorite}
      />
    );
  });

  return <>{NewsCardsMap}</>;
};

export default NewsCards;
