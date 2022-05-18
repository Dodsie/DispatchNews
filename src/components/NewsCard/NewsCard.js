import React from "react";
import Grid from "@mui/material/Grid";
// import db from "../../node-api-postgres/queries";

const NewsCard = (props) => {
  const imageURL =
    props.urlToImage === null || props.urlToImage.length === 4
      ? `https://dummyimage.com/650x280/000/fff`
      : `${props.urlToImage}`;

  return (
    <Grid className="article" id={props.id} key={props.id}>
      <Grid item xs={12} md={12} className="articleImageContainer">
        <a href={props.url} target="_blank" rel="noreferrer">
          <img
            src={imageURL}
            alt={props.title}
            title={props.title}
            loading="lazy"
            className="articleImage"
          />
        </a>
      </Grid>
      <Grid item xs={12} md={12} className="articleDetails">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <footer>
          <span>
            Published by: <span className="author">{props.author}</span>
          </span>
          <br />
          <time className="publishedAt" dateTime={props.publishedAt}>
            {"Posted on: " + Date(props.publishedAt).toString()}
          </time>
          {/* <button
            onClick={() => {
              db.addFavorite(props.values, );
            }}
          ></button> */}
        </footer>
      </Grid>
    </Grid>
  );
};

export default NewsCard;
