import { useState } from "react";
import UserDetails from "./UserDetails";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";

function CVCreationPage() {
  var [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
  });

  var [education, setEducation] = useState([]);
  var [workExperience, setWorkExperience] = useState([]);

  //console.log("current user info ", userInfo);
  //console.log("current education info ", education);
  //console.log("current work experience info ", workExperience);

  function updateUserInfo(updatedUserInfo) {
    setUserInfo(updatedUserInfo);
    //console.log("updated ", updatedUserInfo);
  }

  function updateEducation(updatedEducation) {
    setEducation(updatedEducation);
    //console.log("updated ", updatedEducation);
  }

  function updateWorkExperience(updatedWorkExperience) {
    setWorkExperience(updatedWorkExperience);
    //console.log("updated ", updatedWorkExperience);
  }

  function submit() {
    console.log("Your submitted info ", userInfo);
    console.log("Your submitted education ", education);
    console.log("Your submitted work experience ", workExperience);
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <UserDetails UserInfo={userInfo} setParentUserInfo={updateUserInfo} />
      <br></br>
      <br></br>
      <br></br>
      <EducationDetails
        Education={education}
        setParentEducation={updateEducation}
      ></EducationDetails>
      <br></br>
      <br></br>
      <br></br>
      <ExperienceDetails
        WorkExperience={workExperience}
        setParentWorkExperience={updateWorkExperience}
      ></ExperienceDetails>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default CVCreationPage;
