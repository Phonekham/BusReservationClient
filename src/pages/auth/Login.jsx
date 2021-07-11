import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Form, Alert } from "reactstrap";

import { LOGIN_MEMBER } from "../../graphql/mutations";
import { handleLogin } from "../../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const [loginMember, { loading, error }] = useMutation(LOGIN_MEMBER, {
    variables: { ...userInfo },
    onCompleted: (data) => {
      if (data) {
        localStorage.setItem("jwtTokenBRSClient", data.loginMember.jwt);
        dispatch(handleLogin(data.loginMember.user));
        //   TODO push to user profile
        history.push("/");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginMember();
  };

  return (
    <div>
      <section className="login-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Login</h3>
              <div className="theme-card">
                {error ? (
                  <Alert color="danger" className="lao">
                    {error.graphQLErrors[0].message}
                  </Alert>
                ) : null}
                <Form className="theme-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={handleChange}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="review">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-solid lao"
                    disabled={loading}
                  >
                    ເຂົ້າສູ່ລະບົບ
                  </button>
                </Form>
              </div>
            </div>
            <div className="col-lg-6 right-login">
              <h3>New Customer</h3>
              <div className="theme-card authentication-right">
                <h6 className="title-font">Create A Account</h6>
                <p>
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to order from our shop. To
                  start shopping click register.
                </p>
                <Link to="/register">
                  <button className="btn btn-solid" type="button">
                    Create New Account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
