import React, { useEffect, useState } from "react";
import "./style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9b68da8ede872e7fb936461fd9a2a4f9`;
      const response = await fetch(url);
      const resjson = await response.json();

      setCity(resjson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputbox">
          <input
            type="search"
            value={search}
            className="inputfield"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No data Found</p>
        ) : (
          <div className="info">
            <div className="location">
              <i className="fa-solid fa-street-view"></i> {search}
            </div>
            <h1 className="temp">{city.temp}°cel</h1>
            <h3 className="tempmin_max">Min : {city.temp}°cel | Max : {city.temp}°cel</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
