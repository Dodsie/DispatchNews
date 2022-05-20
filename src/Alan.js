
// import {useEffect, useRef} from 'react';
// import alanBtn from '@alan-ai/alan-sdk-web';

// export default function useAlan(callback) {
    
//     const alanBtnInstance = useRef(null);
    
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


// onCommand: ({ command, articles }) => {
//   console.log(articles)
//   if (command === "newsFromSource") {
//     setNewsArticles(articles);
//     console.log(newsArticles)
//   }
// },