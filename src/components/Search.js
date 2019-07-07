import React, { Component } from "react";
import Alert from "./Alert";

export class Search extends Component {
  state = {
    text: "",
    showAlert: false
  };

  onChange = e => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    const q = this.state.text;

    if (q === "") {
      this.setState({ showAlert: true });
      setInterval(() => {
        this.setState({ showAlert: false });
      }, 3000);
    } else {
      this.setState({ showAlert: false });
      this.props.searchUsers(q);
    }
  }

  render() {
    return (
      <React.Fragment>
        <form style={{padding: '0px 20px'}} className="form" onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
          {this.props.showClear && (
            <input
              type="button"
              value="Clear"
              className="btn btn-block"
              onClick={this.props.clearUsers}
            />
          )}
        </form>
        <Alert style={{padding: '0px 20px'}}
          msg="Please enter query"
          isError={this.state.showAlert}
          type={"light"}
        />
      </React.Fragment>
    );
  }
}

export default Search;
