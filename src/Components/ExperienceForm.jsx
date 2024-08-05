import "../Styles/main.css";
import { useState } from "react";

export default function ExperienceForm({
  id,
  companyNameValue,
  positonNameValue,
  responsibilitesValue,
  dateStartedValue,
  dateEndedValue,
  hide,
  deleteFunction,
  submitFunction,
  editFunction,
}) {
  var [company, setCompany] = useState(companyNameValue);
  var [position, setPosition] = useState(positonNameValue);
  var [responsibilites, setResponsibilities] = useState(responsibilitesValue);
  var [dateStarted, setDateStarted] = useState(dateStartedValue);
  var [dateEnded, setDateEnded] = useState(dateEndedValue);
  if (hide === false) {
    return (
      <div>
        <br></br>
        <div className="flex-container">
          <div>
            <h3>Company</h3>
            <input
              type="text"
              value={company}
              id={company}
              onChange={(e) => setCompany(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Position</h3>
            <input
              type="text"
              value={position}
              id={position}
              onChange={(e) => setPosition(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex-container">
          <div>
            <h3>Responsibilties</h3>
            <textarea
              type="text"
              value={responsibilites}
              id={responsibilites}
              onChange={(e) => setResponsibilities(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex-container">
          <div>
            <h3>Date Started Employment</h3>
            <input
              type="date"
              value={dateStarted}
              id={dateStarted}
              onChange={(e) => setDateStarted(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Date Ended Employment</h3>
            <input
              type="date"
              value={dateEnded}
              id={dateEnded}
              onChange={(e) => setDateEnded(e.target.value)}
            ></input>
          </div>
        </div>
        <br></br>
        <div className="button-flex-area">
          <button
            onClick={() =>
              submitFunction(
                id,
                company,
                position,
                responsibilites,
                dateStarted,
                dateEnded
              )
            }
          >
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
            <h3>Company</h3>
            <p type="text" value={company}>
              {company}
            </p>
          </div>
          <div>
            <h3>Position</h3>
            <p type="text" value={position}>
              {position}
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div>
            <h3>Responsibilites</h3>
            <p type="text" value={responsibilites}>
              {responsibilites}
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="left-container">
            <h3>Date Started Employment</h3>
            <p type="text" value={dateStarted}>
              {dateStarted}
            </p>
          </div>
          <div>
            <h3>Date Ended Employment</h3>
            <p type="text" value={dateEnded}>
              {dateEnded}
            </p>
          </div>
        </div>
        <button onClick={() => editFunction(id)}>Edit</button>
      </section>
    );
  }
}
