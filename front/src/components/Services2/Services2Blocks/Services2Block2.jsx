import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNestedList } from "../../../redux/reducers/app";

const Services2Block2 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [hide, setHide] = useState(false);
  const services = useSelector((s) => s.app.services);
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (width < 740) {
        setHide(true);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setServicesList(createNestedList(services, 10))
  }, [services]);
  return (
    <div
      className={
        hide === false
          ? "services_block serv_block2"
          : "services_block-2 serv_block2"
      }
    >
      <div
        className={hide === false ? "services__wrapper" : "services__wrapper-2"}
      >
        <div className="container ">
          <div className="services__inner">
            <div className="services__top services_top_adap">
              <h2 className="services__title bord">
                FR Services in <br /> Southern California
              </h2>
              <p className="services__desc bord">
                The core SEO strategy has remained steady from day one: provide
                high-quality content to website visitors and be an authoritative
                thought leader in the industry; creating new, highly-useful
                content for the blog and landing pages; focusing on on-page
                optimizations targeting high-value search-terms.
              </p>
            </div>
            <div className="services__bottom srv_bottom_adap">
                {
                    servicesList.length === 0
                    ?   <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    :servicesList.map(element=>{
                        return  <ul key={element[0].id} className="services__list services__list--fc">
                        {element.map((item) => (
                          <li
                            key={item.id}
                            onClick={() => {
                              navigate(`/services/${item.slug}`);
                            }}
                          >
                            <span>{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    })
                }


            </div>
            <div className={width > 740 ? "d-none" : "btn_block"}>
              {hide === false ? (
                <button
                  onClick={() => {
                    setHide(true);
                  }}
                >
                  Read more
                </button>
              ) : (
                <button
                  onClick={() => {
                    setHide(false);
                  }}
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2Block2;
