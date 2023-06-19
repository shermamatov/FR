"use client";
import React from "react";

export default function CookiesPL() {
    const [cook, setCook] = React.useState(false);

    React.useEffect(() => {
        if (localStorage.getItem("cookies")) {
            setCook(JSON.parse(localStorage.getItem("cookies") || "false"));
        } else {
            localStorage.setItem("cookies", JSON.stringify(true));
            setCook(JSON.parse(localStorage.getItem("cookies") || "false"));
        }
    }, []);

    function acceptCookies() {
        localStorage.setItem("cookies", JSON.stringify(false));
        setCook(false);
    }

    return cook ? (
        <div
            className={`p-5`}
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                overflowY: "hidden",
                backgroundColor: "#F2994A",
                zIndex: "100",
            }}
        >
            <div
                className="flex items-center justify-between flex-col md:flex-row max-w-7xl"
                style={{ margin: "0 auto" }}
            >
                <p className="w-full md:w-[75%] text-center md:text-left">
                    {
                        'We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking “Accept,“ you agree to our website"s cookie.'
                    }
                </p>
                <div className="w-[50%] md:w-[20%] mt-5 md:mt-0">
                    <button
                        style={{
                            background: "#A5A582",
                            width: "100%",
                            padding: "6px",
                            borderRadius: "5px",
                            color: "white",
                            fontSize: "18px",
                        }}
                        onClick={acceptCookies}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
}
