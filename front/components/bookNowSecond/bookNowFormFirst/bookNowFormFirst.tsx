"use client";
import React, { useEffect, useState } from "react";
import "./bookNowFormFirst.css";
import axios from "axios";

export default function BookNowFormFirst({
  setFormData,
  formData,
  services,
  changeLocalStorage,
  message,
  setState,
}: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEamil] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState<any>(null);
  // const [location, setLocation] = useState(
  //   localStorage.getItem("currentLocation") || ""
  //     ? JSON.parse(localStorage.getItem("currentLocation") || "")
  //     : {}
  // );
  const [location, setLocation] = useState();
  const [currentLocation, setCurrentLocation] = useState({});
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("currentLocation")
    ) {
      setLocation(
        localStorage.getItem("currentLocation") || ""
          ? JSON.parse(localStorage.getItem("currentLocation") || "")
          : {}
      );
    }
  }, []);
  useEffect(() => {
    if (JSON.stringify(location) === "{}") {
      axios("https://itek-dev.highcat.org/api/location/find/").then(
        ({ data }) => setLocation(data)
      );
    }
  }, []);

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
          }}>
          <option disabled value="0">
            service
          </option>
          {services.map((item: any) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>

        <button
          onClick={() => {
            if (name && phone && address && email && service) {
              setState(true);
              setFormData({
                name,
                phone,
                address,
                email,
                service,
                location: location.id,
              });
            }
          }}>
          {" "}
          Next
        </button>
        {message ? <p>{message}</p> : ""}
      </div>
    </>
  );
}
