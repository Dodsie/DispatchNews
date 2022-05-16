import Grid from "@mui/material/Grid";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <Grid
      item
      md={4}
      className="animate__animated sidebar"
      display={{ xs: "none", md: "flex" }}
    >
      <div>
        <h1>Friends Online</h1>
        List of Avatars
      </div>

      <div>
        <h2>Saved News</h2>
        List of Saved News
      </div>
    </Grid>
  );
};

export default Sidebar;
