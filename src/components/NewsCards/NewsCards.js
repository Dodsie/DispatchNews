import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = (props) => {
  const NewsCardsMap = props.articles.map((article) => {
    let identifier = props.articles.indexOf(article);
    return (
      <NewsCard
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
      />
    );
  });

  return <div className="flex-container-row">{NewsCardsMap}</div>;
};

export default NewsCards;
