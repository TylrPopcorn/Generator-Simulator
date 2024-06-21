//N U M B E R   G E N E R A T O R
//--------------------------------
import React from "react";

//imports:]--
import Functions from "./scripts/Functions";

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
  // const [num, setNum] = useState(0);

  const Clicked = () => {
    //Each time the button gets clicked on.
    //---------------------
    const randomNumber = Math.floor(Math.random() * 100) + 1; //generate a random number
    // setNum(randomNumber);

    Functions["Clicked"](); //fx.
  };

  //----HTML:
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
          <p className="randomNumber">{0}</p>
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
