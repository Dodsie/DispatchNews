// Components
import * as React from "react"; // for state control here (refactorable in future)
import Divider from "@mui/material/Divider";

// Navigation
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WeatherIcon from "@mui/icons-material/WbSunny";
import Grid from "@mui/material/Grid";
import Login from "./components/Login";
import Badge from "@mui/material/Badge";

// LottiePlayer
import { Player } from "@lottiefiles/react-lottie-player";

// CSS
import "./styles/Header.scss";

// Animate.css
import "animate.css";

// Search
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/TravelExplore";
import Button from "@mui/material/Button";

function Header(props) {
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState("");

  return (
    <AppBar
      position="sticky"
      className="animate__animated animate__backInDown header"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item md={1.8} className="logo-container">
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
        <Grid item md={0.5}>
          <Badge
            color="error"
            badgeContent={5}
            showZero
            className="mobileAvatar"
          >
            <Login />
          </Badge>
        </Grid>

        <Grid item md={5} className="searchContainer">
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

        <Grid item md={2} className="headerBtns">
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
              <BottomNavigationAction label="Latest" onClick={props.getPopular} icon={<NewspaperIcon />} />
              <BottomNavigationAction
                label="Favorite"
                icon={<FavoriteIcon onClick={props.getFavorites}/>}
              />
              <BottomNavigationAction
                label="Nearby"
                icon={<LocationOnIcon />}
              />
              <BottomNavigationAction
                label="Weather"
                icon={<WeatherIcon />}
                onClick={props.onToggle}
              />
            </BottomNavigation>
          </div>
        </Grid>

        <Divider orientation="vertical" flexItem />
        <Grid item md={0.5}>
          <Badge
            color="error"
            badgeContent={5}
            showZero
            className="desktopAvatar"
          >
            <Login />
          </Badge>
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
  { label: "Drug" },
];
