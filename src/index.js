import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChelContext from "./Contexts/ChelContext";
import {Provider} from 'react-redux';
import store from './redux/index';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <ChelContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChelContext>
    </Provider>
);
