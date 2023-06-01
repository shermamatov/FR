import React, { useMemo } from "react";
import "./block6.css";
import { useQuery } from "@tanstack/react-query";
import "./latestAdaptive.css";
import { fetchPosts } from "../../../../api";
import { Link } from "react-router-dom";
const LatestPost = () => {
    const { data = [] } = useQuery(["post"], fetchPosts);

    const formatter = useMemo(
        () =>
            new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
            }),
        []
    );

    const blog = useMemo(() => {
        const leftPart = data.slice(0, 3);
        const rightPost1 = data[3];
        const rightPost2 = data[4];

        return { leftPart, rightPost1, rightPost2 };
    }, [data]);

    const { leftPart, rightPost1, rightPost2 } = blog;

    return (
        <div className="latest-Post">
            <h1 className="latest">LATEST POST</h1>
            <div className="Latest-Post-main">
                <div className="the-first-left-post">
                    {leftPart.map((post) => (
                        <article key={post.id} className="post">
                            <figure className="post1">
                                <img src={post.image1} alt="" />
                            </figure>
                            <div className="about1">
                                <p className="date">
                                    {formatter.format(
                                        new Date(post.created_at)
                                    )}
                                </p>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="title1"
                                >
                                    {post.title}
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="the-first-right-post">
                    {rightPost1 && (
                        <div className="postnot">
                            <img src={rightPost1.image1} alt="" />
                            <div className="about11">
                                <p className="datenot">
                                    {formatter.format(
                                        new Date(rightPost1.created_at)
                                    )}
                                </p>
                                <Link
                                    to={`/blog/${rightPost1.id}`}
                                    className="titlenot"
                                >
                                    {rightPost1.title}
                                </Link>
                            </div>
                        </div>
                    )}
                    {rightPost2 && (
                        <div className="postnot1">
                            <img src={rightPost2.image1} alt="" />
                            <div className="about11">
                                <p className="datenot">
                                    {formatter.format(
                                        new Date(rightPost2.created_at)
                                    )}
                                </p>
                                <Link
                                    to={`/blog/${rightPost2.id}`}
                                    className="titlenot1"
                                >
                                    {rightPost2.title}
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="btn_block">
                <Link to="/blog" className="latest__btn">
                    View all posts
                </Link>
            </div>
        </div>
    );
};

export default LatestPost;
