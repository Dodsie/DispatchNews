// import * as React from "react";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

// Chat
import "../../styles/Chat.scss";
import io from "socket.io-client";
import Chat from "../../Chat";

const socket = io.connect("http://localhost:3002");
//Chat end

<<<<<<< HEAD
<<<<<<< HEAD
const Sidebar = () => {
=======




const Sidebar = () => {


>>>>>>> c3fee01d8962d6530f7288200f4cd9cfec87264c
=======
const Sidebar = () => {
>>>>>>> c38c97ea6e3a7839f7a41a5b364899eab88e31ba
  // Chat function
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> c3fee01d8962d6530f7288200f4cd9cfec87264c
=======
>>>>>>> c38c97ea6e3a7839f7a41a5b364899eab88e31ba

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  // Chat function end

<<<<<<< HEAD
<<<<<<< HEAD
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
            <input
              type="text"
              placeholder="Room ID"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat key="" socket={socket} username={username} room={room} />
        )}
      </div>
    </div>
=======
  

=======
>>>>>>> c38c97ea6e3a7839f7a41a5b364899eab88e31ba
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
            <input
              type="text"
              placeholder="Room ID"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat key="" socket={socket} username={username} room={room} />
        )}
      </div>
    </div>
<<<<<<< HEAD
  </div>


>>>>>>> c3fee01d8962d6530f7288200f4cd9cfec87264c
=======
>>>>>>> c38c97ea6e3a7839f7a41a5b364899eab88e31ba
  );
};

// const savedNews = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//   },
// ];

export default Sidebar;
