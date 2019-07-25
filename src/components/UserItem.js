import React, { Component } from "react";
import {Link} from 'react-router-dom'

const UserItem = (props) =>{
      return (
      <div className="card text-center">
        <img
          src={props.avatarUrl}
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>
          <Link to={`/user/${props.login}`}>{props.login}</Link>
          
        </h3>
        <div><a href={props.htmlUrl}>More</a></div>
      </div>
    );
}

export default UserItem;
