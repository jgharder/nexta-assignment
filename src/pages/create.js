import React, { useState } from "react";
import axios from "axios";
import "../components/style.css";

export default function Create() {
  const baseURL = "https://624c4d8ee80949c2696e576f.mockapi.io/campaign/";

  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(baseURL, {
        name: name,
        budget: budget,
        startDate: startDate,
        endDate: endDate,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    document.getElementById("myform").reset();
    resetState();
    redirectToRead();
  };

  const resetState = () => {
    setName("");
    setBudget("");
    setStartDate("");
    setEndDate("");
  };

  const redirectToRead = () => {
    alert("Created new campaign Successfully");
    window.location.href = "/";
  };

  return (
    <>
    < h1 className="h1">Create a new campaign</h1>
      <form id="myform" className="form">
        <div>
          <input
            type="text"
            className="form-items"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="form-items "
            type={"number"}
            placeholder="Budget"
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-items dateTime-form-items"
            type={"date"}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-items dateTime-form-items"
            type={"date"}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="button-wrapper">
          <button onClick={postData} type="submit" className="create-button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
