import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { ApplicantForms } from "./ApplicantForms";

export const StudentForm = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ApplicantForms />
      </div>
    </div>
  );
};
