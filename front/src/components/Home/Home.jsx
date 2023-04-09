import React, { useState } from "react";
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
import "../../chel/chelModal.css";
import Block9 from "./Blocks/Block9/Block9";
// block end
// строго использовать css.module
const Home = () => {
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
            <ProjectLoaction />
        </div>
    );
};

export default Home;
