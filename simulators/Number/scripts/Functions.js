//All background functions that support the main numberGenerator file.
//--- imports:]
import wait from "./wait";
//
const Functions = {
  //All exported functions within one place.
};

//----------------                  ------------------------------                      ----------------------------
//----------------                  ---------[ FUNCTIONS ]--------                      ----------------------------
//
Functions["Clicked"] = function () {
  //Each time the button gets clicked on.
  //----------------
  const NumberHolder = document.querySelector(".NumberHolder");
  const Numb = document.querySelector(".randomNumber"); //grab number area.

  //Fade/Shadow effects (ADD):
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

//------[ EXPORTS ]:
export default Functions;
//-----------------
