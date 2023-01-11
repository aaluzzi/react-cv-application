import React from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";

import PersonalInfoDisplay from "./components/PersonalInfoDisplay";
import EducationDisplay from "./components/EducationDisplay";

import './styles/App.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        personalDetails: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          phoneNumber: '123-456-7890',
        },
        education: {
          school: 'Princeton University',
          qualification: 'Bachelor of Science in Computer Science',
          startDate: '2020',
          endDate: '2024',
        }
    };

    this.onSubmitPersonalInfo = this.onSubmitPersonalInfo.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
  }

  onSubmitPersonalInfo(e, data) {
    e.preventDefault();
    this.setState({
      personalDetails: data
    })
  }

  onSubmitEducation(e, data) {
    e.preventDefault();
    this.setState({
      education: data
    })
    console.log(this.state.education);
  }

  render() {
    return (
      <div className="app">
        <div className="forms">
          <PersonalInfoForm onSubmitPersonalInfo={this.onSubmitPersonalInfo}/>
          <EducationForm onSubmitEducation={this.onSubmitEducation}/>
        </div>
      
        <div className="resume">
          <PersonalInfoDisplay details={this.state.personalDetails} />
          <EducationDisplay details={this.state.education} />
        </div>
      </div>
    );
  }

}

export default App;
