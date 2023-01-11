import React from "react";
import '../styles/Education.css';

class EducationDisplay extends React.Component {

    render() {
        return (
            <div className="education">
                <p className="education-header">EDUCATION</p>
                <div className="divider"></div>
                <div className="university-attendance">
                    <p class="university">{this.props.details.school}</p>
                    <p>{this.props.details.startDate} - {this.props.details.endDate}</p>
                </div>
                <p>{this.props.details.qualification}</p>             
            </div>
        );
    }

}

export default EducationDisplay;