import React from "react";
// THIS IS THE HOME SCREEN

//imports:]--
import "../styles/home.css";
import wait from "./scripts/wait";

//vars:]--------
let Vars = {
  TITLE: "GENERATOR SIMULATOR" /* Change the title to whatever */,
  Functions: {},
};
let Functions = Vars.Functions; //Accessible outside of variables.
//--------------            --------------          ----------------        -----------------       -------------------
//
//MAIN FUNCTION]:----------
class HOME extends React.Component {
  //
  //
  constructor(props) {
    super(props); // Allow access to 'this.props'
  }

  MouseEnter = (event) => {
    const button = event.currentTarget;
    button.classList.remove("Shrink");
  };

  MouseLeave = (event) => {
    const button = event.currentTarget;
    console.log("left");
    button.classList.add("Shrink");
  };

  componentDidMount() {
    Functions["componentDidMount"]();
  }

  //---HTML
  render() {
    return (
      <div id="wrapper" className="App">
        {/*---- TITLE ----*/}
        <h1 className="title" data-text={Vars.TITLE}>
          {Vars.TITLE}
        </h1>

        {/*----------*/}
        <p className="heading">Choose an option</p>
        <div className="boxOptions">
          <button
            className="Letter_Option Shrink"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
          <button
            className="Number_Option"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
          <button
            className="Word_Option Shrink"
            onMouseEnter={this.MouseEnter}
            onMouseLeave={this.MouseLeave}
          >
            <span></span>
          </button>
        </div>
        <p className="chosenTitle">TITLE</p>
        <p className="InfoBox"> INFORMATION </p>
      </div>
    );
  }
}
//
//--------------            --------------          ----------------        -----------------       -------------------
//
// EXTRA FUNCTIONS]:----------
Functions["getRandomNumber"] = function (min, max) {
  //Will return a random number between two specified numbers invoked with.
  return Math.floor(min + Math.random() * (max - min + 1));
};

//
//

Functions["componentDidMount"] = function () {
  //useEffect()

  const randomNumber = Functions["getRandomNumber"];
  const elements = {
    Letter: document.getElementsByClassName("Letter_Option")[0],
    Number: document.getElementsByClassName("Number_Option")[0],
    Word: document.getElementsByClassName("Word_Option")[0],
  };
  //----

  for (let button in elements) {
    const correspondant = elements[button];

    correspondant.classList.add("Shrink");

    wait(300).then(() => {
      correspondant.classList.add("Hide");
    });
  }

  wait(1000).then(() => {
    for (let button in elements) {
      const correspondant = elements[button];

      correspondant.classList.remove("Hide");
    }
  });

  //ABSWER:
  //  async function animateElements(elements) {
  //    const delayBeforeShrink = 0; // Delay before adding 'Shrink' class
  //    const shrinkDuration = 300; // Duration for 'Shrink' class animation
  //    const delayBeforeHide = 1000; // Delay before adding 'Hide' class
  //    const delayBeforeShow = 1000; // Delay before removing 'Hide' class

  //    for (let button in elements) {
  //      const correspondant = elements[button];

  //      await wait(delayBeforeShrink); // Delay before adding 'Shrink' class
  //      correspondant.classList.add("Shrink");

  //      await wait(shrinkDuration); // Wait for the 'Shrink' animation to complete
  //      correspondant.classList.add("Hide");

  //      await wait(delayBeforeHide); // Delay before removing 'Hide' class
  //    }

  //    await wait(delayBeforeShow); // Delay before showing elements again

  //    for (let button in elements) {
  //      const correspondant = elements[button];
  //      correspondant.classList.remove("Hide");
  //    }
  //  }

  //  // Usage
  //  animateElements(elements);

  // const boxOptionsElements = document.querySelectorAll(".boxOptions");

  // boxOptionsElements.forEach((box) => {
  //   const letterOptionElements = box.querySelectorAll("[class*='_Option']");
  //   letterOptionElements.forEach((element) => {
  //     element.classList.add("Shrink");
  //     // element.classList.add("Hide");

  //     wait(randomNumber(100, 500)).then(() => {
  //       element.classList.add("Hide");

  //       wait(randomNumber(300, 1000)).then(() => {
  //         element.classList.remove("Hide");
  //       });
  //     });
  //   });
  // });
};

//EXPORTS:----------
export default HOME;
