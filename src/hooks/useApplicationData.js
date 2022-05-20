import {useState, useEffect, useRef} from "react";
import axios from "axios";
import alanBtn from "@alan-ai/alan-sdk-web";


export default function useApplicationData() {

const [newsArticles, setNewsArticles] = useState([]);
const [favArticles, setFavArticles] = useState([]);
const [mode, setMode] = useState(false);
const [user_id, setUser_id] = useState(1);

// const getPopular = async () => {
//   window.location.href="/"
// };


//  const useAlan = (callback) => {
    

    
//     useEffect(()=>{
//      if (!alanBtnInstance.current) {
//        alanBtnInstance.current = alanBtn({
//        key: process.env.REACT_APP_ALAN_KEY,
//        onCommand:async(data)=>{
//        console.log(data)
//       },
//      })
//      }
//     },[])
    
//   return null;
// }


const alanBtnInstance = useRef(null);
useEffect(() => {
  const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
  let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ca${apiKey}`;
  console.log('alanButton',alanBtnInstance.current)
  if (!alanBtnInstance.current) {
    alanBtnInstance.current = alanBtn({
    key: process.env.REACT_APP_ALAN_KEY,
    onCommand:async({ command, articles })=>{
        console.log(articles)
        if (command === "newsFromSource") {
          setNewsArticles(articles);
          console.log(newsArticles)
   }}
  })
}
}, []);
  // alanBtn({
  //   key: process.env.REACT_APP_ALAN_KEY,
    // onCommand: ({ command, articles }) => {
    //   console.log(articles)
    //   if (command === "newsFromSource") {
    //     setNewsArticles(articles);
    //     console.log(newsArticles)
  //     }
  //   },
  // });
//   Promise.all([
//     axios.get(NEWS_API_URL),
//     axios.get("http://localhost:3001/favorite/1/"),
//   ]).then((all) => {
//     setNewsArticles(all[0].data.articles);
//     setFavArticles(all[1].data);
//     console.log(newsArticles);
//     console.log('fav',favArticles);
//   })
//   .catch((error) => {
//     console.log(error.response.status)
//   });
// }, []);






//Helpers and querys
const toggleWeather = () => {
  console.log(mode);
  setMode(!mode);
};


// const searchQuery = (query) => {
//   const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
//   const language = "&language=en";
//   let searchQuery = `q=${query}`;
//   let NEWS_API_URL = `https://newsapi.org/v2/everything?${searchQuery}${language}${apiKey}`;

//   axios.get(NEWS_API_URL).then((res) => {
//     const newsApi = res.data;
//     setNewsArticles(newsApi.articles);
//   });
// };

// const getFavorite = (event) => {
//   event.preventDefault()
//   window.location.href="/favorites"
// }



const addFavorite = async (article_id) => {
  console.log("newsArticles", newsArticles);
  const x = newsArticles.length > 0 && newsArticles[article_id];
  return axios
    .post(`http://localhost:3001/addfav/${user_id}`, {
      author: x.author,
      content: x.content,
      description: x.description,
      publishedAt: x.publishedAt,
      source: x.source.name,
      title: x.title,
      url: x.url,
      urlToImage: x.urlToImage,
    })
    .then((response) => {
      console.log("res", response.config.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};


const deleteFavorite = async (publishedat) => {
  axios
  .delete(`http://localhost:3001/delete/${user_id}/${publishedat}/`)
  .then((response) => {
    console.log("res", response+"deleted");
  })
  .catch(function (error) {
    console.log(error);
  });
}



return {favArticles, newsArticles, mode, user_id, toggleWeather, addFavorite, deleteFavorite}


}