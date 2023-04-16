import React from "react";

const BlockNowForm2 = ({ changeLocalStorage }) => {
    return (
        <div>
            {/* ////////////////// */}
            <div>
                <h1>meeting2</h1>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button onClick={() => changeLocalStorage(true)}>
                    button 2
                </button>
            </div>
        </div>
    );
};

export default BlockNowForm2;
