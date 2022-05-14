import React from 'react';

const NewsCard = (props) => {
  return (
    <div>
      {props.index}
      {props.article}
        News Card
    </div>
  )
}

export default NewsCard;