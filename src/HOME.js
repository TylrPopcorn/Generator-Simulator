import React from "react";
// THIS IS THE HOME SCREEN

//imports:]--
import "../styles/home.css";

//vars:]--------
const TITLE = "GENERATOR SIMULATOR"; /* Change the title to whatever */

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
        {/*---- TITLE ----*/}
        <h1 className="title" data-text={TITLE}>
          {TITLE}
        </h1>
        <a href="#">
          <span>Button</span>
        </a>

        {/*----------*/}
        <p className="heading">Choose an option</p>
        <div className="boxOptions">
          <button className="Letter_Option">
            <span>Letter</span>
          </button>
          <button className="Number_Option">
            <span>Number</span>
          </button>
          <button className="Word_Option">
            <span>Word</span>
          </button>
        </div>
        <p className="InfoBox"> INFORMATION </p>
      </div>
    );
  }
}

//

//EXPORTS:----------
export default HOME;
