// Components
import * as React from 'react'; // for state control here (refactorable in future)

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

// Navigation
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WeatherIcon from '@mui/icons-material/WbSunny';

// LottiePlayer
import { Player } from '@lottiefiles/react-lottie-player';

// CSS
import "./styles/Header.scss";

// Animate.css
import 'animate.css';

// Search
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/TravelExplore';
import Button from '@mui/material/Button';

// Avatar
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

// Notifications
import MailIcon from '@mui/icons-material/Mail';

// Theme
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Theme Style
const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee',
    },
    secondary: {
      main: '#0044ff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});


function Header(props) {
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState('')
  console.log('init category', category)
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="animate__animated animate__backInDown">
        <Stack 
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <div className="logo-container">
            <a href="/" className="flex-container-row">
              <Player
                autoplay
                id="logo"
                src="https://assets2.lottiefiles.com/private_files/lf30_iqdiamlq.json" // https://lottiefiles.com/58907-happy-earth-day
                style={{ height: '70px', width: '70px' }}
              >
            </Player>
            <h1>DispatchNews</h1>
            </a>
          </div>
          
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
              <BottomNavigationAction label="Latest" icon={<NewspaperIcon />} />
              <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              <BottomNavigationAction label="Weather" icon={<WeatherIcon />} />
            </BottomNavigation>
          </div>

          <div id="search" className="flex-container-row">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={newsSources}
              sx={{ width: 300 }}
              onChange={(event, value) => {console.log(value)
                setCategory(value.label.toLowerCase())}}
              renderInput={(params) => <TextField {...params} label="Search the latest News Categories" />}
              onClick={(category) => { 
                console.log(category)
              }}
            />
            <Button
              id="searchBtn"
              type="submit" 
              startIcon={<SearchIcon />}
              sx={{ m: '10px' }} 
              variant="outlined" 
              aria-label="search" 
              color="primary"
              onClick={() => {
                console.log('aft submit',category)
                props.search(category)
              }}
            >Search</Button>
          </div>

          <Stack 
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={5}
          >
            <Badge color="error" badgeContent={5} showZero>
              <MailIcon />
            </Badge>
            
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="Username" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </Stack>

        </Stack>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header

const newsSources = [
  { label: 'Popular'},
  { label: 'Business'},
  { label: 'Entertainment'},
  { label: 'Health'},
  { label: 'Science'},
  { label: 'Sports'},
  { label: 'Technology'}
];


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  }
}));