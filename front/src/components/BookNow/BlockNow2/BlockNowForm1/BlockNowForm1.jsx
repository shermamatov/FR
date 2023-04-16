import React, { useState } from "react";
import "./BlockNowForm1.css";

const BlockNow2 = ({ changeLocalStorage }) => {
    //   const [name, setName] = useState("");
    //   const [firstNmae, serFirstName] = useState("");
    //   const [number, setNumber] = useState("");
    return (
        <>
            <div
            // style={{ display: "flex" }}
            >
                <h1>meeting</h1>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button onClick={() => changeLocalStorage(false)}>
                    {" "}
                    button 1
                </button>
            </div>
        </>
    );
};

export default BlockNow2;
