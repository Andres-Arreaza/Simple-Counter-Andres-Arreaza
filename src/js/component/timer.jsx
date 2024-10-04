import React, { useState, useEffect } from "react";
import Card from "./card";

const Timer = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    useEffect(() => {
        let intervalID = setInterval(() => {
            setCount(count +1)
        }, 1000)
        return () =>{
            clearInterval(intervalID)
        }
    }, [count])

    const space = count.toString().padStart(6, "0").split("")



    return (
        <div className="d-flex gap-3 p-3 align-items-center justify-content-center" style={{background:'#000'}}>
           {text}
            <Card/>
            {space.map((value, index)=> {
            return <Card value={value} key={index} heigth="9vw" width="10%" /> 
            })}
        </div>
    );
};
export default Timer;