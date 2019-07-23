import React, { Component } from "react";

export class UserItem extends Component {
  constructor() {
    super();
   
  }

  render() {
    return (
      <div className="card text-center">
        <img
          src={this.props.avatarUrl}
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{this.props.login}</h3>
        <div><a href={this.props.htmlUrl}>More</a></div>
      </div>
    );
  }
}

export default UserItem;
