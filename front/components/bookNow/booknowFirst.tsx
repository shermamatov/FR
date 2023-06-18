import Image from "next/image";
import "./booknowFirst.css";
export default function BooknowFirst() {
    return (
        <section className="blockNow1">
            <div className="content">
                <h1 className="blockNow1_text">
                    our team is always <br /> happy to help you
                </h1>
                <div className="blockNow1_imgBlock">
                    <div className="blockNow1_imgBlock_wraper">
                        <img
                            src="/blockNow1-circle.png"
                            alt=""
                            className="blockNow1_imgBlock_circle"
                        />
                        <Image
                            quality={100}
                            layout="responsive"
                            width={100}
                            height={100}
                            src="/blockNow1-big.webp"
                            alt=""
                            className="blockNow1_imgBlock_big"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
