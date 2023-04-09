import React, { createContext, useContext, useState } from "react";
export const chelContext = createContext();
export const useChel = () => useContext(chelContext);
const ChelContext = ({ children }) => {
    const [checked1, setCheked1] = useState(false);
    const [checked2, setCheked2] = useState(false);
    const [checked3, setCheked3] = useState(false);
    const [checked4, setCheked4] = useState(false);
    function border() {
        const bordik = document.querySelectorAll(".bord");
        if (checked2) {
            for (let i of bordik) {
                i.style.border = "2px solid blue";
            }
        } else {
            for (let i of bordik) {
                i.style.border = "none";
            }
        }
    }
    function addBordClass() {
        const p = document.querySelectorAll("p");
        p.forEach((item) => {
            item.classList.add("bord");
        });
        const h5 = document.querySelectorAll("h5");
        h5.forEach((item) => {
            item.classList.add("bord");
        });
        const h3 = document.querySelectorAll("h3");
        h3.forEach((item) => {
            item.classList.add("bord");
        });
        const a = document.querySelectorAll("a");
        a.forEach((item) => {
            item.classList.add("bord");
        });
        const h1 = document.querySelectorAll("h1");
        h1.forEach((item) => {
            item.classList.add("bord");
        });
        // const li = document.querySelectorAll("li");
        // li.forEach((item) => {
        //     item.classList.add("bord");
        // });
    }
    function bigFontSize() {
        const h1 = document.querySelectorAll("h1");
        const p = document.querySelectorAll("p");
        const h4 = document.querySelectorAll("h4");
        const h5 = document.querySelectorAll("h5");
        for (let i of h1) {
            checked3
                ? i.classList.add("big_fz_h1")
                : i.classList.remove("big_fz_h1");
        }
        for (let i of h4) {
            checked3
                ? i.classList.add("big_fz_h4")
                : i.classList.remove("big_fz_h4");
        }
        for (let i of h5) {
            checked3
                ? i.classList.add("big_fz_h5")
                : i.classList.remove("big_fz_h5");
        }
        for (let i of p) {
            checked3
                ? i.classList.add("big_fz_p")
                : i.classList.remove("big_fz_p");
        }
    }
    const value = {
        checked1,
        setCheked1,
        checked2,
        setCheked2,
        checked3,
        setCheked3,
        checked4,
        setCheked4,
        border,
        addBordClass,
        bigFontSize,
    };
    return (
        <chelContext.Provider value={value}>{children}</chelContext.Provider>
    );
};

export default ChelContext;
