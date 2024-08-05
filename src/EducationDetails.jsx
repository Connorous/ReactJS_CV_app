import { useState, useEffect } from "react";
import uuid from "react-uuid";
import EducationForm from "./Components/EducationForm.jsx";

import "./Styles/base.css";
import "./Styles/main.css";

function EducationDetails({ Education, setParentEducation }) {
  var [education, setEducation] = useState(Education);

  useEffect(() => {
    setParentEducation(education);
  }, [education]);

  function editEducation(educationId) {
    setEducation(
      education.map((certification) => {
        if (certification.id === educationId) {
          return {
            ...certification,
            complete: false,
          };
        } else {
          return certification;
        }
      })
    );
  }

  function uuidFromUuidV4() {
    const newUuid = uuid();
    return newUuid;
  }

  function newEducation() {
    setEducation([
      ...education,
      {
        id: uuidFromUuidV4(),
        school: "",
        degree: "",
        dateCompleted: "",
        complete: false,
      },
    ]);
  }

  function deleteEducation(educationId) {
    setEducation(
      education.filter((certification) => certification.id !== educationId)
    );
  }

  function updateEducation(
    educationId,
    editedSchool,
    editedDegree,
    editedDate
  ) {
    setEducation(
      education.map((certification) => {
        if (certification.id === educationId) {
          return {
            ...certification,
            school: editedSchool,
            degree: editedDegree,
            dateCompleted: editedDate,
            complete: true,
          };
        } else {
          return certification;
        }
      })
    );
  }

  return (
    <>
      <section>
        <h1>Education</h1>
        <p style={{ textAlign: "center" }}>
          For each of the educations or certifications you've earned enter the
          name of the school/institute, the name of the degree earned, and the
          date you completed the degree in the fields below:
        </p>
        {education.map((certification) => (
          <EducationForm
            key={certification.id}
            id={certification.id}
            schoolNameValue={certification.school}
            degreeValue={certification.degree}
            dateCompletedValue={certification.dateCompleted}
            deleteFunction={deleteEducation}
            hide={certification.complete}
            submitFunction={updateEducation}
            editFunction={editEducation}
          ></EducationForm>
        ))}
        <br></br>
        <button className="plusButton" onClick={newEducation}>
          +
        </button>
      </section>
    </>
  );
}

export default EducationDetails;
