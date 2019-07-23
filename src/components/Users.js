import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";

const Users =(props) => {

      if(props.loadingInProgress){
        return <Spinner />
      }else{
        return <div style={userStyle}>
            {props.users.map(user => (
            <UserItem
                key={user.id}
                login={user.login}
                htmlUrl={user.html_url}
                avatarUrl={user.avatar_url}
            />
            ))}
        </div>
      }

}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    padding: '0px 20px'
}

export default Users;
