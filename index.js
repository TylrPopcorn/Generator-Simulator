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
//----

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
