//Generator Simulator. 3 Generators combined into 1 website.
//imports:]--
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//styles:]--
import "./styles/styles.css";

/*
 Dependencies:
 -------------
 npm install react
 npm install parcel-bundler
 npm install react-router-dom
*/

//components:]--
import Redirect from "./src/Redirect";
import HOME from "./src/HOME";
import LetterGenerator from "./simulators/Letter/LetterGenerator";
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
      <Route exact path="Number" element={<LetterGenerator />} />

      {/* ----- Catch all unknown pages ----- */}
      <Route path="*" element={<Redirect />} />
      {/*----------------------------*/}
    </Routes>
  </BrowserRouter>
);
