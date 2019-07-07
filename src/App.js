import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/UserItem";
import Users from "./components/Users";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar ></Navbar>
        <Users></Users>
      </div>
    );
  }
}

export default App;
