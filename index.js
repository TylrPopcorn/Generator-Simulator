//Generator Simulator. 3 Generators combined into 1 website.
//imports:]--
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
 Dependencies:
 -------------
 npm install react
 npm install parcel-bundler
 npm install react-router-dom
*/

//components:]--
import Redirect from "./src/Redirect";
//----
import HOME from "./src/HOME";
import NumberGenerator from "./simulators/Number/NumberGenerator";
import MyContextProvider from "./state/Context";
//---
import { MyContext } from "./state/Context.js"; //global state / reducer

//vars:
//----

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextProvider>
    <BrowserRouter>
      {/* LOGOUT BUTTON WOULD GO HERE*/}
      {/*----------------------------*/}
      {/*----------         ---------*/}
      {/*----------------------------*/}
      <Routes>
        {/* ROUTES */}
        <Route path="/" element={<HOME MyContext={MyContext} />} />
        <Route exact path="Number" element={<NumberGenerator />} />

        {/* ----- Catch all unknown pages ----- */}
        <Route path="*" element={<Redirect />} />
        {/*----------------------------*/}
      </Routes>
    </BrowserRouter>
  </MyContextProvider>
);
