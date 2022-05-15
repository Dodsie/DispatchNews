import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = (props) => {
  return (
    <div className='flex-container-row'>
      {props.articles.map((article) => (
        <NewsCard key={article.index} index={article.index} header={article.title} description={article.description} image={article.urlToImage}/>
      ))}
    </div>
  )
}

export default NewsCards;