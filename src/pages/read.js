import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/style.css";

export default function Read() {
  const baseURL = "https://624c4d8ee80949c2696e576f.mockapi.io/campaign/";

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseURL).then((res) => {
        setAPIData(res.data);
      });
    };
    fetchData();
  }, []);

  const setData = (data) => {
    console.log(data);
    let { id, name, budget } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Budget", budget);
    localStorage.setItem("Start Date", data.startDate);
    localStorage.setItem("End Date", data.endDate);
  };


  const onDelete = (id) => {
    axios.delete(baseURL + id).then(() => {
      getData();
    });
  };

  const getData = () => {
    axios.get(baseURL).then((res) => {
      setAPIData(res.data);
    });
  };

  return (
    <>
      <h1 className="h1-read">Campaigns</h1>
      <table>
        <thead>
          <tr>
            <th className="table-head">Name</th>
            <th className="table-head">Budget</th>
            <th className="table-head">Start Date</th>
            <th className="table-head">End Date</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((item) => (
            <tr key={item.id} className="table-row">
              <td className="table-item">{item.name}</td>
              <td className="table-item">{item.budget}</td>
              <td className="table-item">{item.startDate}</td>
              <td className="table-item">{item.endDate}</td>
              <td>
                <Link to="/update">
                  <button
                    onClick={() => setData(item)}
                    className="update-button"
                  >
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => onDelete(item.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
