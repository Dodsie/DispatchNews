
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

export default function Alan() {
    useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: (commandData) => {
        console.log(commandData)
      }
    });
  }, []);
  return 
}