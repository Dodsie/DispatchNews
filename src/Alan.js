
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

export default function Alan() {
    useEffect(() => {
    alanBtn({
      // key:'1c9f6524fef4a6b82540fef7e85415ab2e956eca572e1d8b807a3e2338fdd0dc/stage',
      key:process.env.REACT_APP_ALAN_KEY,
      onCommand: (commandData) => {
        console.log(commandData)
      }
    });
  }, []);
  return 
}