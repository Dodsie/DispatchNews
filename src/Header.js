// Components
import * as React from 'react'; // for state control here (refactorable in future)

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

// Navigation
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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


function Header() {
  const [value, setValue] = React.useState(0);


  return (
    <header className="animate__animated animate__backInDown">
      
      <Stack 
        direction="row" // assigns stack row position
        justifyContent="space-around" // Flex
        alignItems="center" // Flex
        divider={<Divider orientation="vertical" flexItem />} // adds a divider between each item inside the stack
        spacing={2} // adds a spacing of 2 between each item
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
            color="primary"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
      </div>

        <div id="search" className="flex-container-row">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={newsSources}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search the latest News Categories" />}
          />

          <Button
            type="submit" 
            startIcon={<SearchIcon />}
            sx={{ m: '10px' }} 
            variant="outlined" 
            aria-label="search" 
            color="primary"
          >Search</Button>
        </div>

        <div>
          <Badge color="primary" badgeContent={5} showZero>
            <MailIcon />
          </Badge>
        </div>

        <div className="flex-container-row">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Username" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
        </div>
      </Stack>
    </header>
  );
}
export default Header

const newsSources = [
  { label: 'Popular'},
  { label: 'Business'},
  { label: 'Entertanment'},
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