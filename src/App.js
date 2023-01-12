import React from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

import PersonalInfoDisplay from "./components/PersonalInfoDisplay";
import EducationDisplay from "./components/EducationDisplay";
import ExperienceDisplay from "./components/ExperienceDisplay";

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
          startDate: '2016',
          endDate: '2020',
        },
        experience: {
          company: 'Some Company',
          position: 'Junior Developer',
          startDate: '2020',
          endDate: '2022',
          description: 'Mi proin sed libero enim sed faucibus. Urna nec tincidunt praesent semper feugiat nibh. Volutpat blandit aliquam etiam erat velit. Sed turpis tincidunt id aliquet risus feugiat.'
        }
    };

    this.onSubmitPersonalInfo = this.onSubmitPersonalInfo.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.onSubmitExperience = this.onSubmitExperience.bind(this);
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
  }

  onSubmitExperience(e, data) {
    e.preventDefault();
    this.setState({
      experience: data
    })
  }

  render() {
    return (
      <div className="app">
        <div className="forms">
          <PersonalInfoForm onSubmitPersonalInfo={this.onSubmitPersonalInfo} />
          <EducationForm onSubmitEducation={this.onSubmitEducation} />
          <ExperienceForm onSubmitExperience={this.onSubmitExperience} />
        </div>
      
        <div className="resume">
          <PersonalInfoDisplay details={this.state.personalDetails} />
          <EducationDisplay details={this.state.education} />
          <ExperienceDisplay details={this.state.experience} />
        </div>
      </div>
    );
  }

}

export default App;
