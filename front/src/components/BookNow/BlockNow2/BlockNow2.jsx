import React, { useEffect, useState } from "react";
import BlockNowForm2 from "./BlockNowForm2/BlockNowForm2";
import BlockNowForm1 from "./BlockNowForm1/BlockNowForm1";
const BlockNow2 = () => {
const [formData, setFormData] = useState({})
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("bookState")) || false
  );


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
  useEffect(()=>{
    console.log(formData);
  },[formData])
  return (
    <div>
      {!state ? (
        <BlockNowForm1 setFormData={setFormData} changeLocalStorage={changeLocalStorage} />
      ) : (
        <BlockNowForm2 setFormData={setFormData} formData={formData} changeLocalStorage={changeLocalStorage} />
      )}
    </div>
  );
};

export default BlockNow2;
