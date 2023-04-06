import React from "react";
// block start
import FirstBlock from "./Blocks/Block1/FirstBlock";
import FrServer from "./Blocks/Block4/FrServer";
import WordsFrom from "./Blocks/Block5/WordsFrom";
import LatestPost from "./Blocks/Block6/LatestPost";
import ProjectLocation from "./Blocks/Block7/ProjectLocation";
import Block2 from "./Blocks/Block2/Block2";
import Block3 from "./Blocks/Block3/Block3";
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
            <LatestPost />
            <ProjectLocation />
        </div>
    );
};

export default Home;
