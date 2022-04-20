import React from "react";
import { Row, Col, Input, Button, Alert, Container, Label } from "reactstrap";
import LoginForm from "./LoginForm";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import logolight from "../../../assests/images/logo.png"

const AdminLogin = () => {
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4}>
              <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                <div className="w-100">
                  <Row className="justify-content-center">
                    <Col lg={9}>
                      <div>
                        <div className="text-center">
                          <div>
                            <a to="/" class="">
                             
                              <img src={logolight} alt="" height="40" class="auth-logo logo-light mx-auto" />
                            </a>
                          </div>

                          <h4 className="font-size-18 mt-4">Hi Admin!</h4>
                          <p className="text-muted">
                            Sign in to continue to NEXCO.
                          </p>
                        </div>

                        <LoginForm />

                        <div className="mt-5 text-center">
                          <p>
                            If You are a Student ?{" "}
                            <Link
                              to="/studentlogin"
                              className="fw-medium text-primary"
                            >
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

export default AdminLogin;
