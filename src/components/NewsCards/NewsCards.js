import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = (props) => {
  return (
    <div>
      {props.articles.map((article) => (
        <NewsCard key={article.index} index={article.index} article={article.article}/>
      ))}
    </div>
  )
}

export default NewsCards;