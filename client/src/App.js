import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import StudentLogin from "./pages/login/StudentLogin/StudentLogin";
import { StudentForm } from "./pages/StudentForm";
import { Portals } from "./pages/Portals";
import ProtectedRoute from "./ProtectedRoutes";
import NoteState from "./RootContext/NoteState";
import { ErrorPage } from "./pages/ErrorPage";
import {StudentDashboard} from "../src/pages/studentDashboard";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <NoteState>
      <div className={darkMode ? "app dark" : "app"}>
        <Router>    
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/studentlogin">
              <StudentLogin />
            </Route>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute exact path="/staff">
              <List />
            </ProtectedRoute>
            <ProtectedRoute exact path="/studentform">
              <StudentForm />
            </ProtectedRoute>
            <ProtectedRoute exact path="/insitutes">
              <Portals />
            </ProtectedRoute>
            <Route exact path="/studentDashboard">
              <StudentDashboard/>
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </NoteState>
  );
}

export default App;
