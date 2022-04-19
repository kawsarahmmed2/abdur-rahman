import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shered/Loading/Loading";
import SocialLink from "../SocialLink/SocialLink";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  let errorElement;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send Your email");
    } else {
      toast("Enter your email address.");
    }
  };
  const handleRegister = () => {
    navigate("/register");
  };
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  return (
    <div className="container w-50 mx-auto">
      <h2>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        {errorElement}
        <Button variant="primary" type="submit" className="px-5 mb-5">
          Login
        </Button>
        <p>
          New to Travel?{" "}
          <Link
            to="/register"
            onClick={handleRegister}
            className="text-primary text-decoration-none pe-auto"
          >
            Please Register
          </Link>
          .
        </p>
        <p className="">
          Forget Password{" "}
          <button
            onClick={resetPassword}
            className="btn text-primary text-decoration-none pe-auto"
          >
            Reset Password
          </button>
        </p>
      </Form>
      <SocialLink></SocialLink>
      <ToastContainer />
    </div>
  );
};

export default Login;
