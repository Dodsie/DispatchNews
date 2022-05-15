
import React, { useState } from 'react';
import Header from './Header';
import Alan from './Alan';
import "./styles/index.scss";
import Weather from './Weather';
import NewsCards from './components/NewsCards/NewsCards';
const newsCards = [
  { article: 'CNN', index: 1},
  { article: 'Reddit', index: 2},
  { article: 'Yahoo', index: 3},
  { article: 'Google', index: 4},
];

function App() {

  const [newsArticles, setNewsArticles] = useState([]);

  return (
    <main>
      <Alan />
      <Header />
      <Weather />
      <NewsCards articles={newsCards}/>
      
    </main>
  );
}

export default App;
