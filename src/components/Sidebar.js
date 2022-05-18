import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Sidebar = () => {
  return (
    <div className="whosOnline">
      <div>
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
      </div>

      <div>
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
      </div>
    </div>
  );
};

const savedNews = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

export default Sidebar;
