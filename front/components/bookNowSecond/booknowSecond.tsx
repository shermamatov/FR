"use client";
import React, { useEffect, useState } from "react";
import BookNowFormFirst from "./bookNowFormFirst/bookNowFormFirst";
import BookNowFormSecond from "./bookNowFormSecond/bookNowFormSecond";
export default function BooknowSecond({ services }: any) {
    const [formData, setFormData] = useState({});
    const [state, setState] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div>
            {!state ? (
                <BookNowFormFirst
                    message={message}
                    setFormData={setFormData}
                    services={services}
                    setState={setState}
                />
            ) : (
                <BookNowFormSecond
                    setMessage={setMessage}
                    setFormData={setFormData}
                    formData={formData}
                    setState={setState}
                />
            )}
        </div>
    );
}
