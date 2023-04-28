import React, { useState, useEffect } from "react";
// block start
import FirstBlock from "./Blocks/Block1/FirstBlock";
import FrServer from "./Blocks/Block4/FrServer";
import WordsFrom from "./Blocks/Block5/WordsFrom";
import Block2 from "./Blocks/Block2/Block2";
import Block3 from "./Blocks/Block3/Block3";
import ProjectLoaction from "./Blocks/Block8/ProjectLoaction";
import Block7 from "./Blocks/Block7/Block7";
import LatestPost from "./Blocks/Block6/LatestPost";
import { useChel } from "../../Contexts/ChelContext";
import "./home.css";
import "../../chel/chelModal.css";
import Block9 from "./Blocks/Block9/Block9";
// block end
// строго использовать css.module
const Home = () => {
    const [visited, setVisited] = useState(false);
    const [privacy, setPrivacy] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPrivacy(false);
        }, 30000);

        // Очистка таймера, если компонент размонтируется или состояние изменится
        return () => clearTimeout(timerId);
    }, []);
    useEffect(() => {
        if (localStorage.getItem("visited")) {
            setVisited(true);
        } else {
            localStorage.setItem("visited", true);
        }
    }, []);
    return (
        <div>
            <FirstBlock />
            <Block2 />
            <Block3 />
            <FrServer />
            <WordsFrom />
            <Block9 />
            <Block7 />
            <LatestPost />

            {privacy && !visited && (
                <div className="privacy_police">
                    <p>
                        This Privacy Policy outlines how we collect, use, and
                        disclose personal information when you use our services.
                        By using our services, you agree to the terms of this{" "}
                        <a href="/privacy_policy">Privacy Policy</a>{" "}
                    </p>
                    <button
                        onClick={() => {
                            setPrivacy(false);
                        }}
                    >
                        X
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;
