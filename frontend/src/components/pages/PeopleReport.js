import React, { PureComponent, Component } from "react";
import axios from "axios";
import "./people.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Peoples = (props) => (
  <tr>
    <td>{props.peoples.fname}</td>
    <td>{props.peoples.eid}</td>
    <td>{props.peoples.email}</td>
    <td>{props.peoples.designation}</td>
    <td>{props.peoples.jdate}</td>
    <td>{props.peoples.mnumber}</td>
    <td>{props.peoples.etype}</td>
    <td>{props.peoples.experience}</td>
  </tr>
);

export default class pdfGenerator extends PureComponent {
  constructor(props) {
    super(props);

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

  peoplesDetailsList() {
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

  jsPdfGenerator = () => {
    var doc = new jsPDF("p", "pt");

    doc.autoTable({ html: "#peoplesDetailsTable" });

    doc.save("Employee_Report.pdf");
  };

  render() {
    return (
      <div className="viewPeoplesPage">
        <br />
        <div className="container">
          <h3 className="PeoplepeoplesDetails">EMPLOYEE DETAILS</h3>
          <table className="table" id="peoplesDetailsTable">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Joined Date</th>
                <th>Mobile Number</th>
                <th>Employee Type</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>{this.peoplesDetailsList()}</tbody>
          </table>

          <button onClick={this.jsPdfGenerator} className="generateRepoBtn">
            GENERATE REPORT
          </button>
        </div>
      </div>
    );
  }
}
