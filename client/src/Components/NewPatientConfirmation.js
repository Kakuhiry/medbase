import React from "react";
import "../Styles/NewPatientConfirmation.css";

export default function NewPatientConfirmation() {
  return (
    <div>
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
        <button className="close-btn">Cerrar</button>
      </div>
    </div>
  );
}
