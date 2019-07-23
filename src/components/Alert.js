import React from 'react'

const Alert = (props) => {
    return (
        props.isError && 
        <div  className={`alert alert-${props.type}`}>
            <i className="fas fa-info-circle"></i> {props.msg}
        </div>
    )
}

export default Alert
