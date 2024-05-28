//Extra functions all under one file.
//
//--[ IMPORTS ]:--
import wait from "./wait";

//--[ VARIABLES ]:--
const vars = {
  firstEntrance: false, //variable to stop heading color changing at first instance
};
const Functions = {};

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

  //-----heading------\\
  const heading = document.getElementsByClassName("heading")[0];
  heading.classList.add("Hide");

  wait(2200).then(() => {
    heading.classList.remove("Hide");
  });

  const randomNumber = Functions["getRandomNumber"];
  const elements = {
    Letter: document.getElementById("Letter_Option"),
    Number: document.getElementById("Number_Option"),
    Word: document.getElementById("Word_Option"),
  };
  //----

  //----HIDE BUTTONS FX---\\
  for (let button in elements) {
    //Loop through elements
    const correspondant = elements[button];

    correspondant.classList.add("Shrink");

    wait(200).then(() => {
      //Wait, then hide elements
      correspondant.classList.add("Hide");
    });
  }

  //---SHOW BUTTONS FX---\\
  wait(randomNumber(500, 900)).then(() => {
    //Wait then show elements
    Functions["showButtons"](elements);
  });

  //---Title COLOR LOOP FX----\\
  const title = document.getElementsByClassName("title")[0];
  if (vars.firstEntrance == false) {
    title.classList.add("colorAnimation");

    let Loop;
    Loop = setInterval(() => {
      if (vars.firstEntrance == true) {
        title.classList.remove("colorAnimation");
      }
    }, 200);
  }
};

//
//

Functions["mouse"] = {
  //mouse related items.
  //====================================

  Entered: function (event) {
    //each time the mouse enters a button.
    //====================================
    const button = event.currentTarget;
    button.classList.remove("Shrink");

    const heading = document.getElementsByClassName("title")[0];
    const removeClasses = ["option_1", "option_2", "option_3"];

    vars.firstEntrance = true;

    //remove any previous classes of other options:
    removeClasses.forEach((cls) => {
      if (heading.classList.contains(cls)) {
        heading.classList.remove(cls);
      }
    });

    //add corresponding button option number
    const buttonNumber = event.currentTarget.classList[0];
    heading.classList.add("option_" + buttonNumber);
  },

  Left: function (event) {
    //Each time the mouse leaves a button.
    //====================================
    const button = event.currentTarget;
    button.classList.add("Shrink");

    // const heading = document.getElementsByClassName("title")[0];
    // const buttonNumber = event.currentTarget.classList[0];
    // heading.classList.remove("option_" + buttonNumber);

    const optionTitle = document.getElementById("optionTitle");
    optionTitle.classList.add("Hide");
  },
};

//----------------                  ------------------------------                      ----------------------------

//-----[ EXPORTS ]: --]
export default Functions;
//---------------------
