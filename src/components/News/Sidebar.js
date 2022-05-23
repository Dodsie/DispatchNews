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
      {/* <div>
        <h3>Members Online</h3>

        <AvatarGroup total={23}>
          <Avatar
            sx={{ bgcolor: "blue" }}
            alt="Alastair Gardiner"
            title="Alastair Gardiner"
            // src="https://dummyimage.com/128x128/000/fff"
          >
            A
          </Avatar>
          <Avatar
            sx={{ bgcolor: "orange" }}
            alt="Bailey Dods"
            title="Bailey Dods"
            // src="https://dummyimage.com/128x128/000/fff"
          >
            B
          </Avatar>
          <Avatar
            sx={{ bgcolor: "green" }}
            alt="Matt Seligman"
            title="Matt Seligman"
            src="https://miro.medium.com/max/3150/1*viXH3NRitgU2w5qBzh0BpA.jpeg"
          >
            M
          </Avatar>
        </AvatarGroup>
      </div> */}

      <div>


      </div>


      {/* <div>
        <h3>Saved News</h3>
        <ImageList
          sx={{
            width: "auto",
            height: "50vh",
            borderRadius: "1em",
            border: "1px solid lightgray",
          }}
          cols={2}
          rowHeight={164}
        >
          {savedNews.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div> */}



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
        <Chat key='' socket={socket} username={username} room={room} />
      )}
    </div>
  </div>


  );
};



export default Sidebar;
