import React from 'react';
//"https://dummyimage.com/250x150/000/fff"
const NewsCard = (props) => {
  return (
    <article id={props.id} key={props.id} className="articleContainer">
      <img src={props.image} alt={props.header} title={props.header} loading="lazy" />
      <h1>{props.header}</h1>
      <p>{props.description}</p>
      <p>Article: {props.id}</p>
    </article>
  )
}

export default NewsCard;