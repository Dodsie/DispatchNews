import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = (props) => {
  return (
    <div className='flex-container-row'>
      {props.articles.map((article) => (
        <NewsCard key={article.index} index={article.index} header={article.header} description={article.description}/>
      ))}
    </div>
  )
}

export default NewsCards;