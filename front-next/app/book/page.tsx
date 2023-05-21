export default function Book() {
  return (
    <div>
      <section className="blockNow1">
        <div className="container">
          <h1 className="blockNow1_text">
            our team is always <br /> happy to help you
          </h1>
          <div className="blockNow1_imgBlock">
            <div className="blockNow1_imgBlock_wraper">
              <img
                src={blockNow1Circle}
                alt=""
                className="blockNow1_imgBlock_circle"
              />
              <img
                src={blockNow1Big}
                alt=""
                className="blockNow1_imgBlock_big"
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        {!state ? (
          <BlockNowForm1
            message={message}
            setFormData={setFormData}
            changeLocalStorage={changeLocalStorage}
          />
        ) : (
          <BlockNowForm2
            setMessage={setMessage}
            setFormData={setFormData}
            formData={formData}
            changeLocalStorage={changeLocalStorage}
          />
        )}
      </div>
    </div>
  );
}
