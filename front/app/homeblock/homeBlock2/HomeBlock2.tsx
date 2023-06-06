import "./block2.scss";
// import Image from "next/image";
import Link from "next/link";

// import banner1 from "./banner1.jpg";
// import banner2 from "./banner2.jpg";

export default function HomeBlock2() {
    return (
        <div className="content mb-24">
            <div className="block2">
                <div className="block2_top">
                    <div className="img_block2">
                        <img src="/banner1.jpg" alt="" />
                    </div>
                    <div className="img_block2">
                        <img src="/banner2.jpg" alt="" />
                    </div>
                </div>
                <Link href="./book" className="btn-book px-12 text-lg ">
                    book online now
                </Link>
            </div>
        </div>
    );
}
