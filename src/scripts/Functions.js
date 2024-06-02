//Extra functions all under one file.
//
//--[ IMPORTS ]:--
import wait from "./wait";

//--[ VARIABLES ]:--
const vars = {
  //ALL 'functions' related variables in one place:

  firstEntrance: false, //variable to stop heading color changing at first instance
  mouseEntered: false, //used to determine if the mouse has enetered a button or not.
  mouseEvent: "", //Used for mouse title option debounce

  Letter_Option: ["Generate a random letter", "Letter Generator"],
  Number_Option: ["Generate a random number", "Number Generator"],
  Word_Option: ["Generate a random word", "Word Generator"],
};

const Functions = {}; //All returning functions in one place.
//----------------                  ------------------------------                      ----------------------------
//----------------                  ------------------------------                      ----------------------------
//
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

//=============== [ USE EFFECT ] ==============\\
Functions["componentDidMount"] = function () {
  //useEffect() function. Will run after the home page mounts.

  //-----heading------\\
  const heading = document.getElementsByClassName("heading")[0];
  heading.classList.add("Hide");

  wait(2500).then(() => {
    heading.classList.remove("Hide");
  });

  //----- bottom option title----\\
  const optionTitle = document.getElementById("optionTitle");
  optionTitle.classList.add("Hide");

  //---bottom info text----\\
  const infotext = document.getElementById("InfoBox");
  infotext.classList.add("Hide");

  //----HIDE BUTTONS FX---\\
  const randomNumber = Functions["getRandomNumber"];
  const elements = {
    Letter: document.getElementById("Letter_Option"),
    Number: document.getElementById("Number_Option"),
    Word: document.getElementById("Word_Option"),
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

//=============== [ MOUSE ] ==============\\
Functions["mouse"] = {
  //mouse related items.
  //======================

  //-------
  Entered: function (eventButton) {
    //each time the mouse enters a button.
    //====================================
    vars.firstEntrance = true;
    vars.mouseEntered = true;
    vars.mouseEvent = eventButton.id;

    eventButton.classList.remove("Shrink"); //Shrink fx

    //Remove all classes from the title
    const heading = document.getElementsByClassName("title")[0];
    const removeClasses = ["option_1", "option_2", "option_3"];
    removeClasses.forEach((cls) => {
      if (heading.classList.contains(cls)) {
        heading.classList.remove(cls);
      }
    });

    //add corresponding button option number
    const buttonNumber = eventButton.classList[0];
    heading.classList.add("option_" + buttonNumber);

    wait(900).then(() => {
      //check if mouse still entered
      if (vars.mouseEntered === true) {
        const optionTitle = document.getElementById("optionTitle");
        const infotext = document.getElementById("InfoBox");

        //Enable bottom info text
        if (vars.mouseEvent === eventButton.id) {
          optionTitle.classList.add(eventButton.id);
          optionTitle.classList.remove("Hide");
          optionTitle.textContent = vars[eventButton.id][1];

          infotext.classList.remove("Hide");
          infotext.classList.add(eventButton.id);

          //add corresponding information to the info box:
          infotext.textContent = vars[eventButton.id][0];
        }
      }
    });
  },

  //-------
  Left: function (eventButton) {
    //Each time the mouse leaves a button.
    //====================================
    vars.mouseEntered = false;
    vars.mouseEvent = "";

    eventButton.classList.add("Shrink");

    //Remove all classes from optionTitle
    const optionTitle = document.getElementById("optionTitle");
    while (optionTitle.classList.length > 0) {
      optionTitle.classList.remove(optionTitle.classList.item(0));
    }
    optionTitle.classList.add("Hide");

    //Remove all classes from infoBox
    const infotext = document.getElementById("InfoBox");
    while (infotext.classList.length > 0) {
      infotext.classList.remove(infotext.classList.item(0));
    }
    infotext.classList.add("Hide");
  },
};

//----------------                  ------------------------------                      ----------------------------

//-----[ EXPORTS ]: --]
export default Functions;
//---------------------
