//--[ IMPORTS ]:--
import wait from "./wait";

//--[ TYPES ]:--
interface Vars {
  firstEntrance: boolean;
  mouseEntered: boolean;
  mouseEvent: string;

  Letter_Option: string[];
  Number_Option: string[];
  Word_Option: string[];
}

interface FunctionsType {
  [key: string]: Function;
}

//-----[ VARIABLES ]:-----
const vars: Vars = {
  //ALL 'functions' related variables in one place:

  firstEntrance: false, //variable to stop heading color changing at first instance
  mouseEntered: false, //used to determine if the mouse has enetered a button or not.
  mouseEvent: "", //Used for mouse title option debounce

  Letter_Option: ["Generate a random letter", "Letter Generator"],
  Number_Option: ["Generate a random number", "Number Generator"],
  Word_Option: ["Generate a random word", "Word Generator"],
};

const Functions: FunctionsType = {}; //All returning functions in one place.
//----------------                  ------------------------------                      ----------------------------
//----------------                  ------------------------------                      ----------------------------
//

Functions["getRandomNumber"] = function (min: number, max: number): Number {
  //Will return a random number between two specified numbers invoked with.
  return Math.floor(min + Math.random() * (max - min + 1));
};

//
//
Functions["showButtons"] = async function (elements: {
  [key: string]: HTMLElement;
}): Promise<void> {
  //Will show homepage buttons in an orderly fashion.

  const delayBeforeShow = 200; //delay before removing 'Hide' class

  for (let button in elements) {
    //Loop through the elements,
    const correspondant = elements[button];

    await wait(delayBeforeShow); //delay before showing elements again
    correspondant.classList.remove("Hide");
  }
};

//
//

Functions["componentDidMount"] = function () {
  //useEffect() function. Will run after the home page mounts.

  //-----heading------\\
  const heading = document.getElementsByClassName("heading")[0] as HTMLElement;
  heading.classList.add("Hide");

  wait(2500).then(() => {
    heading.classList.remove("Hide");
  });

  //----- bottom option title----\\
  const optionTitle = document.getElementById("optionTitle") as HTMLElement;
  optionTitle.classList.add("Hide");

  //----HIDE BUTTONS FX---\\
  const randomNumber = Functions["getRandomNumber"];
  const elements = {
    Letter: document.getElementById("Letter_Option"),
    Number: document.getElementById("Number_Option"),
    Word: document.getElementById("Word_Option"),
  };

  for (const button in elements) {
    //Loop through button elements
    const correspondant = elements[button];

    correspondant.classList.add("Shrink");

    wait(200).then(() => {
      //Wait, then hide elements
      correspondant.classList.add("Hide");
    });
  }

  //---SHOW BUTTONS FX---\\
  wait(randomNumber(500, 900)).then(() => {
    //Wait, then show elements.
    Functions["showButtons"](elements);
  });

  //---Title COLOR LOOP FX----\\
  const title = document.getElementsByClassName("title")[0] as HTMLElement;

  if (vars.firstEntrance === false) {
    title.classList.add("colorAnimation");

    let Loop: NodeJS.Timeout;
    Loop = setInterval(() => {
      if (vars.firstEntrance === true) {
        title.classList.remove("colorAnimation");
        clearInterval(Loop); // Clear the interval when firstEntrance becomes true
      }
    }, 200);
  }
};

//
//
