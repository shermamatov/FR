import "./block2.scss";
// import Image from "next/image";
import Link from "next/link";
import altBefore from "@/assets/services_before.jpg";
import altAfter from "@/assets/services_after.jpg";
import Image from "next/image";
// import banner1 from "./banner1.jpg";
// import banner2 from "./banner2.jpg";

export default function HomeBlock2() {
    return (
        <div className="content mb-24">
            <div className="block2">
                <h2>Special offer</h2>
                <div className="block2_top">
                    <div className="serv_before_after_block_adap ">
                        <div>
                            <Image
                                src={altBefore}
                                width={100}
                                height={100}
                                alt=""
                                unoptimized
                            />
                            <Image
                                width={100}
                                height={100}
                                src={altAfter}
                                alt=""
                                unoptimized
                            />
                        </div>
                        <div className="serv_before_after_block_bottom">
                            <h2>
                                Friendly <br /> offer
                            </h2>
                            <div className="serv_before_after_block_bottom_price">
                                <p>cost</p>
                                <h4>$100</h4>
                            </div>
                        </div>
                    </div>
                    <div className="serv_before_after_block_adap ">
                        <div>
                            <Image
                                src={altBefore}
                                width={100}
                                height={100}
                                alt=""
                                unoptimized
                            />
                            <Image
                                width={100}
                                height={100}
                                src={altAfter}
                                alt=""
                                unoptimized
                            />
                        </div>
                        <div className="serv_before_after_block_bottom">
                            <h2>
                                Friendly <br /> offer
                            </h2>
                            <div className="serv_before_after_block_bottom_price">
                                <p>cost</p>
                                <h4>$100</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="./book" className="btn-book px-12 text-lg ">
                    book online now
                </Link>
            </div>
        </div>
    );
}
