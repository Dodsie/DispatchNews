import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";

const ColorButton = styled(FacebookIcon)(() => ({
  color: "#ffffff",
  borderRadius: "0.2em",
  margin: "0 2px",
  backgroundColor: "#3b5998",
  "&:hover": {
    backgroundColor: "#2c4781",
  },
}));

const ShareOnFacebook = (props) => {
  let props_url = props.url;
  props_url = encodeURIComponent(props_url);
  const facebook_url = `https://www.facebook.com/sharer/sharer.php?u=`;
  const finalURL = `${facebook_url}${props_url}`;

  const button = (
    <ColorButton
      alt="Share on Facebook"
      title="Share on Facebook"
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

export default ShareOnFacebook;
