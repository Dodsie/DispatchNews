import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client'
import './polyfills'  
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
  
