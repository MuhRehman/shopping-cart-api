import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import Stars from "./Stars";

function Testing(props) {
  let person1 = {
    name: "Rehman",
    age: "24",
    city: "Rawalpindi",
    bestFriend: {
      name: "shakeel",
      age: 24,
      city: "isl",
    },
  };

  let person2 = { ...person1, bestFriend: { ...person1.bestFriend } };



  //////// immutability libraries  ////// immer /// used inside @redux-toolkit

  person2.name = "Ubaid";
  person2.age = "35";
  person2.bestFriend.name = "Iltaf .jo zinda hey";
  person2.bestFriend.age = 35;

  console.log(person2);
  console.log(person1);
  return (
    <div>
      <h1> {person1.name} </h1>;<h1> {person2.name} </h1>;
    </div>
  );
}

export default Testing;

///////////////////
////// useState   ////  Clear /// like water // 50 % hooks clear //

////// useEffect  /// lets do it /// how to use.. LifeCycle functions.... useEffect will help us.

///// class based components mey // state, props, lifeCycle, context
///// functional components mey /// useState, props, useEffects, useContext  //// 100% cover
/// useLayout  /// useReducer

//// First render ///

//// THEN effect k andhar jo bhe function hey... agar dependency array valid hogi

////////  How will we do /// componentDidMount (), componentwillUpdate ( ) etc life cycle k functions ?
