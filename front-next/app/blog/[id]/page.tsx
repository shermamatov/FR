import { Post, fetchPostById } from "@/api";
import { PageNavProps } from "@/app/types";
import { Layout } from "@/components/Layout";
import { use } from "react";
import twit from "@/assets/twit.png";
import link from "@/assets/link.png";
import share from "@/assets/share.png";
import face from "@/assets/face.png";
import bath from "@/assets/blogSingle_banner1.webp";
import bath2 from "@/assets/bath.png";
import Image from "next/image";
import "../blogPage.scss";
export default function BlogSingle({ params }: PageNavProps) {
    const post = use(fetchPostById(params.id));
    function sliceServArr() {
        let arra = [...post.services];
        let a = arra.splice(0, 3);
        return a;
    }
    return (
        <Layout className="content">
            <div>
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
                <div className="blogSingle_main_block">
                    <Image
                        src={post.image1 || bath}
                        width={100}
                        height={100}
                        unoptimized
                        alt=""
                    />
                    <div
                        style={{
                            color: "#107EBD",
                            whiteSpace: "nowrap",
                            textAlign: "center",
                            fontWeight: "700",
                            marginTop: "30px",
                        }}
                    >
                        Business Strategy
                    </div>

                    <h1>{post.title}</h1>
                    <p className="blogSingle_blogData">
                        POSTED ON DECEMBER 2,2021
                    </p>
                    <p>{post.description}</p>
                    <Image
                        src={post.image2 || bath}
                        width={100}
                        height={100}
                        unoptimized
                        alt=""
                    />
                    <div className="blogSingle_services_block">
                        {sliceServArr().map((item) => (
                            <div key={item.id}>
                                <Image src={bath2} alt="sorry" />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="qestion">
                        <h4>1. What is the point of this meeting?</h4>
                        <p>
                            Yet, as many higher education professionals can
                            surely attest to, I have also witnessed the other
                            challenge in group decision making. In academia,
                            engaging in critical dissent is encouraged (reviewed
                            by Jetten & Hornsey, 2014), and while this is a fine
                            attribute, practically, this can mean that we
                            sometimes spend so much time expressing our
                            thoughts, opinions, and concerns trying to reach
                            consensus and we somehow never arrive at decisions
                            in a timely manner.
                        </p>
                    </div>
                    <div className="qestion">
                        <h4>2. What is the problem?</h4>
                        <p>
                            To make decisions as a group, the problems must
                            first be clarified. In a meeting focused on
                            problem-solving, be sure to agree on a definition of
                            the problem before talking about potential solutions
                            (Rogelberg, Scott, & Kello, 2007).
                        </p>
                    </div>
                    <div className="qestion">
                        <h4>3. Have a leader who leads.</h4>
                        <p>
                            While everyone should feel comfortable talking,
                            someone must lead. Too often I have watched meetings
                            end with “okay, well…we are out of time, so let’s
                            continue this next time.” Or “let’s chew on this” or
                            “let’s table this” or “well, there’s a lot here,
                            so…..” (the sentence doesn’t even get completed as
                            they look to the others for a direction).
                        </p>
                    </div>
                    <p className="margin">
                        A leader needs to watch the time and not waste the point
                        of the meeting. Satisfaction with a meeting and
                        perception of meeting productivity are significantly and
                        positively related to leaders being able to move a
                        meeting along and encourage decision making (Malouff et
                        al., 2012).
                    </p>
                    <div className="yasmin_block">
                        <p>
                            Yasmine is currently an Associate Professor of
                            Psychology at Mount Saint Mary College where she
                            teaches a wide array of courses in the Psychology
                            department. She is a Fulbright Scholar spent a year
                            working at the Medical Decision Making Center at Ono
                            Academic College in Israel.
                        </p>
                    </div>
                    <p>
                        While everyone should feel comfortable talking, someone
                        must lead. Too often I have watched meetings end with
                        “okay, well…we are out of time, so let’s continue this
                        next time.” Or “let’s chew on this” or “let’s table
                        this” or “well, there’s a lot here, so…..” (the sentence
                        doesn’t even get completed as they look to the others
                        for a direction).
                    </p>
                    <div className="line"></div>
                    <div className="mess">
                        <Image src={share} alt="" />
                        <Image src={face} alt="" />
                        <Image src={twit} alt="" />
                        <Image src={link} alt="" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
