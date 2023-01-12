import React from "react";
import '../styles/Resume.css';

class EducationDisplay extends React.Component {

    render() {
        return (
            <div className="section">
                <p className="header">EDUCATION</p>
                <div className="divider"></div>
                <div className="sub-header">
                    <p>{this.props.details.school}</p>
                    <p>{this.props.details.startDate} - {this.props.details.endDate}</p>
                </div>
                <p>{this.props.details.qualification}</p>             
            </div>
        );
    }

}

export default EducationDisplay;