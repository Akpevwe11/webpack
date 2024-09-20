import React from "react";
import { createRoot } from 'react-dom/client';
import './style.css';


const Greeting = () => {
  return (
    <div>
      <h1>Hello, World From React!</h1>
      <div id="image"></div>
    </div>
  )
}

const rootElement = document.getElementById("target");
const root = createRoot(rootElement);
root.render(<Greeting />);