//L E T T E R   G E N E R A T O R
//--------------------------------

//imports:]--
import React from "react";

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
  return (
    <div id="wrapper" className="App">
      {/*---- TITLE ----*/}
      <h1 className="n_title" data-text={vars.TITLE}>
        {vars.TITLE}
      </h1>
      <p className="heading">Generate a random number</p>

      {/*---- NUMBER AREA ---- */}
      <div className="NumberArea">
        <p className="randomNumber">0</p>
      </div>

      {/*---- BUTTON ----*/}
      <div className="ButtonHolder">
        <button className="GenerateButton">Generate</button>
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