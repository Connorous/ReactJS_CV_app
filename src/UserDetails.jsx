import { useState, useEffect } from "react";
//import Preview from "./Components/Preview.jsx";
import InfoForm from "./Components/InfoForm.jsx";
import InfoPreview from "./Components/InfoPreview.jsx";
import "./Styles/base.css";

function UserDetails({ UserInfo, setParentUserInfo }) {
  var [info, setInfo] = useState(UserInfo);

  var [infoComplete, setInfoComplete] = useState(false);

  useEffect(() => {
    setParentUserInfo(info);
  }, [info]);

  function updateInfo() {
    setInfo({
      FirstName: document.getElementById("FirstName").value,
      LastName: document.getElementById("LastName").value,
      Email: document.getElementById("Email").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
    });
    setInfoComplete(true);
  }

  function edit() {
    setInfoComplete(false);
  }

  return (
    <>
      <InfoForm
        firstNameValue={info.FirstName}
        firstNameId="FirstName"
        lastNameValue={info.LastName}
        lastNameId="LastName"
        emailValue={info.Email}
        emailId="Email"
        phoneNumberValue={info.PhoneNumber}
        phoneNumberId="PhoneNumber"
        submitFunction={updateInfo}
        hide={infoComplete}
      ></InfoForm>
      <InfoPreview
        userInfo={info}
        show={infoComplete}
        editFunction={edit}
        hide1={infoComplete}
      ></InfoPreview>
    </>
  );
}

export default UserDetails;
