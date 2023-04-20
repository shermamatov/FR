import React from "react";
import "./Blog.css";
import person from "../../images/person.png";
import person2 from "../../images/person2.png";
import person3 from "../../images/person3.png";
import bath from "../../images/bath.png";

const Blog = () => {
  return (
    <main className="blog ">
      <div className="blog-box">
        <section className="all-title">
          <ul className="all-title-block">
            <li className="title-li">All</li>
            <li style={{ color: "#9B51E0" }} className="title-li">
              Cooling
            </li>
            <li style={{ color: "#107EBD" }} className="title-li">
              Business Strategy{" "}
            </li>
            <li style={{ color: "#EC2A48" }} className="title-li">
              Heating{" "}
            </li>
            <li style={{ color: "#F2994A" }} className="title-li">
              Repairing
            </li>
            <li style={{ color: "#219653" }} className="title-li">
              Commercial
            </li>
          </ul>
        </section>
        <section className="about-infor">
          <div className="about-infor-box">
            <div className="description-image">
              <img src={person} alt="" />
            </div>
            <div className="title-for">
              <div className="dsa">
                <span style={{ color: "#107EBD", fontWeight: "700" }}>
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
              <h1 className="h1-a-server">
                A-Series Ultra Low NOx Gas Furnace 80% Single Stage 40,000 BTU
                Non-Variable Upflow/Horizontal 14.5" wide
              </h1>
              <p className="a-global">
                A global print fulfillment company partnered with Mason
                Interactive to grow omnichannel sales via Search Engine
                Optimization (SEO). During the course of the engagement, the
                client saw a 134% increase in organic traffic, resulting in a
                measurable increase in leads, and sales. the client saw a 134%
                increase in organic traffic, resulting in a measurable increase
                in leads, and sales.
                <div>
                  <span style={{ color: "#F2994A" }}>Read More article</span>
                </div>
              </p>
            </div>
          </div>
        </section>
        <section className="two-fail">
          <div className="two-fail-box">
            <div className="two">
              <img src={person2} alt="" />
              <div>
                <span style={{ color: "#F2994A", lineHeight: "2" }}>
                  Heating
                </span>
              </div>
              <h3>How, when and why we stay</h3>
              <p>
                Staying in touch with customers is important for any company; it
                often forms part of any good marketing strategy.{" "}
              </p>
              <span style={{ color: "#F2994A" }}>Read More article</span>
            </div>

            <div className="two">
              <img src={person3} alt="" />
              <div>
                <span style={{ color: "#F2994A", lineHeight: "2" }}>
                  Heating
                </span>
              </div>
              <h3>How, when and why we stay</h3>
              <p>
                Staying in touch with customers is important for any company; it
                often forms part of any good marketing strategy.{" "}
              </p>
              <span style={{ color: "#F2994A" }}>Read More article</span>
            </div>
          </div>
        </section>
        <section className="four-faiis">
          <div className="two-fail-boxs">
            <div className="twos">
              <img src={bath} alt="" />
              <div>
                <span style={{ color: "#F2994A", lineHeight: "2" }}>
                  Heating
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "#72421C",
                    lineHeight: "2",
                    fontWeight: "600",
                  }}
                >
                  December 30, 2019
                </span>
              </div>
              <h3>How, when and why we stay</h3>
              <p>
                Staying in touch with customers is important for any company; it
                often forms part of any good marketing strategy.{" "}
              </p>
              <span style={{ color: "#F2994A" }}>Read More article</span>
            </div>

            <div className="twos">
              <img src={bath} alt="" />
              <div>
                <span style={{ color: "#F2994A", lineHeight: "2" }}>
                  Heating
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "#72421C",
                    lineHeight: "2",
                    fontWeight: "600",
                  }}
                >
                  December 30, 2019
                </span>
              </div>
              <h3>How, when and why we stay</h3>
              <p>
                Staying in touch with customers is important for any company; it
                often forms part of any good marketing strategy.{" "}
              </p>
              <span style={{ color: "#F2994A" }}>Read More article</span>
            </div>
            <div className="twos">
              <img src={bath} alt="" />
              <div>
                <span style={{ color: "#F2994A", lineHeight: "2" }}>
                  Heating
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "#72421C",
                    lineHeight: "2",
                    fontWeight: "600",
                  }}
                >
                  December 30, 2019
                </span>
              </div>
              <h3>How, when and why we stay</h3>
              <p>
                Staying in touch with customers is important for any company; it
                often forms part of any good marketing strategy.{" "}
              </p>
              <span style={{ color: "#F2994A" }}>Read More article</span>
            </div>
            <div className="twos">
              <img src={bath} alt="" />
              <div>
                <span style={{ color: "#F2994A", lineHeight: "2" }}>
                  Heating
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "#72421C",
                    lineHeight: "2",
                    fontWeight: "600",
                  }}
                >
                  December 30, 2019
                </span>
              </div>
              <h3>How, when and why we stay</h3>
              <p>
                Staying in touch with customers is important for any company; it
                often forms part of any good marketing strategy.{" "}
              </p>
              <span style={{ color: "#F2994A" }}>Read More article</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Blog;
