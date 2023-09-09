import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Posts from "./Posts";

function App() {
  return (
    <>
      <h3>React Core Concepts Recap</h3>
      <ol>
        <li>Components</li>
        <li>jsx</li>
        <li>props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Effect(Data loading)</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  );
}

export default App;
