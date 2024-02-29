import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./people.css";
export default class EditPatient extends Component {
  constructor(props) {
    super(props);

    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeNwi = this.onChangeNwi.bind(this);
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
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/peoples/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          fname: response.data.fname,
          nwi: response.data.nwi,
          gender: response.data.gender,
          email: response.data.email,
          designation: response.data.designation,
          jdate: new Date(response.data.jdate),
          salary: response.data.salary,
          pnotes: response.data.pnotes,
          dname: response.data.dname,
          dob: new Date(response.data.dob),
          mnumber: response.data.mnumber,
          etype: response.data.etype,
          experience: response.data.experience,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
      .post(
        "http://localhost:5000/peoples/edit/" + this.props.match.params.id,
        people
      )
      .then((res) => console.log(res.data));

    alert("People Details Updated!");
    window.location = "/peopleList";
  }

  render() {
    return (
      <div className="editPeoplePage">
        <br />
        <div className="container" id="editPeopleForm">
          <h3 className="addStaffTitle">EDIT PEOPLE DETAILS</h3>
          <br />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
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
            <div className="form-group">
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
            <div class="col-md-3">
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
            <div className="form-group">
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

            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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

            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
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
            <div class="col-md-3">
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
                <option>Male</option>
                <option>Female</option>
              </select>
              <br />
            </div>
            <div class="col-md-3">
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
                <option>Male</option>
                <option>Female</option>
              </select>
              <br />
            </div>

            <br />
            <div className="form-group">
              <input
                id="editPipBtn"
                type="submit"
                value="Edit Pipcine Details"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
