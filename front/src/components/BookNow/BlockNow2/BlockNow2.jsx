import React, { useEffect, useState } from "react";
import BlockNowForm2 from "./BlockNowForm2/BlockNowForm2";
import BlockNowForm1 from "./BlockNowForm1/BlockNowForm1";
const BlockNow2 = () => {
const [formData, setFormData] = useState({})
  const [state, setState] = useState(
  false
  );
  const [message, setMessage] = useState('');

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
        <BlockNowForm1 message={message} setFormData={setFormData} changeLocalStorage={changeLocalStorage} />
      ) : (
        <BlockNowForm2 setMessage={setMessage} setFormData={setFormData} formData={formData} changeLocalStorage={changeLocalStorage} />
      )}
    </div>
  );
};

export default BlockNow2;
