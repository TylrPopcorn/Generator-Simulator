import React from "react";
// THIS IS THE HOME SCREEN

//imports:]--
import "../styles/home.css";
import Functions from "./scripts/Functions";

//vars:]--------
let Vars = {
  TITLE: "GENERATOR SIMULATOR" /* Change the title to whatever */,

  //--add more variables here:--
  //--
  //--
};

//--------------            --------------          ----------------        -----------------       -------------------
//
//MAIN FUNCTION]:----------
class HOME extends React.Component {
  //
  //
  constructor(props) {
    super(props); // Allow access to 'this.props'

    this.state = {
      mouseEntered: false, //used to determine if the mouse has enetered a button or not.
    };
  }

  MouseEnter = (event) => {
    const button = event.currentTarget;
    button.classList.remove("Shrink");

    const optionTitle = document.getElementsByClassName("optionTitle")[0];
    optionTitle.classList.remove("Hide");
  };

  MouseLeave = (event) => {
    const button = event.currentTarget;
    button.classList.add("Shrink");

    const optionTitle = document.getElementsByClassName("optionTitle")[0];
    optionTitle.classList.add("Hide");
  };

  componentDidMount() {
    Functions["componentDidMount"]();
  }

  //---HTML
  render() {
    return (
      <div id="wrapper" className="App">
        {/*---- TITLE ----*/}
        <h1 className="title" data-text={Vars.TITLE}>
          {Vars.TITLE}
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
        <p className="optionTitle Hide">TITLE</p>
        <p className="InfoBox"> INFORMATION </p>
      </div>
    );
  }
}
//
//--------------            --------------          ----------------        -----------------       -------------------

//EXPORTS:----------
export default HOME;
