import React, { Component } from 'react'

export class Navbar extends Component {
    static defaultProps = {
        navClass: 'fab fa-github',
        title: 'Github Finder'
    }
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.navClass}></i> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
