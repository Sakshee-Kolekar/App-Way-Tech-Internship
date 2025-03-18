import React, { useState } from "react";

const ToggleButton = () => {
    const [isDark, setIsDark] = useState(false);
    return (<>
        <button 
        onClick={()=>setIsDark(!isDark)}
        className="border-black font-sans shadow-lg shadow-black text-2xl bg-blue-300 p-4 m-4 rounded-2xl "
        >
            { isDark ? "Dark" : "Light"}
        </button>
    </>)
}
export default ToggleButton;