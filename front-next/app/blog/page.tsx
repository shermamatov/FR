import { fetchBlog } from "@/api";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import bath from "@/assets/bath.png";
import "./blogPage.scss";
export default function Blog() {
    const posts = use(fetchBlog());
    function getMiniData() {
        const arr = [...posts.results];
        return arr.slice(0, 4);
    }
    return (
        <Layout className="content">
            <div className={"flex mb-8"}>
                <p className="font-bold">All</p>
                <p className="ml-5 font-bold" style={{ color: "#9B51E0" }}>
                    Cooling
                </p>
                <p
                    className="ml-5 font-bold"
                    style={{ color: "#107EBD", whiteSpace: "nowrap" }}
                >
                    Business Strategy{" "}
                </p>
                <p className="ml-5 font-bold" style={{ color: "#EC2A48" }}>
                    Heating{" "}
                </p>
                <p style={{ color: "#F2994A" }} className="ml-5 font-bold">
                    Repairing
                </p>
                <p style={{ color: "#219653" }} className="ml-5 font-bold">
                    Commercial
                </p>
            </div>
            <div className="blog_block1">
                <div className="blog_block1_left">
                    <Image src={bath} alt="" />
                </div>
                <div className="blog_block1_right">
                    <div style={{ color: "#107EBD", whiteSpace: "nowrap" }}>
                        Business Strategy
                    </div>
                    <div>
                        <span
                            style={{
                                color: "#72421C",
                                fontWeight: "600",
                                lineHeight: "15px",
                            }}
                        >
                            December 30, 2019
                        </span>
                    </div>
                    <h1>
                        A-Series Ultra Low NOx Gas Furnace 80% Single Stage
                        40,000 BTU Non-Variable Upflow/ Horizontal 14.5 wide
                    </h1>
                    <p>
                        A global print fulfillment company partnered with Mason
                        Interactive to grow omnichannel sales via Search Engine
                        Optimization (SEO). During the course of the engagement,
                        the client saw a 134% increase in organic traffic,
                        resulting in a measurable increase in leads, and sales.
                        the client saw a 134% increase in organic traffic,
                        resulting in a measurable increase in leads, and sales.
                    </p>
                    <a href="#" style={{ color: "#F2994A" }}>
                        Read More article
                    </a>
                </div>
            </div>
            <div className="blog_block2">
                <div className="blog_card">
                    <Image src={bath} alt="" />
                    <div style={{ color: "#F2994A", fontWeight: "700" }}>
                        Heating
                    </div>
                    <span
                        style={{
                            color: "#72421C",
                            fontWeight: "600",
                            lineHeight: "15px",
                        }}
                    >
                        December 30, 2019
                    </span>
                    <h3>How, when and why we stay</h3>
                    <p>
                        Staying in touch with customers is important for any
                        company; it often forms part of any good marketing
                        strategy. Staying in touch with customers is important
                        for any company; it often forms part of any good
                        marketing strategy.{" "}
                    </p>
                    <Link href={`/blog/1`}>
                        <span
                            style={{
                                color: "#F2994A",
                            }}
                        >
                            Read More article
                        </span>
                    </Link>
                </div>
                <div className="blog_card">
                    <Image src={bath} alt="" />
                    <div style={{ fontWeight: "700", color: "#9B51E0" }}>
                        Cooling
                    </div>
                    <span
                        style={{
                            color: "#72421C",
                            fontWeight: "600",
                            lineHeight: "15px",
                        }}
                    >
                        December 30, 2019
                    </span>
                    <h3>How, when and why we stay</h3>
                    <p>
                        Staying in touch with customers is important for any
                        company; it often forms part of any good marketing
                        strategy. Staying in touch with customers is important
                        for any company; it often forms part of any good
                        marketing strategy.
                    </p>
                    <Link href={`/blog/1`}>
                        <span
                            style={{
                                color: "#F2994A",
                            }}
                        >
                            Read More article
                        </span>
                    </Link>
                </div>
            </div>

            <div className="blog_block3 hidden md:grid">
                {getMiniData().map((item) => (
                    <div className="blog_card" key={item.id}>
                        <Image
                            width={100}
                            height={100}
                            src={item.image1 ? item.image1 : bath}
                            alt=""
                        />
                        <div style={{ color: "#F2994A", fontWeight: "700" }}>
                            Heating
                        </div>
                        <span
                            style={{
                                color: "#72421C",
                                fontWeight: "600",
                                lineHeight: "15px",
                                fontSize: "12px",
                            }}
                        >
                            December 30, 2019
                        </span>
                        <h3>{item.title}</h3>
                        <p>
                            {item.description.length > 200
                                ? item.description.slice(0, 200) + " ..."
                                : item.description}
                        </p>
                        <Link href={`/blog/${item.id}`}>
                            <span
                                style={{
                                    color: "#F2994A",
                                    position: "absolute",
                                    bottom: "10px",
                                    left: "10px",
                                }}
                            >
                                Read More article
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="blog_block3 grid md:hidden">
                {posts.results.map((item) => (
                    <div className="blog_card" key={item.id}>
                        <Image src={bath} alt="" />
                        <div style={{ color: "#F2994A", fontWeight: "700" }}>
                            Heating
                        </div>
                        <span
                            style={{
                                color: "#72421C",
                                fontWeight: "600",
                                lineHeight: "15px",
                                fontSize: "12px",
                            }}
                        >
                            December 30, 2019
                        </span>
                        <h3>{item.title}</h3>
                        <p>
                            {item.description.length > 200
                                ? item.description.slice(0, 200) + " ..."
                                : item.description}
                        </p>
                        <Link href={`/blog/${item.id}`}>
                            <span
                                style={{
                                    color: "#F2994A",
                                    position: "absolute",
                                    bottom: "10px",
                                    left: "10px",
                                }}
                            >
                                Read More article
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
            {/* <section className="">
                <div className="flex">
                    <div className="w-1/2">
                        <Image src={bath} alt="" />
                    </div>
                    <div className="">
                        <div className="dsa">
                            <span
                                style={{
                                    color: "#107EBD",
                                    fontWeight: "700",
                                }}
                            >
                                Business Strategy{" "}
                            </span>
                        </div>
                        <div>
                            <span
                                style={{
                                    color: "#72421C",
                                    fontWeight: "600",
                                    lineHeight: "15px",
                                }}
                            >
                                December 30, 2019
                            </span>
                        </div>
                        <h1 className="text-3xl">
                            A-Series Ultra Low NOx Gas Furnace 80% Single Stage
                            40,000 BTU Non-Variable Upflow/Horizontal 14.5 wide
                        </h1>
                        <p className="">
                            A global print fulfillment company partnered with
                            Mason Interactive to grow omnichannel sales via
                            Search Engine Optimization (SEO). During the course
                            of the engagement, the client saw a 134% increase in
                            organic traffic, resulting in a measurable increase
                            in leads, and sales. the client saw a 134% increase
                            in organic traffic, resulting in a measurable
                            increase in leads, and sales.
                            <div>
                                <span style={{ color: "#F2994A" }}>
                                    Read More article
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-3 gap-x-4 gap-y-9">
                {posts?.results.map((item) => (
                    <Link key={item.id} href={`/blog/${item.id}`}>
                        {item.title}
                    </Link>
                ))}
            </div> */}
        </Layout>
    );
}
