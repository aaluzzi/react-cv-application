import React from "react";

import '../styles/Resume.css'

class PersonalInfoDisplay extends React.Component {

    render() {
        return (
            <div className="personal-details">
                <h1>{this.props.details.firstName} {this.props.details.lastName}</h1>
                <p>{this.props.details.email} | {this.props.details.phoneNumber}</p>
            </div>
        );
    }

}

export default PersonalInfoDisplay;