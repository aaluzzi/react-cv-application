import React from "react";

class PersonalInfoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: 'John',
            lastName: '',
            email: '',
            phoneNumber: '',
        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.props.onSubmitPersonalInfo(e, this.state)}>
                    <h2>Personal Details</h2>
                    <input type="text" placeholder="First Name" onChange={this.onChangeFirstName} required />
                    <input type="text" placeholder="Last Name" onChange={this.onChangeLastName} required />
                    <input type="email" placeholder="Email" onChange={this.onChangeEmail} required />
                    <input type="text" placeholder="Phone Number" onChange={this.onChangePhoneNumber} required />
                    <div className="button-row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default PersonalInfoForm;