import React from 'react';

const NewsCard = (props) => {
  return (
    <article id={props.index} className="articleContainer">
      <img src="https://dummyimage.com/250x150/000/fff" alt={props.header} title={props.header} loading="lazy" />
      <h1>{props.header}</h1>
      <p>{props.description}</p>
      <p>Article: {props.index}</p>
    </article>
  )
}

export default NewsCard;