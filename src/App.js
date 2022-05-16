
import React, { useState, useEffect} from 'react';
import Header from './Header';
import Weather from './components/Weather';
import "./styles/index.scss";
import NewsCards from './components/NewsCards/NewsCards';
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from 'axios';
// import search from './helpers/searchBar';
// const newsCards = [
//   { header: 'CNN', index: 1, description: "This is description 1"},
//   { header: 'Reddit', index: 2, description: "This is description 2"},
//   { header: 'Yahoo', index: 3, description: "This is description 3"},
//   { header: 'Google', index: 4, description: "This is description 4"},
// ];

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  const search = (query) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_KEY}&category=${query}&language=en`
    axios.get(NEWS_API_URL).then(res => {console.log('res.data',res.data)
      const articles = res.data
      console.log('articles',articles)
      setNewsArticles(articles.articles) });
    
    };
  console.log(newsArticles)

  useEffect(() => {
    alanBtn({
      key:process.env.REACT_APP_ALAN_KEY,
      onCommand: ({command, articles}) => {
        if (command === 'newsFromSource') {
          setNewsArticles(articles);
          console.log(newsArticles)
        }
      }
    });
  }, []);
  return (
    <main>
      <Header search={search}/>
      <Weather />
      <div id="latestNews">
        <div>
          <NewsCards articles={newsArticles}/>
        </div>
      </div>
    </main>
  );
}

export default App;
