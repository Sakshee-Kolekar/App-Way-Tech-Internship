
import React from "react";
function Button() {
    function logMsg() {
        console.log("Button Clicked!");
    }

    return (
        <>
            <button onClick={logMsg} type="button" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Click me</button>
        </>
    )
}
export default Button;