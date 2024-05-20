import React from "react";
// THIS IS THE HOME SCREEN

//imports:]--
import "../styles/home.css";
import wait from "./scripts/wait";
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

    console.log(event.target);
    this.setState({ mouseEntered: true });
    wait(900).then(() => {
      //check if mouse still entered
      if (this.state.mouseEntered === true) {
        const optionTitle = document.getElementById("optionTitle");
        optionTitle.classList.remove("Hide");
      }
    });
  };

  MouseLeave = (event) => {
    const button = event.currentTarget;
    button.classList.add("Shrink");

    this.setState({ mouseEntered: false });
    const optionTitle = document.getElementById("optionTitle");
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
            id="Letter_Option"
            className="Shrink"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
          <button
            id="Number_Option"
            className=""
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
          <button
            id="Word_Option"
            className="Shrink"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
        </div>
        <p id="optionTitle" className="Hide">
          TITLE
        </p>
        <p id="InfoBox" className="Hide">
          INFORMATION {/* TODO */}
        </p>
      </div>
    );
  }
}
//
//--------------            --------------          ----------------        -----------------       -------------------

//EXPORTS:----------
export default HOME;
