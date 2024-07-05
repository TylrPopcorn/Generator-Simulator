import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// THIS IS THE HOME SCREEN

//imports:]--
import "../styles/home.css";
import Functions from "./scripts/Functions.ts"; //functions corresponding to THIS section

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
function HOME(props) {
  //
  //
  const { MyContext } = props;
  const { data, Dispatch } = useContext(MyContext);
  const navigate = useNavigate();

  //---FUNCTIONS:
  const MouseClicked = (event) => {
    //Each time a button gets clicked on.
    const button = event.currentTarget;

    const success = Functions["mouseClicked"]();
    if (success === true) {
      console.log(button.id);

      Dispatch({ ...data, [button.id]: true });
      console.log(data);

      navigate("/number");
    }
  };

  const MouseEnter = (event) => {
    //Each time the mouse enters a button
    const button = event.currentTarget;
    Functions["mouseEntered"](button);
  };

  const MouseLeave = (event) => {
    //Each time the mouse leaves a button
    const button = event.currentTarget;
    Functions["mouseLeft"](button);
  };

  useEffect(() => {
    //useEffect() each time the component mounts.
    {
      Functions["componentDidMount"]();
    }
  }, []);

  //---HTML:
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
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
        >
          <span></span>
        </button>
        <button
          id="Number_Option"
          className="2"
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          onClick={MouseClicked}
        >
          <span></span>
        </button>
        <button
          id="Word_Option"
          className="Shrink 3"
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
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
//--------------            --------------          ----------------        -----------------       -------------------

//EXPORTS:----------
export default HOME;
