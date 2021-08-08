import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SlideUpDown } from "../../../services/script";
import LogoImage from "../headers/common/logo";

class FooterOne extends Component {
  componentDidMount() {
    var contentwidth = window.innerWidth;
    if (contentwidth < 750) {
      SlideUpDown("footer-title");
    } else {
      var elems = document.querySelectorAll(".footer-title");
      [].forEach.call(elems, function(elemt) {
        let el = elemt.nextElementSibling;
        el.style = "display: block";
      });
    }
  }

  render() {
    return (
      <footer className="footer-light">
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <LogoImage logo={this.props.logoName} />
                  </div>
                  <p className="lao">
                    ສະຖານນີຂົນສົ່ງໂດຍສານສາຍໃຕ້ ເປັນບ່ອນບໍລິການຮັບ-ສົ່ງຜູ້ໂດຍສານ,
                    ສິນຄ້າວັດຖຸສິ່ງຂອງ ແລະ ສັດ ຈາກຈຸດໜຶ່ງໄປຫາອີກຈຸດໜຶ່ງ
                    ຊຶ່ງສະຖານນີຂົນສົ່ງໂດຍສານທາງໄກສາຍໃຕ້ນີ້ແມ່ນໄດ້ສ້າງ
                    ຕັ້ງຂຶ້ນໃນວັນທີ 1 ກັນຍາ 2016
                  </p>
                </div>
              </div>
              {/* <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>my account</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                        >
                          womens
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                        >
                          clothing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                        >
                          accessories
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                        >
                          featured
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Station information</h4>
                  </div>
                  <div className="footer-contant lao">
                    <ul className="contact-list">
                      <li>
                        <i className="fa fa-map-marker"></i>ບ້ານ ສະພັງມຶກ, ເມືອງ
                        ໄຊທານີ, ນະຄອນ ຫຼວງວຽງຈັນ,
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>Call Us: 030 254 54825
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>Email Us:{" "}
                        <a href="#">sourthernbus@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default FooterOne;
