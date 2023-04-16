import React, { useState } from "react";
import "./BlockNow3.css";

const BlockNow2 = () => {
  const [state, setState] = useState(false);
  //   const [name, setName] = useState("");
  //   const [firstNmae, serFirstName] = useState("");
  //   const [number, setNumber] = useState("");
  return (
    <>
      <div
        // style={{ display: "flex" }}
        className={state === false ? "container" : "hidden_block"}
      >
        <h1>meeting</h1>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button
          onClick={() => {
            setState(true);
          }}
        >
          {" "}
          button 1
        </button>
      </div>
      {/* ////////////////// */}
      <div
        // style={{ display: "flex" }}
        className={state ? "container" : "hidden_block"}
      >
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>button 2</button>
      </div>
    </>
  );
};

export default BlockNow2;
