import React from "react";
import StudentNavbar from "./StudentNavbar";
import { StudentTable } from "../../components/studentTable";

export const StudentDashboard = () => {
  return (
    <div>
      <StudentNavbar/>
      <div>
        <StudentTable />
      </div>
    </div>
  );
};
