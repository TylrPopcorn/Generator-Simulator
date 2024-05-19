//Extra functions all under one file.
//
//--[ IMPORTS ]:--
import wait from "./wait";

//--[ VARIABLES ]:--
let Functions = {};

//----------------                  ------------------------------                      ----------------------------
//----------------                  ------------------------------                      ----------------------------
Functions["getRandomNumber"] = function (min, max) {
  //Will return a random number between two specified numbers invoked with.
  return Math.floor(min + Math.random() * (max - min + 1));
};

//
//

Functions["showButtons"] = async function (elements) {
  //Will show homepage buttons in an orderly fashion.

  const delayBeforeShow = 200; // Delay before removing 'Hide' class

  for (let button in elements) {
    //Loop through the elements,
    const correspondant = elements[button];

    await wait(delayBeforeShow); // Delay before showing elements again
    correspondant.classList.remove("Hide");
  }
};

//
//

Functions["componentDidMount"] = function () {
  //useEffect() function. Will run after the home page mounts.

  const randomNumber = Functions["getRandomNumber"];
  const elements = {
    Letter: document.getElementsByClassName("Letter_Option")[0],
    Number: document.getElementsByClassName("Number_Option")[0],
    Word: document.getElementsByClassName("Word_Option")[0],
  };
  //----

  for (let button in elements) {
    //Loop through elements
    const correspondant = elements[button];

    correspondant.classList.add("Shrink");

    wait(200).then(() => {
      //Wait, then hide elements
      correspondant.classList.add("Hide");
    });
  }

  wait(randomNumber(500, 900)).then(() => {
    //Wait then show elements
    Functions["showButtons"](elements);
  });
};
//----------------                  ------------------------------                      ----------------------------

//-----[ EXPORTS ]: --]
export default Functions;
//---------------------
