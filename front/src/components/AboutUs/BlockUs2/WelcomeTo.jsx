import "./blockUs2.css";
import yelp from "../../../images/Yelp.png";
import facebook from "../../../images/Facebook.png";
import google from "../../../images/Google.png";
import stars from "../../../images/block1Stars.png";
import galochkaIcon from "../../../images/galochka.png";
import blockUs2Subtitle from '../../../images/blockUs2-subtitle.png';
import blockUs2SubtitleMobile from '../../../images/blockUs2-subtitle-mobile.png';
import blockUs2Icon1 from '../../../images/blockUs2-icon1.svg';
import blockUs2Icon2 from '../../../images/blockUs2-icon2.svg';

const WelcomeTo = () => {
  return (
    <section className="blockUs2">
      <div className="blockUs2_title">
        <h1>
          welcome to
          <br />
          #1furniture restoration
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="blockUs2_wrapper_left">
              <h2 className="blockUs2_subtitle1">Our engineers are trained </h2>
              <img src={blockUs2Subtitle} alt="" className="blockUs2_subtitle2" />
              <img src={blockUs2SubtitleMobile} alt="" className="blockUs2_subtitle2-mobile" />
            </div>
          </div>
          <div className="col-6">
            <div className="left_bottom_block">
              <div className="block1_desc">
                <div className="bord">
                  <img src={galochkaIcon} alt="" />
                  <h4>30+ years experience in engineering</h4>
                </div>
                <div className="bord">
                  <img src={galochkaIcon} alt="" />
                  <h4>Available 24/7 for Emergencies</h4>
                </div>
                <div className="bord">
                  <img src={galochkaIcon} alt="" />
                  <h4>Quick service Same-Day inspection and estimate</h4>
                </div>
                <div className="rating_block bord">
                  <img src={stars} alt="" />
                  <p>95% of clients recommend us</p>
                </div>
                <div className="mass_block bord">
                  <img src={google} alt="" />
                  <img src={facebook} alt="" />
                  <img src={yelp} alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
        <p className="blockUs2_text">
          Our attention to detail and commitment to our values have helped us
          grow. It all started 15 years ago with our President, a young aspiring
          HVAC technician, who wanted to make an impact in the industry. Well,
          with his drive, and the help of our NexGen family along the way, we've
          grown to 8 locations across Southern California, servicing customers
          every day and continuing to grow into the industry standard for all
          things HVAC. Welcome to NexGen!
        </p>

      </div>
      <div className="blockUs2_bottom">
            <div className="blockUs2_bottom_bg">
                <div className="blockUs2_bottom_item">
                    <img src={blockUs2Icon1} alt="" />
                    <div className="blockUs2_bottom_item_text">
                        <h4>+1000</h4>
                        <p>Completed project</p>
                    </div>
                </div>
                <div className="blockUs2_bottom_item">
                <img src={blockUs2Icon2} alt="" />
                    <div className="blockUs2_bottom_item_text">
                        <h4>+5000</h4>
                        <p>clients reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WelcomeTo;
