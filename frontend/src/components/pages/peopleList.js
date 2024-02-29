import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./people.css";

const Peoples = (props) => (
  <tr>
    <td>{props.peoples.fname}</td>
    <td>{props.peoples.nwi}</td>
    <td>{props.peoples.eid}</td>
    <td>{props.peoples.gender}</td>
    <td>{props.peoples.email}</td>
    <td>{props.peoples.designation}</td>
    <td>{props.peoples.jdate}</td>
    <td>{props.peoples.salary}</td>
    <td>{props.peoples.pnotes}</td>
    <td>{props.peoples.dname}</td>
    <td>{props.peoples.dob}</td>
    <td>{props.peoples.mnumber}</td>
    <td>{props.peoples.etype}</td>
    <td>{props.peoples.experience}</td>

    <td>
      <Link to={"/editpeople/" + props.peoples._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deletePeoples(props.peoples._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ViewPeoples extends Component {
  constructor(props) {
    super(props);

    this.deletePeoples = this.deletePeoples.bind(this);

    this.state = { peoples: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/peoples/")
      .then((response) => {
        this.setState({ peoples: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deletePeoples(id) {
    axios
      .delete("http://localhost:5000/peoples/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      peoples: this.state.peoples.filter((sml) => sml._id !== id),
    });
  }

  peoplesList() {
    return this.state.peoples.map((currentpeoples) => {
      return (
        <Peoples
          peoples={currentpeoples}
          deletePeoples={this.deletePeoples}
          key={currentpeoples._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="viewPeoplePage">
        <br />
        <div className="container" id="viewPeopleForm">
          <button className="searchPeopleBtn">
            <Link className="toAddPage" to="/searchPeople">
              Search Employee
            </Link>
          </button>
          <h3 className="viewPeopleTitle">PEOPLE</h3>
          <br />
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Display Name</th>
                <th>Emp ID</th>
                <th>Designation</th>
                <th>Emp. Type</th>
                <th>Experience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.peoplesList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
