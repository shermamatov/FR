import React, { useEffect, useState } from "react";
import "./NavbarModal.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNestedList } from "../../../redux/reducers/app";

const NavbarModal = ({ setModal, modal }) => {
  const services = useSelector((s) => s.app.services);
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    setServicesList(createNestedList(services, 10));
  }, [services]);
  return (
    <div
      onMouseOver={() => setModal(true)}
      onMouseLeave={() => setModal(false)}
      className="nav_modal"
      style={{ display: `${modal ? "flex" : "none"}` }}
    >
      {
      servicesList.length === 0
      ? ''
      :servicesList.map((element) => {
        return (
          <ul key={element[0].id}>
            {element.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    navigate(`/services/${item.slug}`);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default NavbarModal;
