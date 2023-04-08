import React from "react";
// block start
import FirstBlock from "./Blocks/Block1/FirstBlock";
import FrServer from "./Blocks/Block4/FrServer";
import WordsFrom from "./Blocks/Block5/WordsFrom";
import Block2 from "./Blocks/Block2/Block2";
import Block3 from "./Blocks/Block3/Block3";
// import Block6 from "./Blocks/Block6/Block6";
import Block7 from "./Blocks/Block7/Block7";
import LatestPost from "./Blocks/Block6/LatestPost";
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
            <Block7 />
            <LatestPost />
        </div>
    );
};

export default Home;
