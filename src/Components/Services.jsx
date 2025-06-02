import React from "react";
import ServiceCard from "./ServiceCard";
import { FaTools, FaWater, FaWrench, FaExclamationTriangle } from "react-icons/fa";
import "../assets/Services.css";

const Services = () => {
  return (
    <div className="services-container container text-center">
      <h2 className="title">PLUMB & PLUMBING <br /> OF SERVICES</h2>
      <p className="subtitle">A PROFESSIONAL TRAINING ACADEMY SPECIALIZING IN BOTOX AND DERMAL FILLED CERTIFICATION; OFFERING COMPREHENSIVE, HANDS-ON COURSES FOR HEALTHCARE PROFESSIONALS</p>
      <button className="btn btn-dark">LEARN MORE</button>
      
      <div className="row mt-4">
        <div className="col-md-3">
          <ServiceCard icon={<FaExclamationTriangle />} title="EMERGENCY" features="24/7 | BURST PIPES" description="We offer advanced training courses for plumbing emergencies." />
        </div>
        <div className="col-md-3">
          <ServiceCard icon={<FaTools />} title="DRAIN CLEANING" features="REMOVE BLOCKAGES | CLOGS" description="Our experts provide top-notch drain cleaning solutions." active={true} />
        </div>
        <div className="col-md-3">
          <ServiceCard icon={<FaWrench />} title="PIPE REPAIR" features="DAMAGED PIPES | FULL PIPE" description="We specialize in pipe repairs for all types of damages." />
        </div>
        <div className="col-md-3">
          <ServiceCard icon={<FaWater />} title="WATER HEATER" features="INSTALLATION | WATER HEATERS" description="We provide professional water heater installation services." />
        </div>
      </div>
    </div>
  );
};
