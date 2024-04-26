import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
/*
 Dependencies:
 -------------
 npm install react
 npm install parcel-bundler
 npm install react-router-dom
*/
import HOME from "./src/HOME";
//
//vars:
const TITLE = "GENERATOR SIMULATOR"; /* Change the title to whatever */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <h1 className="title" data-text={TITLE}>
      {TITLE}
    </h1>

    <HOME />
  </BrowserRouter>
);
