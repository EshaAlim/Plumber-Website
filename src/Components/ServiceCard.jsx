import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/ServiceCard.css";

const ServiceCard = ({ icon, title, features, description, active }) => {
  return (
    <div className={`service-card ${active ? "active" : ""}`}>
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p className="features">{features}</p>
      <p className="description">{description}</p>
    </div>
  );
};
