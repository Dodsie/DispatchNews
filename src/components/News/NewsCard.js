import React, { useEffect, useState, createRef } from "react";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ShareOnFacebook from "./Share/Facebook";
import ShareOnLinkedIn from "./Share/LinkedIn";
import ShareOnTwitter from "./Share/Twitter";
import party from "party-js";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "#2c692f",
  "&:hover": {
    backgroundColor: "#123815",
  },
}));

const confettiClick = (e) => {
  party.confetti(e.target, {
    count: party.variation.range(20, 40),
    size: party.variation.range(0.8, 1.2),
    speed: party.variation.range(600, 800),
  });
};

const NewsCard = (props) => {
  // console.log("returned,props", props);
  const [elRefs, setElRefs] = useState([]);
  const [favorited, setFavorited] = useState(false);
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
  }, [props.i, props.activeArticle, elRefs]);
  const isImage = /(jpe?g|png|gif|bmp|webp)/g;

  const imageURL = isImage.test(props.urltoimage)
    ? `${props.urltoimage}`
    : `/images/noImage.jpg`;

  console.log("image", imageURL);
  /* Example Source: [+1063 chars], this regex selects everything between '[' and ']'*/
  const removeTurncatedText = /[[][^[]*[\]$]/g;
  const removeUnwantedHTML = /(<([^>]+)>)/gi;

  let articleContent = props.content
    ? props.content
        .replace(removeTurncatedText, "") // remove [ ] truncation text
        .replace(removeUnwantedHTML, "") // remove <> tags
        .replace(/\u00a0/g, " ") // remove nbsp
    : "";

  const articleSource = props.source ? (
    <span>
      Source: <span className="author">{props.source}</span>
    </span>
  ) : (
    ""
  );

  // const articleAuthor = props.author ? (
  //   <span>
  //     Author: <span className="author">{props.author}</span>
  //   </span>
  // ) : (
  //   ""
  // );

  const articleTitle = props.title.substring(0, 89);

  return (
    <Grid
      id={props.id}
      key={props.id}
      ref={elRefs[props.i]}
      className="article"
    >
      <Grid item xs={12} md={12} className="articleImageContainer">
        <a href={props.url} target="_blank" rel="noreferrer">
          <img
            src={imageURL}
            alt={articleTitle}
            title={articleTitle}
            loading="lazy"
            className="articleImage"
            async
          />
        </a>
      </Grid>
      <Grid item xs={12} md={12} className="articleDetails">
        <h2>{articleTitle}</h2>
        <p>{articleContent}</p>
        <footer>
          <div>
            {/* <span className="favoriteBtn"> */}
              {!props.isFavoriteView && <span className="favoriteBtn"> <ColorButton
                variant="contained"
                startIcon={<FavoriteIcon />}
                disabled={favorited}
                onClick={(e) => {
                  props.addFavorite(props.id);
                  confettiClick(e);
                }}
              >
                Favorite
              </ColorButton>
              </span>
              }

              {props.isFavoriteView && <span className="deleteBtn"> <ColorButton
                variant="contained"
                startIcon={<FavoriteIcon />}
                onClick={(e) => {
                  props.deleteFavorite(props.publishedat, props.id);
                }}
              >
                Delete
              </ColorButton>
              </span>}
            {/* </span> */}
            <span>
              <ShareOnFacebook url={props.url} title={articleTitle} />
              <ShareOnLinkedIn url={props.url} title={articleTitle} />
              <ShareOnTwitter url={props.url} title={articleTitle} />
            </span>
          </div>
          <div>
            {articleSource}
            {props.publishedat === undefined ? (
              <span>
                <time className="publishedAt" dateTime={props.publishedat}>
                  {"Date Posted: " + props.publishedat.replace(/([T].*?[Z])/g, "")}
                </time>
              </span>
            ) : (
              <span>
                <time className="publishedAt" dateTime={props.publishedat}>
                  {"Date Posted: " + props.publishedat.replace(/([T].*?[Z])/g, "")}
                </time>
              </span>
            )}
          </div>

          <div
            className={
              props.activeArticle === props.i
                ? "articleValue active"
                : "articleValue not-active"
            }
          >
            Article: {props.id + 1}
          </div>
        </footer>
      </Grid>
    </Grid>
  );
};

export default NewsCard;
