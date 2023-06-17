import { fetchBlog } from "@/api";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { use, useMemo } from "react";
import "./blogPage.scss";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Explore the World of Furniture Restoration - Insights and Inspiration from #1furniturerestoration's Blog ",
        description:
            "Welcome to the captivating world of furniture restoration through the eyes of #1furniturerestoration's blog. Delve into a treasure trove of insightful articles, expert tips, and inspiring stories that celebrate the art of preserving and rejuvenating furniture. From guides on DIY repairs to exploring different restoration techniques, our blog is a valuable resource for both enthusiasts and novices alike. Immerse yourself in the fascinating journey of furniture transformation and discover how our passion for craftsmanship can breathe new life into your cherished pieces. Get inspired and enhance your knowledge with #1furniturerestoration's captivating blog content.",
    };
}

export default function Blog() {
    const posts = use(fetchBlog());

    const formatter = useMemo(
        () =>
            new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
            }),
        []
    );
    console.log(posts.results);

    return (
        <Layout className="content">
            {posts.results.slice(0, 1).map((item) => (
                <div className="blog_block1" key={item.id}>
                    <div className="blog_block1_left">
                        <img src={item.image1 || "/bath.png"} alt="" />
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
                                {formatter.format(new Date(item.created_at))}
                            </span>
                        </div>
                        <h1>{item.h1}</h1>
                        <p>{item.description}</p>
                        <Link
                            href={`/blog/${item.id}`}
                            style={{ color: "#F2994A" }}
                        >
                            Read More article
                        </Link>
                    </div>
                </div>
            ))}

            <div className="blog_block2">
                {posts.results.slice(1, 3).map((item) => (
                    <div
                        className="blog_card"
                        style={{ position: "relative" }}
                        key={item.id}
                    >
                        <img src={item.image1 || "/bath.png"} alt="" />
                        <div
                            style={{
                                color: "#F2994A",
                                fontWeight: "700",
                                marginBottom: "4px",
                            }}
                        >
                            Heating
                        </div>
                        <span
                            style={{
                                color: "#72421C",
                                fontWeight: "600",
                                lineHeight: "15px",
                            }}
                        >
                            {formatter.format(new Date(item.created_at))}
                        </span>
                        <h3 className="blog-card-title">{item.title}</h3>
                        <p className="blog-card-desc">{item.description}</p>
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

            <div className="blog_block3 hidden md:grid">
                {posts.results.slice(4).map((item) => (
                    <div className="blog_card" key={item.id}>
                        <img
                            src={item.image1 ? item.image1 : "/bath.png"}
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
                            {formatter.format(new Date(item.created_at))}
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
                        <img
                            src={item.image1 ? item.image1 : "/bath.png"}
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
        </Layout>
    );
}
