import React from "react";
import "../Styles/NewPatientConfirmation.css";
import { useHistory } from "react-router-dom";

export default function NewPatientConfirmation() {
  const history = useHistory();
  return (
    <div >
      <div className="pic-wrapper">
        <img
          className="confirmation-img"
          src={require("../images/confirmation-png-free-confirmationpng-transparent-images-38571-confirm-png-512_512.png")}
          alt=""
        />
      </div>
      <div className="confirmation-text-wrapper">
        <h1>The user has been registered successfully</h1>
      </div>
      <div className="close-btn-wrapper">
      <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem",
                        position: "relative",
                        left: "850px",
                        top: "100px"
                      }}
                      onClick= {() => {history.push("/dashboard")}}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      
                      Close
                    </button>
      </div>
    </div>
  );
}
