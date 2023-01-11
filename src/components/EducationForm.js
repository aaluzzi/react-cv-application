import React from "react";

class EducationForm extends React.Component {

    constructor() {
        super();
        this.state = {
            school: '',
            qualification: '',
            startDate: '',
            endDate: '',
        };

        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeQualification = this.onChangeQualification.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
      }

    onChangeSchool(e) {
        this.setState({
            school: e.target.value
        });
    }

    onChangeQualification(e) {
        this.setState({
            qualification: e.target.value
        });
    }

    onChangeStartDate(e) {
        this.setState({
            startDate: e.target.value
        });
    }

    onChangeEndDate(e) {
        this.setState({
            endDate: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.props.onSubmitEducation(e, this.state)}>
                    <h2>Education</h2>
                    <input type="text" placeholder="School" onChange={this.onChangeSchool} required />
                    <input type="text" placeholder="Qualification" onChange={this.onChangeQualification} required />
                    <input type="text" placeholder="Start Date" onChange={this.onChangeStartDate} required />
                    <input type="text" placeholder="End Date" onChange={this.onChangeEndDate} required />
                    <div className="button-row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default EducationForm;