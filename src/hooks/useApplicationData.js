import { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import { useNavigate } from "react-router-dom";

export default function useApplicationData() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [favArticles, setFavArticles] = useState([]);
  const [mode, setMode] = useState(false);
  const [user_id, setUser_id] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ca${apiKey}`;
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles, number }) => {
        /* Switch Cleaned up */
        switch (command) {
          case "newsFromSource":
            setNewsArticles(articles);
            break;
          case "newHeadlines":
            setNewsArticles(articles);
            setActiveArticle(-1);
            break;
          case "instructions":
            setIsOpen(true);
            break;
          case "highlight":
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            break;
          case "open":
            const parsedNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;

            const article = articles[parsedNumber - 1];

            if (parsedNumber > articles.length) {
              alanBtn().playText("Please try that again...");
            } else if (article) {
              window.open(article.url, "_blank");
              alanBtn().playText("Opening...");
            } else {
              alanBtn().playText("Please try that again...");
            }
            break;

          default:
            break;
        }
        /* Switch Cleaned up */
      },
    });
  }, []);

  //Helpers and querys
  const toggleWeather = () => {
    console.log(mode);
    setMode(!mode);
  };
}
