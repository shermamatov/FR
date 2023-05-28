import { fetchServiceById } from "@/api";
import { PageNavProps } from "@/app/types";
import { Layout } from "@/components/Layout";
import { use } from "react";
import ServBlock1 from "../servBlock1";
import altBefore from "@/assets/services_before.jpg";
import altAfter from "@/assets/services_after.jpg";
import Image from "next/image";

export default function ServiceSingle({ params }: PageNavProps) {
    const service = use(fetchServiceById(params.id));
    return (
        <Layout>
            <ServBlock1 />
            <section className="content mt-[60px] md:mt-[150px]">
                <div className="serv_before_after_block hidden md:flex">
                    <Image
                        src={
                            service.offer_image_before
                                ? service.offer_image_before
                                : altBefore
                        }
                        width={100}
                        height={100}
                        alt=""
                        unoptimized
                    />
                    <Image
                        width={100}
                        height={100}
                        src={
                            service.offer_image_after
                                ? service.offer_image_after
                                : altAfter
                        }
                        alt=""
                        unoptimized
                    />
                </div>
                <div className="serv_before_after_block_adap md:hidden">
                    <div>
                        <Image
                            src={
                                service.offer_image_before
                                    ? service.offer_image_before
                                    : altBefore
                            }
                            width={100}
                            height={100}
                            alt=""
                            unoptimized
                        />
                        <Image
                            width={100}
                            height={100}
                            src={
                                service.offer_image_after
                                    ? service.offer_image_after
                                    : altAfter
                            }
                            alt=""
                            unoptimized
                        />
                    </div>
                    <div className="serv_before_after_block_bottom">
                        <h2>
                            Friendly <br /> offer
                        </h2>
                        <h4 className="">
                            cost <span>${service.offer_price}</span>
                        </h4>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
