import React from "react";

//imports:]----
import "../styles/home.css";

//MAIN FUNCTION]:----------
class HOME extends React.Component {
  //
  //
  //   constructor(props) {
  //     super(props); //Allow access to 'this.props'
  //   }

  //---HTML
  render() {
    return (
      <div id="wrapper" className="App">
        <p className="heading">Choose an option</p>
        <div className="boxOptions">
          <button>Letter</button>
          <button>Number</button>
          <button>Word</button>
        </div>
      </div>
    );
  }
}

//

//EXPORTS:----------
export default HOME;
