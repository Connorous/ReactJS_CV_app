import "../Styles/main.css";
import { useState } from "react";

export default function EducationForm({
  id,
  schoolNameValue,
  degreeValue,
  dateCompletedValue,
  hide,
  deleteFunction,
  submitFunction,
  editFunction,
}) {
  var [school, setSchool] = useState(schoolNameValue);
  var [degree, setDegree] = useState(degreeValue);
  var [date, setDate] = useState(dateCompletedValue);
  if (hide === false) {
    return (
      <div>
        <br></br>
        <div className="flex-container">
          <div>
            <h3>School Name</h3>
            <input
              type="text"
              value={school}
              id={school}
              onChange={(e) => setSchool(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Date Completed</h3>
            <input
              type="date"
              value={date}
              id={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex-container">
          <div>
            <h3>Degree</h3>
            <input
              type="text"
              value={degree}
              id={degree}
              onChange={(e) => setDegree(e.target.value)}
            ></input>
          </div>
        </div>
        <br></br>
        <div className="button-flex-area">
          <button onClick={() => submitFunction(id, school, degree, date)}>
            Save
          </button>
          <button onClick={() => deleteFunction(id)}>Delete</button>
        </div>
      </div>
    );
  } else {
    return (
      <section>
        <div className="flex-container">
          <div className="left-container">
            <h3>School</h3>
            <p type="text" value={school}>
              {school}
            </p>
          </div>
          <div>
            <h3>Date Completed</h3>
            <p type="text" value={date}>
              {date}
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div>
            <h3>Degree</h3>
            <p type="text" value={degree}>
              {degree}
            </p>
          </div>
        </div>
        <button onClick={() => editFunction(id)}>Edit</button>
      </section>
    );
  }
}
