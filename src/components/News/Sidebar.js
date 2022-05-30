import React, { useState, useEffect } from "react";

// Chat
import "../../styles/Chat.scss";
import io from "socket.io-client";
import Chat from "../../Chat";
//Chat end


// Drop down rooms
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const socket = io.connect("http://localhost:3002");
// end


const Sidebar = () => {
  // Chat function
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  // Chat function
  return (
    <div className="whosOnline">
      <div className="Chat">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Chat</h3>
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Room</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={room}
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={10}>Popular</MenuItem>
                <MenuItem value={20}>Tech</MenuItem>
                <MenuItem value={30}>Health</MenuItem>
                <MenuItem value={40}>Science</MenuItem>
                <MenuItem value={50}>Business</MenuItem>
                <MenuItem value={60}>Entertainment</MenuItem>
                <MenuItem value={70}>Just Chatting</MenuItem>
              </Select>
            </FormControl>


            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat key="" socket={socket} username={username} room={room} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
