//N U M B E R   G E N E R A T O R
//--------------------------------
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//imports:]--
import Functions from "./scripts/Functions.ts";
import { MyContext } from "../../state/Context";
import wait from "./scripts/wait";

//styles:]--
import "../../styles/styles.css";
import "../../styles/number.css";

//vars:]--------
let vars = {
  TITLE: "NUMBER GENERATOR" /* Title of the page */,

  //--add more variables here:--
  //--
  //--
};

//------[ MAIN COMPONENT ]------\\
function NumberGenerator() {
  //-----vars:
  const [letterGenerating, setLetterGenerating] = useState(false); //debounce.
  const { data, Dispatch } = useContext(MyContext); //global state
  const navigate = useNavigate(); //Used to redirect the user.

  //Each time the button gets clicked on.
  //---------------------
  const Clicked = () => {
    if (letterGenerating === false) {
      setLetterGenerating(true);

      const randomNumber = Math.floor(Math.random() * 100) + 1; //generate a random number
      Dispatch({ currentNumber: randomNumber });

      Functions["Clicked"](); //fx.

      wait(1700).then(() => {
        setLetterGenerating(false);
      });
    }
  };

  //Each time the page loads.
  //--------------------
  useEffect(() => {
    //authentication check:
    if (data.Number_Option === false) {
      navigate("/");
    }
  });

  //----HTML: -----------
  return (
    <div id="wrapper" className="App">
      {/*---- TITLE ----*/}
      <h1 className="title" data-text={vars.TITLE}>
        {vars.TITLE}
      </h1>
      <p className="heading">Generate a random number</p>

      {/*---- NUMBER AREA ---- */}
      <div className="NumberArea">
        <div className="NumberHolder">
          <p className="randomNumber">{data.currentNumber}</p>
        </div>
      </div>

      {/*---- BUTTON ----*/}
      <div className="ButtonHolder">
        <button className="GenerateButton" onClick={Clicked}>
          Generate
        </button>
      </div>

      {/*---- BOTTOM TEXT ----*/}
      <div className="BottomFrame">
        <p>Click the button above to generate a random number</p>
      </div>
    </div>
  );
}

//---  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//---[ EXPORTS ]---\\
export default NumberGenerator;
//-------------------
