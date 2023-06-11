import "./block6.scss";
// import Image from "next/image";
// import icon1 from "@/assets/serv_icon1.svg";
// import icon2 from "@/assets/serv_icon2.svg";

export default function HomeBlock6() {
    return (
        <div>
            <section className="content flex justify-around pt-12 pb-12   ">
                <div className="flex items-center">
                    <img
                        className="w-12 md:w-20"
                        src="/serv_icon1.svg"
                        alt="#"
                    />
                    <div className="flex flex-col ml-1 sm:ml-4">
                        <h2 className="text-3xl md:text-5xl">+1000</h2>{" "}
                        <p className="text-center font-bold text-xs md:text-base">
                            Completed project
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img
                        className="w-12 md:w-20"
                        src="/serv_icon2.svg"
                        alt="#"
                    />
                    <div className="flex flex-col ml-1 sm:ml-4">
                        <h2 className="text-3xl md:text-5xl">+5000</h2>{" "}
                        <p className="text-center font-bold text-xs md:text-base">
                            clients review
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
