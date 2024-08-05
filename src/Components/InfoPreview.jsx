import "../Styles/main.css";

export default function InfoPreview({ userInfo, show, editFunction }) {
  if (show === true) {
    return (
      <section>
        <h1>Personal Details</h1>
        <br></br>
        <div className="flex-container">
          <div className="left-container">
            <h3>First Name</h3>
            <p type="text" value={userInfo.FirstName}>
              {userInfo.FirstName}
            </p>
          </div>
          <div>
            <h3>Last Name</h3>
            <p type="text" value={userInfo.LastName}>
              {userInfo.LastName}
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div>
            <h3>Email</h3>
            <p type="text" value={userInfo.Email}>
              {userInfo.Email}
            </p>
          </div>
          <div>
            <h3>Phone Number</h3>
            <p type="number" value={userInfo.PhoneNumber}>
              {userInfo.PhoneNumber}
            </p>
          </div>
        </div>
        <button onClick={editFunction}>Edit</button>
      </section>
    );
  }
}
