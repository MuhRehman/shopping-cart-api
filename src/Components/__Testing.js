import React, { Component } from "react";





/////// Life cycle functions  //// 



////// componentdidMount

//// componentdidUpdate(prevProps, prevState)

this.props
this.state


/// componentwillUnmount


//// render


class Testing extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    console.log("Constructor.."); //// Sub se pehle
  }

  componentDidMount() {
    console.log("I m did Mount");
    this.keepUsUpdatedAbout(this.props.name);
    //// Second /// achi jaga hey /// network ki calls /// api // subscriptions
  }

  keepUsUpdatedAbout = () => {
    console.log("Updates related to " + this.props.name + " Started");
  };
  stopUpdatingAbout = () => {
    console.log("Updates related to " + this.props.name + " ended");
  };

  componentWillUnmount() {
    console.log("Un-Mounted"); //// sub se akhir mey.... jab component mar jaye ga. .. MAR jaye ga...Intiqal
    this.stopUpdatingAbout(this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name != this.props.name) {
      this.stopUpdatingAbout(prevProps.name);
      this.keepUsUpdatedAbout(this.props.name);
    }

    if (prevState.counter != this.state.counter)
      console.log("state change ho gaya");

    /// har dafa  /// jab state ya phir props update hoon.
  }
  render() {
    console.log("I am render"); ///// First

    ////// bar bar excute hota hey

    ////// to RE-DRAW itself  /////  delay render /// sluggish loading

    return (
      <div>
        <h1> Value of the counter is {this.state.counter} </h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default Testing;

// import React, { useState } from "react";

// ////// useState   ////  Clear /// like water // 50 % hooks clear //

// ////// useEffect  /// lets do it ///

// function Testing(props) {

// let arr =[];

//   arr = useState("");  /// Declartion  ///// unconditionally!!!!!! ///
//   const userName = arr[0];
//   const setUser =  arr[1];

//   const [email, setEmail] = useState("");

//   console.log(userName);

//   ////////  How will we do /// componentDidMount (), componentwillUpdate ( ) etc life cycle k functions ?

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Full Name"
//         value={userName}
//         onChange={(e) => {
//           setUser(e.target.value);
//         }}
//       />{" "}
//       <input
//         type="email"
//         placeholder="email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />{" "}
//     </div>
//   );
// }

// export default Testing;

// ///////////////////
