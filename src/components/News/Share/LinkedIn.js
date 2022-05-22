import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ColorButton = styled(LinkedInIcon)(() => ({
  color: "#ffffff",
  borderRadius: "0.2em",
  margin: "0 2px",
  backgroundColor: "#0a66c2",
  border: "solid 1px #eeeeee",
  "&:hover": {
    backgroundColor: "#094e94",
    border: "solid 1px #eeeeee",
  },
}));

const ShareOnLinkedIn = (props) => {
  let props_url = props.url;
  props_url = encodeURIComponent(props_url);
  const linkedIn_url = `https://www.linkedin.com/sharing/share-offsite/?url=`;
  const finalURL = `${linkedIn_url}${props_url}&mini=true`;

  const button = (
    <ColorButton
      alt="Share on Linkedin"
      title="Share on LinkedIn"
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

export default ShareOnLinkedIn;
