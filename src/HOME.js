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
  constructor(props) {
    super(props); // Allow access to 'this.props'
  }

  MouseEnter = (event) => {
    const button = event.currentTarget;
    button.classList.remove("Shrink");
  };

  MouseLeave = (event) => {
    const button = event.currentTarget;
    console.log("left");
    button.classList.add("Shrink");
  };

  componentDidMount() {
    const boxOptionsElements = document.querySelectorAll(".boxOptions");

    boxOptionsElements.forEach((box) => {
      const letterOptionElements = box.querySelectorAll("[class*='_Option']");
      letterOptionElements.forEach((element) => {
        element.classList.add("Shrink");
      });
    });
  }

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
          <button
            className="Letter_Option Shrink"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
          <button
            className="Number_Option"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
          <button
            className="Word_Option Shrink"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
        </div>
        <p className="chosenTitle">TITLE</p>
        <p className="InfoBox"> INFORMATION </p>
      </div>
    );
  }
}

//

//EXPORTS:----------
export default HOME;
