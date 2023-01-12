import React from "react";
import '../styles/Resume.css';

class ExperienceDisplay extends React.Component {

    render() {
        return (
            <div className="section">
                <p className="header">WORK EXPERIENCE</p>
                <div className="divider"></div>
                <div className="sub-header">
                    <p>{this.props.details.position}</p>
                    <p><span className="company">{this.props.details.company}</span> | {this.props.details.startDate} - {this.props.details.endDate}</p>
                </div>
                <p>{this.props.details.description}</p>             
            </div>
        );
    }

}

export default ExperienceDisplay;