import React, { Component } from "react";
import axios from "axios";
import "./people.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class Addpeople extends Component {
  constructor(props) {
    super(props);

    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeNwi = this.onChangeNwi.bind(this);
    this.onChangeEid = this.onChangeEid.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDesignation = this.onChangeDesignation.bind(this);
    this.onChangeJdate = this.onChangeJdate.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangePnotes = this.onChangePnotes.bind(this);
    this.onChangeDname = this.onChangeDname.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeMnumber = this.onChangeMnumber.bind(this);
    this.onChangeEtype = this.onChangeEtype.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fname: "",
      nwi: "",
      eid: "",
      gender: "",
      email: "",
      designation: "",
      jdate: new Date(),
      salary: "",
      pnotes: "",
      dname: "",
      dob: new Date(),
      mnumber: "",
      etype: "",
      experience: "",
    };
  }
  onChangeFname(e) {
    this.setState({
      fname: e.target.value,
    });
  }
  onChangeNwi(e) {
    this.setState({
      nwi: e.target.value,
    });
  }
  onChangeEid(e) {
    this.setState({
      eid: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeDesignation(e) {
    this.setState({
      designation: e.target.value,
    });
  }

  onChangeJdate(e) {
    this.setState({
      jdate: e.target.value,
    });
  }

  onChangeSalary(e) {
    this.setState({
      salary: e.target.value,
    });
  }
  onChangePnotes(e) {
    this.setState({
      pnotes: e.target.value,
    });
  }
  onChangeDname(e) {
    this.setState({
      dname: e.target.value,
    });
  }
  onChangeDob(e) {
    this.setState({
      dob: e.target.value,
    });
  }
  onChangeMnumber(e) {
    this.setState({
      mnumber: e.target.value,
    });
  }
  onChangeEtype(e) {
    this.setState({
      etype: e.target.value,
    });
  }

  onChangeExperience(e) {
    this.setState({
      experience: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const people = {
      fname: this.state.fname,
      nwi: this.state.nwi,
      eid: this.state.eid,
      gender: this.state.gender,
      email: this.state.email,
      designation: this.state.designation,
      jdate: this.state.jdate,
      salary: this.state.salary,
      pnotes: this.state.pnotes,
      dname: this.state.dname,
      dob: this.state.dob,
      mnumber: this.state.mnumber,
      etype: this.state.etype,
      experience: this.state.experience,
    };

    console.log(people);

    axios
      .post("http://localhost:5000/peoples/add", people)
      .then((res) => console.log(res.data));
    alert("People Details Added!");
    window.location = "/peopleList";
  }

  render() {
    return (
      <div className="createPeoplePage">
        <br />
        <div id="createPeopleForm">
          <h3 className="createPeopleTitle">Add New People</h3>
          <br />
          <div class="container">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label>Full Name* </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.fname}
                  onChange={this.onChangeFname}
                />
                <br />
              </div>
              <div class="col-left">
                <div class="form-group">
                  <label>Name with initials*</label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.nwi}
                    onChange={this.onChangeNwi}
                  />

                  <br />
                </div>
                <div class="form-group">
                  <label>Employee ID*</label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.eid}
                    onChange={this.onChangeEid}
                  />

                  <br />
                </div>
                <div class="form-group">
                  <label for="validationCustom04" class="form-label">
                    Gender:
                  </label>

                  <select
                    class="form-select"
                    id="validationCustom04"
                    required
                    value={this.state.gender}
                    onChange={this.onChangeGender}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>

                  <br />
                </div>
                <div class="form-group">
                  <label>Email </label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                  <br />
                </div>

                <div class="form-group">
                  <label>Designation </label>

                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.designation}
                    onChange={this.onChangeDesignation}
                  />
                  <br />
                </div>
                <div class="form-group">
                  <label>Joined Date</label>
                  <div>
                    <DatePicker
                      selected={this.state.jdate}
                      onChange={this.onChangeJdate}
                    /> 
                    <br />
                    <br />
                  </div>
                </div>
                <div class="form-group">
                  <label>Salary</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.salary}
                    onChange={this.onChangeSalary}
                  />
                  <br />
                </div>
                <div class="form-group">
                  <label>Personal Notes</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.pnotes}
                    onChange={this.onChangePnotes}
                  />
                  <br />
                </div>
              </div>

              <div class="col-right">
                <div class="form-group">
                  <label>Preferred / Display Name </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.dname}
                    onChange={this.onChangeDname}
                  />
                  <br />
                </div>
                <div class="form-group">
                  <label>Date of Birth</label>
                  <div>
                    <DatePicker
                      selected={this.state.dob}
                      onChange={this.onChangeDob}
                    />
                    <br />
                    <br />
                  </div>
                </div>
                <div class="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.mnumber}
                    onChange={this.onChangeMnumber}
                  />
                  <br />
                </div>
                <div class="form-group">
                  <label for="validationCustom04" class="form-label">
                    Employee Type
                  </label>

                  <select
                    class="form-select"
                    id="validationCustom04"
                    required
                    value={this.state.etype}
                    onChange={this.onChangeEtype}
                  >
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contract Basis</option>
                    <option>Other</option>
                  </select>

                  <br />
                </div>
                <div class="form-group">
                  <label for="validationCustom04" class="form-label">
                    Experience
                  </label>

                  <select
                    class="form-select"
                    id="validationCustom04"
                    required
                    value={this.state.experience}
                    onChange={this.onChangeExperience}
                  >
                    <option>1 Year</option>
                    <option>2 Year</option>
                    <option>3 Year</option>
                    <option>4 Year</option>
                    <option>5 Year</option>
                    <option>5+ Year</option>
                  </select>

                  <br />
                </div>
              </div>
              <div className="form-group">
                <a href="/" class="btn btn-info" role="button">
                  Cancel
                </a>
                <input
                  id="CpBtn"
                  type="Submit"
                  value="Create people"
                  className="btn btn-primary"
                  onClick={this.getTotal}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
