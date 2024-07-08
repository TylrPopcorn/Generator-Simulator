//W O R D  G E N E R A T O R
//---------------------------
import React from "react";

//imports:]--
import wait from "./scripts/wait";

//styles:]--
import "../../styles/word.css";

//vars:]-------
let vars = {
  TITLE: "WORD GENERATOR" /*TITLE OF THE PAGE*/,

  //--add more variables here:--
  //--
  //--
};

//------[ MAIN COMPONENT ]------\\
function WordGenerator() {
  //-------vars:

  //----HTML: -----------
  return (
    <div id="wrapper" className="App">
      <div className="WordArea">
        <div className="WordHolder_outside">
          <div className="WordHolder_middle">
            <p className="randomWord">TEST</p>
          </div>
        </div>
      </div>
      <div className="ButtonHolder">
        <button className="GenerateButton"> Generate </button>
      </div>
    </div>
  );
}

//---[ EXPORTS ]---\\
export default WordGenerator;
//-------------------
