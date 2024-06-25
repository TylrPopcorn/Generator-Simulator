import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// THIS IS THE HOME SCREEN

//imports:]--
import "../styles/home.css";
import Functions from "./scripts/Functions.ts";
import { MyContext } from "../state/Context.js";

//vars:]--------
let vars = {
  TITLE: "GENERATOR SIMULATOR" /* Title of the page */,

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
  static contextType = MyContext;

  MouseClicked = (event) => {
    //Each time a button gets clicked on.
    const button = event.currentTarget;
    const { data, Dispatch } = this.context; // Get the updateData function from the context
    const navigate = useNavigate();

    const test = function () {
      navigate("/"); //navigate back to homepage
    };

    const success = Functions["mouseClicked"]();
    if (success === true) {
      console.log(button.id);

      Dispatch({ ...data, [button.id]: true });
      console.log(data);
      test();
    }
  };

  MouseEnter = (event) => {
    //Each time the mouse enters a button
    const button = event.currentTarget;
    Functions["mouseEntered"](button);
  };

  MouseLeave = (event) => {
    //Each time the mouse leaves a button
    const button = event.currentTarget;
    Functions["mouseLeft"](button);
  };

  componentDidMount() {
    //useEffect() each time the component mounts.
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
            onClick={this.MouseClicked}
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
