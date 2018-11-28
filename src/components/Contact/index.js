import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="Contact">
      <img
        src={require("../../assets/Secret-Clayton.png")}
        alt="Clayton Weller upside down poking out of the bottom of the app"
        className="clayton"
      />
      <div className="info">
        <button>Contact</button>
        <div>clayton.weller@gmail.com</div>
        <div>303.803.4589</div>
      </div>
    </div>
  );
}
