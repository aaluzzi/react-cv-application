import React from "react";

class ExperienceForm extends React.Component {

    constructor() {
        super();
        
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
      }

    onChangeCompany(e) {
        this.setState({
            company: e.target.value
        });
    }

    onChangePosition(e) {
        this.setState({
            position: e.target.value
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

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.props.onSubmitExperience(e, this.state)}>
                    <h2>Work Experience</h2>
                    <input type="text" placeholder="Company" onChange={this.onChangeCompany} required />
                    <input type="text" placeholder="Position" onChange={this.onChangePosition} required />
                    <input type="text" placeholder="Start Date" onChange={this.onChangeStartDate} required />
                    <input type="text" placeholder="End Date" onChange={this.onChangeEndDate} required />
                    <input type="text" placeholder="Description" onChange={this.onChangeDescription} required />
                    <div className="button-row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default ExperienceForm;