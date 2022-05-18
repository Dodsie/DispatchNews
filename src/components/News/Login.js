import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from "@mui/icons-material/VpnKey";
import EmailIcon from "@mui/icons-material/AlternateEmailSharp";
import Slide from "@mui/material/Slide";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginForm = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1"); // Tabs

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid item md={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              onClick={handleClickOpen}
              alt="Username"
              src="/static/images/avatar/1.jpg"
            />
          </StyledBadge>

          <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClose}
          >
            <TabContext value={value}>
              <div>
                <TabList
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                  aria-label="Login or Register"
                >
                  <Tab label="Login" value="1" />
                  <Tab label="Register" value="2" />
                </TabList>
              </div>

              <TabPanel value="1">
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    variant="filled"
                    margin="dense"
                    id="userEmail"
                    label="Email Address"
                    type="email"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="filled"
                    margin="dense"
                    id="userPassword"
                    label="Password"
                    type="password"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LoginIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </DialogContent>

                <DialogActions>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    color="success"
                    variant="contained"
                    onClick={handleClose}
                    style={{ width: "88px" }}
                  >
                    Login
                  </Button>
                </DialogActions>
              </TabPanel>

              <TabPanel value="2">
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    variant="filled"
                    margin="dense"
                    id="userEmail"
                    label="Email Address"
                    type="email"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="filled"
                    margin="dense"
                    id="userPassword"
                    label="Password"
                    type="password"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LoginIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </DialogContent>

                <DialogActions>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClose}
                    style={{ width: "88px" }}
                  >
                    Sign Up
                  </Button>
                </DialogActions>
              </TabPanel>
            </TabContext>
          </Dialog>
        </Stack>
      </Grid>
    </>
  );
};

export default LoginForm;
