
import { useState } from "react"

const Counter = () => {
    let [counter, setCounter] = useState(0);

    return (
        <>
           <div className=" m-auto p-10 w-full h-full bg-amber-100 rounded-2xl ">
           <h1 className="text-black m-3 text-2xl font-bold ">Counter:{counter}</h1>
            <button  className=" bg-green-600 p-3 m-3 rounded-2xl font-medium shadow-lg" onClick={()=>setCounter(counter+1)}> Incrememnt</button>
            <button className=" bg-red-500 p-3 m-3 rounded-2xl font-medium shadow-lg" onClick={()=>setCounter(counter-1)}> Decrement</button>
            <button className=" bg-blue-400 p-3 m-3 rounded-2xl font-medium shadow-lg" onClick={()=>setCounter(0)}>Reset</button>
           </div>
        </>
    )
}
export default Counter;