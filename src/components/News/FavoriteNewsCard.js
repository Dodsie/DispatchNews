import React from "react";
import Grid from "@mui/material/Grid";

const FavoriteNewsCard = (props) => {
  const imageURL =
    props.urltoimage === null || props.urltoimage.length === 4
      ? `https://dummyimage.com/650x280/000/fff`
      : `${props.urltoimage}`;

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
      <time className="publishedAt" dateTime={props.publishedat}>
            {"Date Posted: " + props.publishedat.slice(0,-10)}
          </time>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <footer>
          <span>
            Published by: <span className="author">{props.author}</span>
          </span>
          <br />
          <p>{props.id}</p>
          <button
            onClick={() => {
              props.deleteFavorite(props.publishedat);
            }}
          >Delete</button>
        </footer>
      </Grid>
    </Grid>
  );
};

export default FavoriteNewsCard;
