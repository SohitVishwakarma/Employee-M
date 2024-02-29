import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManagePeople from "./components/PeopleServices/managePeople";
import AddPeoples from "./components/pages/create";
import EditPeoples from "./components/pages/editpeople";
import SearchPeoples from "./components/pages/searchPeople";
import ViewPeoples from "./components/pages/peopleList";
import PeopleReport from "./components/pages/PeopleReport";
import NavMain from "./components/layout/NavMain";

function App() {
  return (
    <Router>
      <div className="App">
        <NavMain />
        <Switch>
          <Route exact path="/" component={ManagePeople} />
          <Route path="/create" component={AddPeoples} />
          <Route path="/peoplesList" component={ViewPeoples} />
          <Route path="/editpeople/:id" component={EditPeoples} />
          <Route path="/searchPeople" component={SearchPeoples} />
          <Route path="/PeopleReport" component={PeopleReport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
