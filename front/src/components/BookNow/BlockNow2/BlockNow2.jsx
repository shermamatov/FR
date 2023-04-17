import React, { useEffect, useState } from "react";
import BlockNowForm2 from "./BlockNowForm2/BlockNowForm2";
import BlockNowForm1 from "./BlockNowForm1/BlockNowForm1";
const BlockNow2 = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("bookState")) || false
  );
  useEffect(() => {
    if (!localStorage.getItem("bookState")) {
      localStorage.setItem("bookState", false);
    }
  }, []);
  function changeLocalStorage(bool) {
    if (localStorage.getItem("bookState")) {
      localStorage.setItem("bookState", bool);
      setState(bool);
    }
  }
  return (
    <div>
      {state ? (
        <BlockNowForm1 changeLocalStorage={changeLocalStorage} />
      ) : (
        <BlockNowForm2 changeLocalStorage={changeLocalStorage} />
      )}
    </div>
  );
};

export default BlockNow2;
