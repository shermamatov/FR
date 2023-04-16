import "./blockNow1.css";
import blockNow1Circle from "../../../images/blockNow1-circle.png";
import blockNow1Big from "../../../images/blockNow1-big.png";

const BlockNow1 = () => {
  return (
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
            <img src={blockNow1Big} alt="" className="blockNow1_imgBlock_big" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockNow1;
