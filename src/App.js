import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Assignment1 from "./assignment1/assignment1";
import Assignment2 from './assignment2/assignment2';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={MainComponent} />
        <Route path="/assignment1" exact component={Assignment1} />
        <Route path="/assignment2" exact component={Assignment2} />
      </Switch>
    </div>
  )
}

const MainComponent = () => {
  return <div className="container">
    <div className="mt-5 pt-5 d-flex justify-content-around align-items-center" >
      <Link to="/assignment1" ><button className="btn btn-success">Assignment 1</button></Link>
      <Link to="/assignment2" ><button className="btn btn-success">Assignment 2</button></Link>
    </div>
  </div>
}