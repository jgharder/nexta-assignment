import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function Update() {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const baseURL = "https://624c4d8ee80949c2696e576f.mockapi.io/campaign/";

  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setBudget(localStorage.getItem("Budget"));
    setStartDate(localStorage.getItem("Start Date"));
    setEndDate(localStorage.getItem("End Date"));
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    axios.put(baseURL + id, {
      name,
      budget,
      startDate,
      endDate,
    });
    redirectToRead();
  };

  const redirectToRead = () => {
    alert("Update Successfull");
    window.location.href = "/";
  };
 

  return (
    <div>
      <h1 className="h1">Update your campaign</h1>
      <form id="myform" className="form">
        <div>
          <label>Name</label>
          <input
            className="form-items"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Budget</label>
          <input
            className="form-items"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div>
          <label>Start Date</label>
          <br />
          <input
            className="form-items dateTime-form-items"
            type={"date"}
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date</label>
          <br />
          <input
            className="form-items dateTime-form-items"
            type={"date"}
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="button-wrapper">
        <button type="submit" onClick={updateAPIData} className="update-button">
          Update
        </button>
        </div>
      </form>
    </div>
  );
}
