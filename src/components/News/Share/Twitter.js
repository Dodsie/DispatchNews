import { styled } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";

const ColorButton = styled(TwitterIcon)(() => ({
  color: "#ffffff",
  borderRadius: "0.2em",
  margin: "0 2px",
  backgroundColor: "#1da1f2",
  "&:hover": {
    backgroundColor: "#0f7bbd",
  },
}));
const ShareOnTwitter = (props) => {
  let { url, title } = props;
  title = encodeURIComponent(title);
  url = encodeURIComponent(url);
  const twitter_url = `https://twitter.com/intent/tweet?`;
  const article_text = `text=${title}`;
  const article_url = `&url=${url}`;
  const finalURL = `${twitter_url}${article_text}${article_url}`;

  const button = (
    <ColorButton
      alt="Share on Twitter"
      title="Share on Twitter"
      onClick={(e) => {
        e.preventDefault();
        window.open(
          finalURL,
          "_blank",
          "width=" +
            parseInt(window.innerWidth) * 0.4 +
            ",height=" +
            parseInt(window.innerHeight) * 0.8 +
            ",toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=0,left=0,top=0"
        );
      }}
    >
      Share
    </ColorButton>
  );
  return button;
};

export default ShareOnTwitter;
