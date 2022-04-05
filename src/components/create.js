import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const baseURL = "https://624c4d8ee80949c2696e576f.mockapi.io/campaign";
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(baseURL, {
        name: name,
        budget: budget,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(name, budget);
  };

  return (
    <form>
      <div>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input
          placeholder="Budget"
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <button onClick={postData} type="submit">
        Submit
      </button>
    </form>
  );
}
