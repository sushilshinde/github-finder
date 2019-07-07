import React, { Component } from "react";

const UserItem = (props) =>{
      return (
      <div className="card text-center">
        <img
          src={props.avatarUrl}
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{props.login}</h3>
        <div><a href={props.htmlUrl}>More</a></div>
      </div>
    );
}

export default UserItem;
