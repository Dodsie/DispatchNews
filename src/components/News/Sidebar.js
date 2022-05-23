import React, { useState, useEffect } from "react";



// Chat
import "../../styles/Chat.scss";
import io from "socket.io-client";
import Chat from "../../Chat";

const socket = io.connect("http://localhost:3002");
//Chat end

const Sidebar = () => {
  // Chat function
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  // Chat function end

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
  );
};

export default Sidebar;
