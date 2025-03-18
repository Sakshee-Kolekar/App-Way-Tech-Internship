import React from "react";

const AlertMessage = ({ message }) => {
    return (
      <div className=" bg-blue-300 p-3 rounded-3xl">
        {message}
      </div>
    );
  };
  
  export default AlertMessage;