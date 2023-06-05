import Image from "next/image";
import "./booknowFirst.css";
import blockNow1Circle from "@/assets/blockNow1-circle.png";
import blockNow1Big from "@/assets/blockNow1-big.webp";
export default function BooknowFirst() {
  return (
    <section className="blockNow1">
      <div className="container">
        <h1 className="blockNow1_text">
          our team is always <br /> happy to help you
        </h1>
        <div className="blockNow1_imgBlock">
          <div className="blockNow1_imgBlock_wraper">
            <Image
              src={blockNow1Circle}
              alt=""
              className="blockNow1_imgBlock_circle"
            />
            <Image
              src={blockNow1Big}
              alt=""
              className="blockNow1_imgBlock_big"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
