import React from "react";
import { hot } from 'react-hot-loader/root';

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: app-1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

export default hot(App);
