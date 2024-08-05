import { useState, useEffect } from "react";
import uuid from "react-uuid";
import ExperienceForm from "./Components/ExperienceForm";

import "./Styles/base.css";
import "./Styles/main.css";

function ExperienceDetails({ WorkExperience, setParentWorkExperience }) {
  var [workExperience, setWorkExperience] = useState(WorkExperience);

  useEffect(() => {
    setParentWorkExperience(workExperience);
  }, [workExperience]);

  function editWorkExperience(workExperienceId) {
    setWorkExperience(
      workExperience.map((experience) => {
        if (experience.id === workExperienceId) {
          return {
            ...experience,
            complete: false,
          };
        } else {
          return experience;
        }
      })
    );
  }

  function uuidFromUuidV4() {
    const newUuid = uuid();
    return newUuid;
  }

  function newWorkExperience() {
    setWorkExperience([
      ...workExperience,
      {
        id: uuidFromUuidV4(),
        company: "",
        position: "",
        responsibilites: "",
        dateStarted: "",
        dateEnded: "",
        complete: false,
      },
    ]);
  }

  function deleteWorkExperience(workExperienceId) {
    setWorkExperience(
      workExperience.filter((experience) => experience.id !== workExperienceId)
    );
  }

  function updateWorkExperience(
    workExperienceId,
    editedCompany,
    editedPosition,
    editedResponsibilities,
    editedStartDate,
    editedEndDate
  ) {
    setWorkExperience(
      workExperience.map((experience) => {
        if (experience.id === workExperienceId) {
          return {
            ...experience,
            company: editedCompany,
            position: editedPosition,
            responsibilites: editedResponsibilities,
            dateStarted: editedStartDate,
            dateEnded: editedEndDate,
            complete: true,
          };
        } else {
          return experience;
        }
      })
    );
  }

  return (
    <>
      <section>
        <h1>Work Experience</h1>
        <p style={{ textAlign: "center" }}>
          For each of your past work experiences enter the name of the company
          you worked at, the position you held, describe some key
          responsiblities, and provide the date you started and ended work at
          the company in the fields below:
        </p>
        {workExperience.map((experience) => (
          <ExperienceForm
            key={experience.id}
            id={experience.id}
            companyNameValue={experience.company}
            positonNameValue={experience.position}
            responsibilitesValue={experience.responsibilites}
            dateStartedValue={experience.dateStarted}
            dateEndedValue={experience.dateEnded}
            deleteFunction={deleteWorkExperience}
            hide={experience.complete}
            submitFunction={updateWorkExperience}
            editFunction={editWorkExperience}
          ></ExperienceForm>
        ))}
        <br></br>
        <button className="plusButton" onClick={newWorkExperience}>
          +
        </button>
      </section>
    </>
  );
}

export default ExperienceDetails;
