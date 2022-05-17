import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  const transition = ((value, replace = false) => {
    if (replace) {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory[1] = value;
        setMode(value);
        return newHistory;
      });
      return;
    }
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.push(value);
      return newHistory;
    });
    setMode(value);
  });

  const back = (() => {
    if (history.length === 1) {
      return;
    }
    setHistory((presentState) => {
      const newHistory = [...presentState];
      newHistory.pop();
      setMode(newHistory[newHistory.length - 1]);
      return newHistory;
    })
  })
  return {mode, transition, back};
};