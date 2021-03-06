import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import "react-toastify/dist/ReactToastify.css";
import service from "../service/BankService";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname required"),
  lastName: Yup.string().required("Lastname required"),
  dob: Yup.string().required("Date required"),
  password: Yup.string().required("Password required"),
  username: Yup.string().required("User required"),
 
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
  email: Yup.string()
    .email("Invalid email")
    .required("<Embed></Embed>mail  required"),
});

const RegistrationForm = (props) => (
  <Container fluid="md" className="d-flex justify-content-center">
    <fieldset>
      <legend>Register</legend>
      <Form>
        <Row className="justify-content-center">
          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="FirstName"
              type="text"
              label="First Name"
            />
          </Col>

          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last Name"
            />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="dob"
              type="date"
              label="Date Of Birth"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Col>

          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="username"
              type="text"
              label="User Name"
            />
          </Col>
          <Col sm={12} md={6} className="text-center p-3">
            <Row id="checkbox-group" className="justify-content-center">
              Role
            </Row>
            <Row>
              <Col>
                <label className="p3">
                  <Field type="checkbox" name="role" value="USER" />
                  User
                </label>
                <label className="p3 ms-4">
                  <Field type="checkbox" name="role" value="ADMIN" />
                  Admin
                </label>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="password"
              type="password"
              label="Password"
            />
          </Col>

          <Col sm={12} md={6} className="text-center p-3">
            <Field
              component={TextField}
              name="password"
              type="Confirm Password"
              label="Confirm Password"
            />
          </Col>
        </Row>

        <Row className=" justify-content-center p-3">
          <Col className="text-center p-3">
            <Button
              onClick={props.submitForm}
              disabled={props.isSubmitting}
              variant="contained"
              color="secondary"
              className="register-btn"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      {props.isSubmitting && <LinearProgress />}
    </fieldset>
  </Container>
);

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dob: "",
          email: "",
          username: "",
          role: ["user"],
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          service.register(values).then((res) => {
            if (res.status === 200) {
              toast.success("Register Successful", {
                position: toast.POSITION.TOP_CENTER,
              });
              actions.resetForm();
            } else {
              toast.error(res.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
            }
            actions.setSubmitting(false);
          });
        }}
        component={RegistrationForm}
      ></Formik>
    </div>
  );
};

export default Register;
