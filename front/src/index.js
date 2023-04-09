import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChelContext from "./Contexts/ChelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChelContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChelContext>
);
