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
    //Each time the mouse enters
    const button = event.currentTarget;

    Functions.mouse["Entered"](event);
    this.setState({ mouseEntered: true, mouseEvent: button.id });

    wait(900).then(() => {
      //check if mouse still entered
      if (this.state.mouseEntered === true) {
        const optionTitle = document.getElementById("optionTitle");
        const infotext = document.getElementById("InfoBox");

        if (this.state.mouseEvent === button.id) {
          optionTitle.classList.add(button.id);
          optionTitle.classList.remove("Hide");

          infotext.classList.remove("Hide");
          infotext.classList.add(button.id);

          //add corresponding information to the info box:
          infotext.textContent = this.state[button.id];
        }
      }
    });
  };

  MouseLeave = (event) => {
    this.setState({ mouseEntered: false, mouseEvent: "" });
    Functions.mouse["Left"](event);
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
