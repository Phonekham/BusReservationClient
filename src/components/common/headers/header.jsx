import React, { Component } from "react";
import { IntlActions, withTranslate } from "react-redux-multilingual";
import Pace from "react-pace-progress";

// Import custom components
import store from "../../../store";
import { connect } from "react-redux";
import NavBar from "./common/navbar";
import TopBar from "./common/topbar";
import LogoImage from "./common/logo";

class HeaderFive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }
  /*===================== Pre loader ==========================*/

  componentDidMount() {
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (number >= 300) {
      if (window.innerWidth < 576) {
        document.getElementById("sticky").classList.remove("fixed");
      } else document.getElementById("sticky").classList.add("fixed");
    } else {
      document.getElementById("sticky").classList.remove("fixed");
    }
  };

  changeLanguage(lang) {
    store.dispatch(IntlActions.setLocale(lang));
  }

  openNav() {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  }

  load = () => {
    this.setState({ isLoading: true });
    fetch().then(() => {
      // deal with data fetched
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { translate } = this.props;
    return (
      <div>
        <header id="sticky" className="sticky header-2 header-6">
          {this.state.isLoading ? <Pace color="#27ae60" /> : null}
          <div className="mobile-fix-option"></div>
          {/*Top Header Component*/}
          <TopBar />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="main-menu">
                  <div className="menu-left category-nav-right">
                    <div className="brand-logo">
                      <LogoImage logo={this.props.logoName} />
                    </div>
                  </div>
                  <div className="menu-right pull-right">
                    {/*Top Navigation Bar Component*/}
                    <NavBar />
                    <div>
                      <div className="icon-nav">
                        <ul>
                          <li className="onhover-div mobile-setting">
                            <div>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <i className="fa fa-cog"></i>
                            <div className="show-div setting lao">
                              <h6> {translate("language")}</h6>
                              <ul>
                                <li>
                                  <a onClick={() => this.changeLanguage("en")}>
                                    {translate("en_lang")}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a onClick={() => this.changeLanguage("la")}>
                                    {translate("lao_lang")}
                                  </a>{" "}
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(null, {})(withTranslate(HeaderFive));
