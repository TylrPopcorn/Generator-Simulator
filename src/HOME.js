import React from "react";

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
        <p>HI</p>
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
