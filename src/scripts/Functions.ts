//--[ IMPORTS ]:--
import wait from "./wait";

//--[ TYPES ]:--
interface Vars {
  firstEntrance: boolean;
  mouseEntered: boolean;
  mouseEvent: string;
  buttonsLocked: boolean;

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
  buttonsLocked: false, //Used to determine if the user can click on buttons or not.

  Letter_Option: ["Generate a random letter", "Letter Generator"],
  Number_Option: ["Generate a random number", "Number Generator"],
  Word_Option: ["Generate a random word", "Word Generator"],
};

const Functions: FunctionsType = {
  //All returning functions in one place.
  //-----------------------------------
  //  func getRandomNumber()
  //  func showButtons()
  //  func componentDidMount()
  //  func mouseEntered()
  //  func mouseLeft()
};
//----------------                  ------------------------------                      ----------------------------
//----------------                  ---------[ FUNCTIONS ]--------                      ----------------------------
//

//=============== [ getRandomNumber ] ==============\\
Functions["getRandomNumber"] = function (min: number, max: number): Number {
  //Will return a random number between two specified numbers invoked with.
  //---------------------------------------
  return Math.floor(min + Math.random() * (max - min + 1));
};

//
//

//=============== [ showButtons ] ==============\\
Functions["showButtons"] = async function (elements: {
  [key: string]: HTMLElement;
}): Promise<void> {
  //Will show homepage buttons in an orderly fashion.
  //-------------------------------------

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

//=============== [ ComponentDidMount ] ==============\\
Functions["componentDidMount"] = function () {
  //useEffect() function. Will run after the home page mounts.
  //------------------------------

  //-----heading------\\
  const heading = document.getElementsByClassName("heading")[0] as HTMLElement;
  heading.classList.add("Hide");

  wait(2500).then(() => {
    heading.classList.remove("Hide");
  });

  //----- bottom option title----\\
  const optionTitle = document.getElementById("optionTitle") as HTMLElement;
  optionTitle.classList.add("Hide");

  //---bottom info text----\\
  const infotext = document.getElementById("InfoBox") as HTMLElement;
  infotext.classList.add("Hide");

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

//=============== [ MOUSE - entered ] ==============\\
Functions["mouseEntered"] = function (eventButton: HTMLElement) {
  //each time the mouse enters a button.
  //----------------------
  vars.firstEntrance = true;
  vars.mouseEntered = true;
  vars.mouseEvent = eventButton.id;

  eventButton.classList.remove("Shrink"); //Shrink fx

  //Remove all classes from the title
  const heading = document.getElementsByClassName("title")[0] as HTMLElement;
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
      const optionTitle = document.getElementById("optionTitle") as HTMLElement;
      const infotext = document.getElementById("InfoBox") as HTMLElement;

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

  //
  //

  //=============== [ MOUSE - left ] ==============\\
  Functions["mouseLeft"] = function (eventButton: HTMLElement) {
    //Each time the mouse leaves a button.
    //----------------------

    vars.mouseEntered = false;
    vars.mouseEvent = "";

    eventButton.classList.add("Shrink"); //return to normal size

    //Remove all classes from optionTitle
    const optionTitle = document.getElementById("optionTitle") as HTMLElement;
    while (optionTitle.classList.length > 0) {
      const className = optionTitle.classList.item(0);
      if (className) {
        optionTitle.classList.remove(className);
      }
    }
    optionTitle.classList.add("Hide");

    //Remove all classes from infoBox
    const infoText = document.getElementById("InfoBox") as HTMLElement;
    while (infoText.classList.length > 0) {
      const className = infoText.classList.item(0);
      if (className) {
        infoText.classList.remove(className);
      }
    }
    infoText.classList.add("Hide");
  };
};

//
//

//=============== [ MOUSE - clicked ] ==============\\
Functions["mouseClicked"] = function () {
  return true;
};
//
//----------------                  ------------------------------                      ----------------------------

//-----[ EXPORTS ]: --]
export default Functions;
//---------------------
