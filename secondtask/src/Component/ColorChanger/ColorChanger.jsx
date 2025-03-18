import React from "react";
import { useState } from "react";


const ColorChanger = () => {

    const [color, setColor] = useState(false);

    return (
        <>
            <button
                className={`p-3 m-3 rounded-2xl border-black border-2 font-medium shadow-2xl text-black
                     ${color ? "bg-amber-300" : "bg-red-500"
                    }`}
                onClick={() => setColor(!color)}
            >
                {color ? "yellow!" : "Red"}
            </button> </>
    )
}

export default ColorChanger;

