import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

//imports:]----
import LetterGenerator from "../simulators/LetterGenerator";

let Test;
//MAIN FUNCTION]:----------
class HOME extends React.Component {
  //
  //
  //   constructor(props) {
  //     super(props); //Allow access to 'this.props'
  //   }

  //---HTML
  render() {
    return (
      <div id="wrapper" className="App">
        <Routes>
          {/* ROUTES */}
          <Route path="/" element={<Test />} />
        </Routes>
      </div>
    );
  }
}

//

Test = class extends React.Component {
  render() {
    return (
      <div>
        <p>HI</p>
      </div>
    );
  }
};
//EXPORTS:----------
export default HOME;
