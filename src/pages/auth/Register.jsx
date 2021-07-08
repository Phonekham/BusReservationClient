import React from "react";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Alert } from "reactstrap";
import { toast } from "react-toastify";

import { REGISTER_MEMBER } from "../../graphql/mutations";
import { CLEAR_USER, SET_USER } from "../../constants/ActionTypes";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.register);

  const handleChange = (e) => {
    dispatch({
      type: SET_USER,
      ...registerState,
      [e.target.name]: e.target.value,
    });
  };

  const [registerMember, { loading, error }] = useMutation(REGISTER_MEMBER, {
    variables: { input: registerState },
    onCompleted: (data) => {
      if (data) {
        toast.success(`ທ່ານລົງງທະບຽຍສຳເລັດແລ້ວ ເຂົ້າສູ່ລະບົບໄດ້ເລີຍ`, {
          position: "top-center",
          autoClose: 3000,
          className: "lao",
        });
        history.push("/login");
        dispatch({ type: CLEAR_USER });
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerMember();
  };
  return (
    <div>
      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>create account</h3>
              <div className="theme-card">
                {error ? (
                  <Alert color="danger" className="lao">
                    {error.graphQLErrors[0].message}
                  </Alert>
                ) : null}
                <Form className="theme-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="email">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstname"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="review">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastname"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="First Name"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="review">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="phone"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="email">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="review">Confirm password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm your password"
                        name="confirmPassword"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="email">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        name="username"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-solid"
                    disabled={loading}
                  >
                    create Account
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
