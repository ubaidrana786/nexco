import "../../components/navbar/navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Button } from "@mui/material";
import logo from "../../../src/assests/images/logo.png"
import NoteContext from "../../RootContext/NoteContext";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const { loggedInStudent, setLoggedInStudent } = useContext(NoteContext);

    return (
        <div className="navbar">
            <div className="container">
                <img height="50px" src={logo} />
                <h2>Student Dashbord</h2>
                <Button color="error" variant="contained">Log-Out</Button>
            </div>
        </div>

    );
};

export default Navbar;
