import React from "react";
// THIS IS THE HOME SCREEN

//imports:]--
import "../styles/home.css";
import wait from "./scripts/wait";
import Functions from "./scripts/Functions";

//vars:]--------
let vars = {
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
      mouseEntered: false, //used to determine if the mouse has enetered a button or not.\
      mouseEvent: "", //Used for mouse title option debounce

      Letter_Option: "Generate a random letter",
      Number_Option: "Generate a random number",
      Word_Option: "Generate a random word",
    };
  }

  MouseEnter = (event) => {
    //Each time the mouse enters a button
    const button = event.currentTarget;
    Functions.mouse["Entered"](button);
  };

  MouseLeave = (event) => {
    //Each time the mouse leaves a button
    const button = event.currentTarget;
    Functions.mouse["Left"](button);
  };

  componentDidMount() {
    Functions["componentDidMount"]();
  }

  //---HTML
  render() {
    return (
      <div id="wrapper" className="App">
        {/*---- TITLE ----*/}
        <h1 className="title" data-text={vars.TITLE}>
          {vars.TITLE}
        </h1>

        {/*----------*/}
        <p className="heading">Choose an option</p>
        <div className="boxOptions">
          <button
            id="Letter_Option"
            className="Shrink 1"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
          <button
            id="Number_Option"
            className="2"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
          <button
            id="Word_Option"
            className="Shrink 3"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
        </div>
        <p id="optionTitle" className="">
          TITLE
        </p>
        <p id="InfoBox" className="">
          INFORMATION
        </p>
      </div>
    );
  }
}
//
//--------------            --------------          ----------------        -----------------       -------------------

//EXPORTS:----------
export default HOME;
