import React from "react";
import "./NavbarModal.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarModal = ({ setModal, modal }) => {
  const services = useSelector((s) => s.app.services);
  const navigate = useNavigate();

  return (
    <div
      onMouseOver={() => setModal(true)}
      onMouseLeave={() => setModal(false)}
      className="nav_modal"
      style={{ display: `${modal ? "flex" : "none"}` }}
    >
      <ul>
        {services.map((item) => {
          return <li key={item.id} onClick={()=>{
            navigate(`/services/${item.id}`)
          }}>{item.title}</li>;
        })}
      </ul>
      <ul>
        {services.map((item) => {
          return <li key={item.id} onClick={()=>{
            navigate(`/services/${item.id}`)
          }}>{item.title}</li>;
        })}
      </ul>
      <ul>
        {services.map((item) => {
          return <li key={item.id} onClick={()=>{
            navigate(`/services/${item.id}`)
          }}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavbarModal;
