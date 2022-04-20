import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext";
import axios from "axios";

const NoteState = (props) => {
  const prevAuth = window.localStorage.getItem("auth") || false;
  const prevUser = JSON.parse(window.localStorage.getItem("user")) || null;

  const [authToken, setAuthToken] = useState(prevAuth);
  const [currentUser, setCurrentUser] = useState(prevUser);
  const [totalData, setTotalData] = useState();
  const [totalLahoreData, settotalLahoreData] = useState([]);
  const [totalIslamabadData, settotalIslamabadData] = useState([]);
  const [loggedInStudent, setLoggedInStudent] = useState([])


  useEffect(() => {
    if (!authToken) window.localStorage.clear();
    else window.localStorage.setItem("auth", authToken);

    if (!currentUser) localStorage.clear();
    else window.localStorage.setItem("user", JSON.stringify(currentUser));
  }, [authToken, currentUser]);

  useEffect(() => {
    FetchStudents();
    FetchStudentLahore();
    FetchStudentIslamabad();
  }, []);

  const FetchStudents = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/students",
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    setTotalData(response.data.length)

  };

  const FetchStudentLahore = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/students/filter?branch=Lahore`,
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    settotalLahoreData(response.data.length)
  };

  const FetchStudentIslamabad = () => {
    axios
      .get(
        `http://localhost:5000/api/students/filter?branch=Islamabad`,
        {
          headers: {
            authorization: authToken,
          },
        }
      )
      .then((response) => {
        settotalIslamabadData(response.data.length);
      });
  };

  const defaultContext = {
    currentUser,
    setCurrentUser,
    authToken,
    setAuthToken,
    totalData,
    totalLahoreData,
    totalIslamabadData,
    loggedInStudent,
    setLoggedInStudent
  };
  
  return (
    <NoteContext.Provider value={defaultContext}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

