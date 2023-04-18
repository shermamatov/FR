import "./ServBlock4.scss";
import servBlock4Img from "../../../../images/servBlock4-img.png";

const Servblock4 = () => {
  return (
    <section className="servBlock4">
      <div className="servBlock4_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img src={servBlock4Img} alt="" className="servBlock4_img" />
            </div>
            <div className="col-7">
              <h1 className="servBlock4_title">
                SEO TITLE HVAC CONTRACTOR <br /> IN LOS ANGELES
              </h1>
              <p className="servBlock4_text">
                A global print fulfillment company partnered with Mason
                Interactive to grow omnichannel sales via Search Engine
                Optimization (SEO). During the course of the engagement, the
                client saw a 134% increase in organic traffic, resulting in a
                measurable increase in leads, and sales.
              </p>
            </div>
          </div>
          <button className="servBlock4_btn">Read more</button>
        </div>
        <h2 className="servBlock4_bottomText1">Our engineers are trained </h2>

      </div>
    </section>
  );
};

export default Servblock4;
