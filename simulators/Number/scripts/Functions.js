//All background functions that support the main numberGenerator file.

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

  if (
    NumberHolder.classList.contains("shadowed") ||
    Numb.classList.contains("fade")
  ) {
    //If the function is already running, then end here.
    return;
  }

  //Fade/Shadow effects (ADD):
  Numb.classList.add("fade");
  NumberHolder.classList.add("shadowed");

  // Remove the 'shadowed' class after the transition completes
  setTimeout(() => {
    if (
      NumberHolder.classList.contains("shadowed") ||
      Numb.classList.contains("fade")
    ) {
      Numb.classList.remove("fade");
      NumberHolder.classList.remove("shadowed");
    }
  }, 1100);
};

//------[ EXPORTS ]:
export default Functions;
//-----------------
