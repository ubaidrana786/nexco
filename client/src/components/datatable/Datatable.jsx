import React, { useContext, useEffect } from "react";
import "./datatable.scss";
import {  useHistory } from "react-router-dom";
import { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import SelectBranch from "./SelectBranch";
import SelectRole from "./SelectRole";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import NoteContext from "../../RootContext/NoteContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Datatable = () => {
  const { authToken } = useContext(NoteContext);
  const history = useHistory();




  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    SelectRole: Yup.string().required("Role is required"),
    name: Yup.string().required("Name is required"),
    SelectBranch: Yup.string().required("Branch is required"),
    password: Yup.string().required("Password is required"),
  });

  const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

  const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

  const style = {
    width: 600,
    bgcolor: "background.paper",
    p: 2,
    px: 4,
    pb: 3,
  };
  const options = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Officer", label: "Officer" },
  ];

  const optionsBranch = [
    { value: "Sydney", label: "Sydney" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Melbourne", label: "Melbourne" },
    { value: "Tasmania", label: "Tasmania" },
    { value: "Lahore", label: "Lahore" },
    { value: "India", label: "India" },
    { value: "Multan", label: "Multan" },
    { value: "Srilanka", label: "Srilanka" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Faiselabad", label: "Faiselabad" },
  ];




  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      SelectRole: "",
      SelectBranch: "",
      image: "data:image/png;base64,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"

    },
    validationSchema: LoginSchema,


    onSubmit: (values) => {
  
      axios.post("http://localhost:5000/api/auth/register", {

        name: values.name,
        email: values.email,
        password: values.password,
        role: values.SelectRole,
        branch: values.SelectBranch,
        image: "data:image/png;base64,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"


      }, {
        headers: {
          authorization: authToken
        }
      }).then((response) => {
        if (response.status === 400 || !response) {
          alert("please fill correct data ")
        } else {
          alert("Successfully Registration")
          history.push("/");
        }

      })
      //   history.push("/dashboard");
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClickOpen = () => {
    setOpen(true);

  };
  const handleClose = () => setOpen(false);

  const [userData, setuserData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/users', {
      headers: {
        authorization: authToken
      }
    })
      .then((response) => {
        console.log(response.data);
        setuserData(response.data)
      })
  }, [])



  return (
 <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <button className="btn text-white" style={{ background: "#7f3762" }} onClick={handleClickOpen}> Add New</button>


      </div>
      <div>
        <Dialog open={open} onClose={handleClose} >
          <form autoComplete="off" onSubmit={handleSubmit}>

            <DialogContent>

              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Full Name"
                    type="text"
                    fullWidth
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && <p className="handleerror">{formik.errors.name}</p>}
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    type="email"
                    fullWidth
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && <p className="handleerror">{formik.errors.email}</p>}
                </Grid>

              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <SelectRole

                    className="input"
                    onChange={(value) =>
                      formik.setFieldValue("SelectRole", value.value)
                    }
                    value={formik.values.SelectRole}
                    options={options}
                  />
                  {formik.errors.SelectRole && <p className="handleerror">{formik.errors.SelectRole}</p>}
                </Grid>
                <Grid item xs={6} md={6}>
                  <SelectBranch
                    className="input"
                    onChange={(value) =>
                      formik.setFieldValue(
                        "SelectBranch",
                        value.value
                      )
                    }
                    value={formik.values.SelectBranch}
                    options={optionsBranch}
                  />
                </Grid>

              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id=""
                    label="password"
                    type="password"
                    fullWidth
                    name="password"


                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && <p className="handleerror">{formik.errors.password}</p>}
                </Grid>


              </Grid>


            </DialogContent>
            <DialogActions>
              <Button variant="outlined" type="submit" >Add User</Button>

            </DialogActions>
          </form>
        </Dialog>

      </div>
      <TableContainer component={Paper} className="table">

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell className="tableCell">User</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Role</TableCell>
              <TableCell className="tableCell">Branch</TableCell>

              <TableCell className="tableCell">Date</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {userData && userData.map((element, index) => (
              <TableRow key={index}>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={element.image} alt="" className="image" />
                  </div>
                </TableCell>
                <TableCell className="tableCell">{element.name}</TableCell>
                <TableCell className="tableCell">{element.email}</TableCell>

                <TableCell className="tableCell">{element.role}</TableCell>
                <TableCell className="tableCell">{element.branch}</TableCell>

                <TableCell className="tableCell">{element.date}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
    </div>
  );
};

export default Datatable;
