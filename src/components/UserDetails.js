import React, { Component } from 'react'
import Spinner from './Spinner';
import {Link} from 'react-router-dom'
export class UserDetails extends Component {
    
    componentDidMount(){
        this.props.getUser(this.props.match.params.id)
    }

    render() {
        if(this.props.loadingInProgress) return <Spinner></Spinner>

        return <React.Fragment>
        <Link to="/" className="btn btn-light">Back</Link>
        <p>{this.props.user.login}</p>
        </React.Fragment>
    
    }
}

export default UserDetails
