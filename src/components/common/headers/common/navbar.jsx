import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClose: { right: "0px" },
    };
  }

  componentWillMount() {
    if (window.innerWidth < 750) {
      this.setState({ navClose: { right: "-410px" } });
    }
    if (window.innerWidth < 1199) {
      this.setState({ navClose: { right: "-300px" } });
    }
  }

  openNav() {
    console.log("open");
    this.setState({ navClose: { right: "0px" } });
  }
  closeNav() {
    this.setState({ navClose: { right: "-410px" } });
  }

  onMouseEnterHandler() {
    if (window.innerWidth > 1199) {
      document.querySelector("#main-menu").classList.add("hover-unset");
    }
  }

  render() {
    const { translate } = this.props;
    return (
      <div>
        <div className="main-navbar">
          <div id="mainnav">
            <div className="toggle-nav" onClick={this.openNav.bind(this)}>
              <i className="fa fa-bars sidebar-bar"></i>
            </div>
            <ul className="nav-menu lao" style={this.state.navClose}>
              <li className="back-btn" onClick={this.closeNav.bind(this)}>
                <div className="mobile-back text-right">
                  <span>Back</span>
                  <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                </div>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  {translate("home")}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="nav-link">
                  {translate("about_us")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  {translate("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslate(NavBar);
