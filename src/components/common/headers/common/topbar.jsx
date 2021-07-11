import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopBarDark = () => {
  const userState = useSelector((state) => state.auth);
  const { userData } = userState;

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
                <i className="fa fa-user" aria-hidden="true"></i> My Account
                <ul className="onhover-show-div">
                  {!userState ? (
                    <>
                      <li>
                        <Link to="/login">Logins</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/login">Profile</Link>
                      </li>
                      <li>
                        <Link to="/login">Logout</Link>
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
