import React from "react";
import { useEffect } from "react";

const UseEffectDemo = () => {
  useEffect(() => {
    console.log("Component Mounted!"); // This runs when the component loads

    return () => {    //cleanup function
      console.log("Component Unmounted!"); // Runs when component is removed
    };
  }, []); 

  return <h2 className="text-center text-xl font-bold">Check Console for Logs!</h2>;
};

export default UseEffectDemo;
