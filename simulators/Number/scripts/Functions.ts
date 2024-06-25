//All background functions that support the main numberGenerator file.
//--[ IMPORTS ]:--
import wait from "./wait";

//--[ TYPES ]:--
interface FunctionsType {
  [key: string]: Function;
}

//-----[ VARIABLES ]:-----
const Functions: FunctionsType = {
  //All returning functions in one place.
  //-----------------------------------
  // func Clicked()
};
//----------------                  ------------------------------                      ----------------------------
//----------------                  ---------[ FUNCTIONS ]--------                      ----------------------------
//

//=============== [ mouse - CLICKED ] ==============\\
Functions["Clicked"] = function () {
  //Each time the button gets clicked on.
  //----------------

  const NumberHolder = document.querySelector(".NumberHolder") as HTMLElement;
  const Numb = document.querySelector(".randomNumber") as HTMLElement;

  // Ensure elements are found
  if (!NumberHolder || !Numb) {
    throw new Error("Cannot find corresponding HTML Elements");
  }

  //Fade | Shadow effects:
  Numb.classList.add("fade");
  NumberHolder.classList.add("shadowed");

  wait(1100).then(() => {
    if (
      NumberHolder.classList.contains("shadowed") ||
      Numb.classList.contains("fade")
    ) {
      Numb.classList.remove("fade");
      NumberHolder.classList.remove("shadowed");
    }
  });
};

//----------------                  ------------------------------                      ----------------------------

//-----[ EXPORTS ]: --]
export default Functions;
//---------------------
