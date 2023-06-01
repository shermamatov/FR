"use client";
import React, { useEffect, useState } from "react";
import BookNowFormFirst from "./bookNowFormFirst/bookNowFormFirst";
import BookNowFormSecond from "./bookNowFormSecond/bookNowFormSecond";
export default function BooknowSecond() {
    const [formData, setFormData] = useState({});
    const [state, setState] = useState(true);
    const [message, setMessage] = useState("");

    function changeLocalStorage(bool) {
        if (localStorage.getItem("bookState")) {
            localStorage.setItem("bookState", bool);
            setState(bool);
        }
    }
    useEffect(() => {
        if (!localStorage.getItem("bookState")) {
            localStorage.setItem("bookState", false);
        }
    }, []);

    return (
        <div>
            {!state ? (
                <BookNowFormFirst
                    message={message}
                    setFormData={setFormData}
                    changeLocalStorage={changeLocalStorage}
                />
            ) : (
                <BookNowFormSecond
                    setMessage={setMessage}
                    setFormData={setFormData}
                    formData={formData}
                    changeLocalStorage={changeLocalStorage}
                />
            )}
        </div>
    );
}
