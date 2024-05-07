import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/styles.css";

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
    {/* LOGOUT BUTTON WOULD GO HERE*/}
    {/*----------------------------*/}
    {/*----------         ---------*/}
    {/*----------------------------*/}
    <Routes>
      {/* ROUTES */}
      <Route path="/" element={<HOME />} />
    </Routes>
  </BrowserRouter>
);
