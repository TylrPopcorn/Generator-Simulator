import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

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
// const TITLE = "GENERATOR SIMULATOR"; /* Change the title to whatever */
//  <h1 className="title" data-text={TITLE}>
//    {TITLE}
//  </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
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
