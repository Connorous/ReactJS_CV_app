import "../Styles/main.css";
import { useState } from "react";

export default function InfoForm({
  firstNameValue,
  firstNameId,
  lastNameValue,
  lastNameId,
  emailValue,
  emailId,
  phoneNumberValue,
  phoneNumberId,
  submitFunction,
  hide,
}) {
  if (hide === false) {
    var [firstName, setFirstName] = useState(firstNameValue);
    var [lastName, setLastName] = useState(lastNameValue);
    var [email, setEmail] = useState(emailValue);
    var [phoneNumber, setPhoneNumber] = useState(phoneNumberValue);

    var FrName = firstName;
    var LtName = lastName;
    var Email = email;
    var PhNum = phoneNumber;

    return (
      <section className="info-form">
        <h1>Your Personal Details</h1>
        <p style={{ textAlign: "center" }}>
          Enter your name, email and phone number in the fields below:
        </p>
        <br></br>
        <div className="flex-container">
          <div>
            <h3>First Name</h3>
            <input
              type="text"
              value={FrName}
              id={firstNameId}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Last Name</h3>
            <input
              type="text"
              value={LtName}
              id={lastNameId}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex-container">
          <div>
            <h3>Email</h3>
            <input
              type="text"
              value={Email}
              id={emailId}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Phone Number</h3>
            <input
              type="number"
              value={PhNum}
              id={phoneNumberId}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
        </div>
        <button onClick={submitFunction}>Save</button>
      </section>
    );
  }
}
