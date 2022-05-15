
import React, { useState } from 'react';
import Header from './Header';
import Alan from './Alan';
import Weather from './components/Weather';
import "./styles/index.scss";
import Weather from './Weather';
import NewsCards from './components/NewsCards/NewsCards';
const newsCards = [
  { header: 'CNN', index: 1, description: "This is description 1"},
  { header: 'Reddit', index: 2, description: "This is description 2"},
  { header: 'Yahoo', index: 3, description: "This is description 3"},
  { header: 'Google', index: 4, description: "This is description 4"},
];

function App() {

  const [newsArticles, setNewsArticles] = useState([]);

  return (
    <main>
      <Alan />
      <Header />
      <div className="flex-container-row">
        <div>
          <NewsCards articles={newsCards}/>
        </div>
        <div>
        <Weather />
        </div>
      </div>
    </main>
  );
}

export default App;
