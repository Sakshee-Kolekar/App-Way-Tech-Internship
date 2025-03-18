import React from "react";
import { useState } from "react";
import AlertMessage from "../AlertMessage/AlertMessage";

const ButtonWithAlert = ({text}) => {
    const [showAlert, setShowAlert] = useState(false);
  
    return (
      <div>
       <button 
       className="text-white  w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
       onClick={() => setShowAlert(!showAlert)}
         >
          {text}
        </button>
        {showAlert && <AlertMessage message="You Clicked Alert Button!"/>}
      </div>
    );
  };
  
  export default ButtonWithAlert;