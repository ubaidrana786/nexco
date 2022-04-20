import React, { useState, useContext } from "react";
import { Row, Col, Container } from "reactstrap";
import "../AdminLogin/AdminLogin.css";
import { Link, useHistory } from "react-router-dom";
import logolight from "../../../assests/images/logo.png";
import { useFormik, Form, FormikProvider } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import NoteContext from "../../../RootContext/NoteContext";
// material
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
// component
import { Icon } from "@iconify/react";

const StudentLogin = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const {loggedInStudent,setLoggedInStudent} =useContext(NoteContext);
  const [studentData, setStudentData] = useState([]);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
      if (email !== "" && password !== "") {
        axios
          .post("http://localhost:5000/api/students/login", {
            email: email,
            password: password,
          })
          .then((response) => {
            if (response.data.error === true) {
              toast.error("Invalid Email Or Password", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              var result = Object.keys(response).map((key) => [
                Number(key),
                response[key],
              ]);
              setLoggedInStudent(result[0]);
              toast.success("Student Is Logged In Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

               history.push("/studentDashboard");
            }
          })
          .catch((error) => {
            // console.log(error);
          });
      }
    },
  });

  console.log(studentData);

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <ToastContainer />
          <Row className="g-0">
            <Col lg={4}>
              <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                <div className="w-100">
                  <Row className="justify-content-center">
                    <Col lg={9}>
                      <div>
                        <div className="text-center">
                          <div>
                            <a to="/" className="">
                              <img
                                src={logolight}
                                alt=""
                                height="40"
                                className="auth-logo logo-light mx-auto"
                              />
                            </a>
                          </div>

                          <h4 className="font-size-18 mt-4">Hi Student!</h4>
                          <p className="text-muted">
                            Sign in to continue to NEXCO.
                            {studentData.fname}
                          </p>
                        </div>

                        <FormikProvider value={formik}>
                          <Form
                            autoComplete="off"
                            noValidate
                            onSubmit={handleSubmit}
                          >
                            <Stack spacing={3}>
                              <TextField
                                fullWidth
                                autoComplete="username"
                                type="email"
                                label="Email address"
                                {...getFieldProps("email")}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                              />

                              <TextField
                                fullWidth
                                autoComplete="current-password"
                                type={showPassword ? "text" : "password"}
                                label="Password"
                                {...getFieldProps("password")}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={handleShowPassword}
                                        edge="end"
                                      >
                                        <Icon
                                          icon={
                                            showPassword
                                              ? "eva:eye-fill"
                                              : "eva:eye-off-fill"
                                          }
                                        />
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                                error={Boolean(
                                  touched.password && errors.password
                                )}
                                helperText={touched.password && errors.password}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                              />
                            </Stack>

                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                              sx={{ my: 2 }}
                            ></Stack>

                            <LoadingButton
                              style={{ background: "#7f3762" }}
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                              // loading={isSubmitting}
                            >
                              Login
                            </LoadingButton>
                          </Form>
                        </FormikProvider>

                        <div className="mt-5 text-center">
                          <p>
                            If You are a Admin ?{" "}
                            <Link to="/" className="fw-medium text-primary">
                              {" "}
                              Login{" "}
                            </Link>{" "}
                          </p>
                          <p>© 2022 NEXCO.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="authentication">
                <div className="bg-overlay"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default StudentLogin;
