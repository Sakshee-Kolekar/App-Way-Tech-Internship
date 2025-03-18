import React from "react";
import { useState } from "react";
const InputDemo = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <>
            <div className="p-4 text-center">
                <h2 className="text-xl font-bold mb-4">Input Field Demo!!</h2>
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Type something..."
                    className="border p-2 rounded"
                />
                <p className="mt-2 text-lg">You typed: {text}</p>
            </div>
        </>
    )
}
export default InputDemo;