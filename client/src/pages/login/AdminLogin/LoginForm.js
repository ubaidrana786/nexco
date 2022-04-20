import React, { useContext } from "react";
import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import NoteContext from "../../../RootContext/NoteContext";
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// component
import { Icon } from "@iconify/react";
import axios from "axios";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const { currentUser, setCurrentUser, authToken, setAuthToken } =
    useContext(NoteContext);

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
          .post("http://localhost:5000/api/auth/login", {
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response.data.error)
            if (response.data.error === true) {
              toast.error('Invalid Email Or Password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              
            } else {
              toast.success('User Successfully Logged In....', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
    
              setCurrentUser(response?.data?.user);
              setAuthToken(response?.data?.token);
              history.push("/");

            }

          })
          .catch((error) => {
             console.log(error);
          });
      }
    },
  });
  if (authToken) {
    history.push("/");
  }


  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <ToastContainer />


      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
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
  );
}
