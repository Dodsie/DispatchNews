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
import axios from "axios";


function App() {
  
  const INITIAL = "INITIAL";
  const FAV = "FAV";
  const SEARCH = "SEARCH"

  const [update, setUpdate] = React.useState(false);
  const [news, setNews] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [mode, setMode] = React.useState(INITIAL);
  const [weather, setWeather] = React.useState(false)

  function ConvertKeysToLowerCase(obj) {
    var output = {};
    for (let i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
           output[i.toLowerCase()] = ConvertKeysToLowerCase(obj[i]);
        }else if(Object.prototype.toString.apply(obj[i]) === '[object Array]'){
            output[i.toLowerCase()]=[];
             output[i.toLowerCase()].push(ConvertKeysToLowerCase(obj[i][0]));
        } else {
            output[i.toLowerCase()] = obj[i];
        }

    }
    return output;
};


  React.useEffect(() => {
    console.log('I re-rendered!')
  }, [update]);

  React.useEffect(() => {
    const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
    let didCancel = false;

    async function fetchNews() {
      let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ca${apiKey}`;
      if (!didCancel) {
        let response = await axios.get(NEWS_API_URL);
        let data = await Object.values(ConvertKeysToLowerCase(response.data.articles))
        console.log('data', data)
        setNews(data)
      }
    }

    async function fetchSearch(x) {
      const language = "&language=en";
      let searchQuery = `q=${x}`;
      let NEWS_API_URL = `https://newsapi.org/v2/everything?${searchQuery}${language}${apiKey}`;
      if (!didCancel) {
        let response = await axios.get(NEWS_API_URL);
        let data = await Object.values(ConvertKeysToLowerCase(response.data.articles))
        console.log('afterfunction',data)
        setNews(data)
      }
    }

    async function favSearch() {
      let NEWS_API_URL = `http://localhost:3001/favorite/1/`;
      if (!didCancel) {
        let response = await axios.get(NEWS_API_URL);
        let data = await response.data
        setNews(data)
      }
    }

    if (mode === INITIAL) {
      fetchNews() 
  }

    if (mode === SEARCH) {
      fetchSearch(search)
    }
    if (mode === FAV) {
      favSearch()
    }
    return () => {
     didCancel = true
    }
  }, [update])


  const popularNews = () => {
    setMode(INITIAL)
    setUpdate((prevState) => !prevState)
    
  };

  const searchBar = (query) => {
    setSearch(query)
    setMode(SEARCH)
    setUpdate((prevState) => !prevState)
  }

  const favoriteToggle = () => {
    setMode(FAV)
    setUpdate((prevState) => !prevState)
    
  }

  return (
    <BrowserRouter>
    <Routes>
            
            <Route path="/" element={<NewsCards news={news} toggleUpdate={popularNews} query={searchBar} fav={favoriteToggle}/>}/>
            <Route path="/favorites" element={<FavoriteNewsCards />}/>
            
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
