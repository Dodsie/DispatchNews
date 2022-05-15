
import React, { useState, useEffect} from 'react';
import Header from './Header';
import Weather from './components/Weather';
import "./styles/index.scss";
import NewsCards from './components/NewsCards/NewsCards';
import alanBtn from "@alan-ai/alan-sdk-web";

// const newsCards = [
//   { header: 'CNN', index: 1, description: "This is description 1"},
//   { header: 'Reddit', index: 2, description: "This is description 2"},
//   { header: 'Yahoo', index: 3, description: "This is description 3"},
//   { header: 'Google', index: 4, description: "This is description 4"},
// ];

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
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
  console.log(newsArticles)
  return (
    <main>
      <Header />
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
