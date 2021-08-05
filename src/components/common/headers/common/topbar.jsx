import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleLogout } from "../../../../redux/actions/auth";

const TopBarDark = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth);
  const { userData } = userState;

  const logout = () => {
    dispatch(handleLogout());
  };

  return (
    <div className="top-header top-header-dark3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-contact">
              <ul>
                <li>Welcome to Our Website</li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>Call Us: 030
                  99586521
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <ul className="header-dropdown">
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i>
                {userData ? userData.username : "Account"}
                <ul className="onhover-show-div">
                  {!userData ? (
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <a onClick={logout}>Logout</a>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarDark;
