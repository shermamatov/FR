import React, { useEffect, useState } from "react";
import "./BlockNowForm1.css";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../../../redux/reducers/app";

const BlockNowForm1 = ({ changeLocalStorage, setFormData, message }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEamil] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState(null);
  const [location, setLocation] = useState(null);

  const services = useSelector((s) => s.app.services);
  const locations = useSelector((s) => s.app.locations);
  const currentLocation = useSelector(s => s.app.currentLocation);
  useEffect(() => {
    dispatch(getLocations());
  });
  return (
    <>
      <div
        className="blockNowForm1"
        // style={{ display: "flex" }}
      >
        <h1 className="blockNowForm1_title">
          Fill out the form and we will come as soon as possible.
        </h1>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          type="text"
        />
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="Phone"
          type="tel"
        />
        <input
          onChange={(e) => {
            setEamil(e.target.value);
          }}
          placeholder="E-Mail"
          type="email"
        />
        <input
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address"
          type="text"
        />
        <select
          defaultValue={"0"}
          onChange={(e) => {
            setService(e.target.value);
          }}
        >
          <option disabled value="0">
            service
          </option>
          {services.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        {/* <select
          defaultValue={"0"}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          <option disabled value="0">
            city/location
          </option>
          {locations.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.location_name}
              </option>
            );
          })}
        </select> */}
        <button
          onClick={() => {
            if (name && phone && address && email && service && currentLocation) {
              changeLocalStorage(true);
              setFormData({
                name,
                phone,
                address,
                email,
                service,
                location: currentLocation.id,
              });
            }
          }}
        >
          {" "}
          Next
        </button>
        {message.length > 0 ? <p>{message}</p> : ""}
      </div>
    </>
  );
};

export default BlockNowForm1;
