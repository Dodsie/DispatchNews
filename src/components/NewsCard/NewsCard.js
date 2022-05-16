import React from "react";
//"https://dummyimage.com/250x150/000/fff"
const NewsCard = (props) => {
  return (
    <article id={props.id} key={props.id} className="articleContainer">
      <div class="articleImage">
        <img
          src={props.image}
          alt={props.header}
          title={props.header}
          loading="lazy"
        />
      </div>
      <div>
        <h1>{props.header}</h1>
        <p>{props.description}</p>
        <p>Article: {props.id}</p>
      </div>
    </article>
  );
};

export default NewsCard;
