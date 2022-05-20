import React, { useEffect, useState, createRef } from "react";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "#2c692f",
  "&:hover": {
    backgroundColor: "#123815",
  },
}));

const NewsCard = (props) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 150);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (props.i === props.activeArticle && elRefs[props.activeArticle]) {
      scrollToRef(elRefs[props.activeArticle]);
    }
    console.log("called", props.activeArticle, props.i);
  }, [props.i, props.activeArticle, elRefs]);

  const imageURL =
    props.urlToImage === null || props.urlToImage.length === 4
      ? `https://dummyimage.com/650x280/000/fff`
      : `${props.urlToImage}`;

  return (
    <Grid
      id={props.id}
      key={props.id}
      ref={elRefs[props.i]}
      className={
        props.activeArticle === props.i
          ? "article active"
          : "article not-active"
      }
    >
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
        <time className="publishedAt" dateTime={props.publishedAt}>
          {"Date Posted: " + props.publishedAt.slice(0, -10)}
        </time>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <footer>
          <span>
            Published by: <span className="author">{props.author}</span>
          </span>
          <br />
          {/* <time className="publishedAt" dateTime={props.publishedAt}>
            {"Date Posted: " + props.publishedAt.slice(0,-10)}
          </time> */}
          <p>{props.id}</p>
          <ColorButton
            variant="contained"
            startIcon={<FavoriteIcon />}
            onClick={() => {
              props.addFavorite(props.id);
            }}
          >
            Favorite
          </ColorButton>
          {/* <button
            onClick={() => {
              props.addFavorite(props.id);
            }}
          >
            Favorite
          </button> */}
        </footer>
      </Grid>
    </Grid>
  );
};

export default NewsCard;
