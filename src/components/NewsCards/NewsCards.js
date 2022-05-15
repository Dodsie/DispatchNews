import React, { useState }from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = (props) => {
const NewsCardsMap = props.articles.map((article) => {
  let identifier = props.articles.indexOf(article)
    return (
    <NewsCard key={identifier} 
    id={identifier} header={article.title} 
    description={article.description} 
    image={article.urlToImage}/>
    )
    })

  return (
    <div className='flex-container-row'>
      {NewsCardsMap}
    </div>
  )
}

export default NewsCards;