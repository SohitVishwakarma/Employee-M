import React, { useState, useEffect } from "react";
import axios from "axios";
import "./people.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/peoples/").then((response) => {
      setPeople(response.data);
    });
  }, []);

  useEffect(
    () => {
      setFilteredData(
        people.filter((people) =>
          people.cname.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    [search],
    people
  );

  return (
    <div className="searchPeoplesPage">
      <br />
      <div className="container" id="searchMadicinForm">
        <h3 className="searchMadicinTitle">SEARCH EMPLOYEE DETAILS</h3>
        <h5>Enter Employee type To View Employee Details </h5>
        <br />
        <input
          className="searchBar"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <br />
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Employee Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((val) => {
              return (
                <div key={val.eid}>
                  <td>{val.fname}</td>
                  <td>{val.gender}</td>
                  <td>{val.email}</td>
                  <td>{val.designation}</td>
                  <td>{val.etype}</td>
                  <td>{val.experience}</td>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchBar;
