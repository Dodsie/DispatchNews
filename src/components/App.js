import React from "react";
import "../styles/index.scss";
import "../styles/Sidebar.scss";
import NewsCards from "./News/NewsCards";
import FavoriteNewsCards from "./News/FavoriteNewsCards";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
            
            <Route path="/" element={<NewsCards />}/>
            <Route path="/favorites" element={<FavoriteNewsCards/>}/>
            
    </Routes>
    </BrowserRouter>

  );
}

export default App;
