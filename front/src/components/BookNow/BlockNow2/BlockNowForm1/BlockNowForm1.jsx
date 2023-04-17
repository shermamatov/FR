import React, { useState } from "react";
import "./BlockNowForm1.css";

const BlockNowForm1 = ({ changeLocalStorage }) => {
    //   const [name, setName] = useState("");
    //   const [firstNmae, serFirstName] = useState("");
    //   const [number, setNumber] = useState("");
    return (
        <>
            <div className="blockNowForm1"
            // style={{ display: "flex" }}
            >
                <h1 className="blockNowForm1_title">Fill out the form and we will come as soon as possible.</h1>
                <input placeholder="Name" type="text" />
                <input placeholder="Phone" type="tel" />
                <input placeholder="E-Mail" type="text" />
                <input placeholder="Address" type="text" />
                <input placeholder="Service" type="text" />
                <button onClick={() => changeLocalStorage(true)}>
                    {" "}
                   Next
                </button>
            </div>
        </>
    );
};

export default BlockNowForm1;
