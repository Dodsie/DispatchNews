// Components
import * as React from "react"; // for state control here (refactorable in future)
import Divider from "@mui/material/Divider";
// Navigation
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WeatherIcon from "@mui/icons-material/WbSunny";
import Grid from "@mui/material/Grid";
import Login from "../../components/News/Login";
import Badge from "@mui/material/Badge";
import AccountMenu from "../AccountMenu"
import { Link } from "react-router-dom"
// LottiePlayer
import { Player } from "@lottiefiles/react-lottie-player";

// CSS
import "../../styles/Header.scss";

// Animate.css
import "animate.css";

// Search
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/TravelExplore";
import Button from "@mui/material/Button";

function Header(props) {
  const [value, setValue] = React.useState(0);
  const [loggedIn, setloggedIn] = React.useState(true);
  const [category, setCategory] = React.useState("");
  
  return (
    <AppBar
      position="sticky"
      className="header"
      // className="animate__animated animate__fadeInDown header"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {/* Logo */}
        <Grid item sm={5} md={5} lg={6} xl={3} className="logo-container">
          <a href="/">
            <Player
              autoplay
              loop
              id="logo"
              src="https://assets2.lottiefiles.com/private_files/lf30_iqdiamlq.json" // https://lottiefiles.com/58907-happy-earth-day
              style={{ height: "70px", width: "70px" }}
            ></Player>
            <h1>DispatchNews</h1>
          </a>
        </Grid>
        <Grid item md={0.5} id="mobileAvatarContainer">
          {loggedIn && (
            <Badge
              color="error"
              badgeContent={5}
              showZero
              className="mobileAvatar"
            >
              <AccountMenu />
            </Badge>
          )}
          {!loggedIn && <Login />}
        </Grid>

        {/* Search */}
        <Grid item sm={12} md={4} lg={5.5} xl={6} className="searchContainer">
          <div id="search" className="flex-container-row">
            <Autocomplete
              disablePortal
              id="searchField"
              options={newsSources}
              sx={{ width: "100%" }}
              onChange={(event, value) => {
                console.log(value);
                setCategory(value.label.toLowerCase());
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Search the Latest News"
                />
              )}
              onClick={(category) => {
                console.log(category);
              }}
            />
            <Button
              id="searchBtn"
              type="submit"
              startIcon={<SearchIcon />}
              sx={{ m: "10px" }}
              variant="outlined"
              aria-label="search"
              color="primary"
              onClick={() => {
                console.log("aft submit", category);
                props.search(category);
              }}
            >
              Search
            </Button>
          </div>
        </Grid>

        {/* Buttons */}
        <Grid
          item
          xs={2}
          sm={2}
          md={3}
          lg={2.5}
          xl={2.5}
          display={{ sm: "flex", md: "block" }}
          className="headerBtns"
        >
          <div>
            <BottomNavigation
              showLabels
              value={value}
              color="secondary"
              id="navigation"
              onChange={(event, value) => {
                setValue(value);
              }}
            >
              <BottomNavigationAction label="Latest" onClick={props.onToggle} icon={<NewspaperIcon />} />
              
             
              <BottomNavigationAction
                onClick={props.getFavorite}
                label="Favorite"
                icon={<FavoriteIcon />}
              />
              
            

              <BottomNavigationAction
                label="Weather"
                icon={<WeatherIcon />}
                onClick={props.onToggle}
              />
            </BottomNavigation>
          </div>
        </Grid>

        <Divider orientation="vertical" flexItem className="divider" />

        {/* User */}
        <Grid item xs={4} sm={1} md={1} lg={0.7} xl={0.7}>
          {loggedIn && (
            <Badge
              color="error"
              badgeContent={5}
              showZero
              display={{ xs: "none", md: "none", lg: "block" }}
              className="desktopAvatar"
            >
              <AccountMenu />
            </Badge>
          )}
          {!loggedIn && <Login />}
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default Header;

const newsSources = [
  { label: "Popular" },
  { label: "Business" },
  { label: "Entertainment" },
  { label: "Health" },
  { label: "Science" },
  { label: "Sports" },
  { label: "Technology" },
  { label: "Apple" },
  { label: "Microsoft" },
  { label: "Automotive" },
  { label: "Movies" },
  { label: "Weather" },
  { label: "Kanye West" },
  { label: "Kim Kardashian" },
  { label: "Crypto" },
  { label: "Gaming" },
  { label: "Fortnite" },
  { label: "Ferrari" },
  { label: "Banking" },
  { label: "Women" },
  { label: "Mens Health" },
  { label: "Feminism" },
  { label: "Womens Health" },
  { label: "Porsche" },
  { label: "Ford" },
  { label: "Mclaren" },
  { label: "Comedy" },
  { label: "Nike" },
  { label: "Memes" },
  { label: "Software" },
  { label: "Hockey" },
  { label: "Basketball" },
  { label: "Baseball" },
  { label: "Curling" },
  { label: "Olympics" },
  { label: "Climate Change" },
  { label: "Playoffs" },
  { label: "NHL" },
  { label: "Fitness" },
  { label: "NASA" },
  { label: "Space" },
  { label: "Food" },
  { label: "Coronavirus" },
  { label: "Ebola" },
  { label: "World News" },
  { label: "Coke" },
  { label: "Hello Kitty" },
  { label: "DragonBall Z" },
  { label: "Andy Lindsay" },
  { label: "Lighthouse Labs" },
  { label: "Quantum Physics" },
  { label: "007" },
  { label: "Numerology" },
  { label: "Cancer" },
  { label: "Astrology" },
  { label: "Chef" },
  { label: "Fibonachi" },
  { label: "Calgary" },
  { label: "Vancouver" },
  { label: "Hire me" },
  { label: "Womens Rights" },
  { label: "Mens Rights" },
  { label: "Calgary Flames" },
  { label: "Dallas Stars" },
  { label: "Edmontom" },
  { label: "Edmontom Oilers" },
  { label: "Battle of Alberta" },

];
