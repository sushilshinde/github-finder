import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/UserItem";
import Users from "./components/Users";
import axios from "axios";
import Search from "./components/Search";
import { async } from "q";
import About from "./components/About";
class App extends Component {

  state = {
    users: [],
    loadingInProgress: false
  }
  
  searchUsers = async query => {
    this.setState({loadingInProgress:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users: res.data.items,loadingInProgress: false})
  }

  clearUsers = () => {
    this.setState({users:[], loadingInProgress:false})
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => (
            <React.Fragment>
              <Search showClear={this.state.users.length > 0 ? true : false}  clearUsers={this.clearUsers} searchUsers={this.searchUsers}></Search>
              <Users loadingInProgress={this.state.loadingInProgress} users={this.state.users}></Users>
            </React.Fragment>
          )} >           
          </Route>
          <Route path="/about" component={About}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
