import React from "react";
//"https://dummyimage.com/250x150/000/fff"
const NewsCard = (props) => {
  return (
    <article id={props.id} key={props.id} className="articleContainer">
      <div className="articleImageContainer">
        <a href={props.url} target="_blank" rel="noreferrer">
          <img
            src={props.urlToImage}
            alt={props.title}
            title={props.title}
            loading="lazy"
            className="articleImage"
          />
        </a>
      </div>
      <div className="articleDetails">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <footer>
          <p>
            <span>
              Published by: <span className="author">{props.author}</span>
            </span>
            <br />
            <time className="publishedAt" dateTime={props.publishedAt}>
              {"Posted on: " + Date(props.publishedAt).toString()}
            </time>
          </p>
          <span className="articleID">[ {props.id} ]</span>
        </footer>
      </div>
    </article>
  );
};

export default NewsCard;
