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
        {/*----------*/}
        <p className="heading">Choose an option</p>
        <div className="boxOptions">
          <button className="Letter_Option">Letter</button>
          <button className="Number_Option">Number</button>
          <button className="Word_Option">Word</button>
        </div>
        <p className="InfoBox"> INFORMATION </p>
      </div>
    );
  }
}

//

//EXPORTS:----------
export default HOME;
