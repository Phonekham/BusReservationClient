import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

import aboutImage from "../assets/images/bus/about.jpg";

const About = () => {
  return (
    <div>
      <Card className="lao">
        <CardBody>
          <Row>
            <Col md="6">
              <img src={aboutImage} className="img-thumbnail" alt="about" />
            </Col>
            <Col md="6">
              <h3 className="text-center lao mt-3">ກ່ຽວກັບພວກເຮົາ</h3>
              <h5 className="lao">
                ສະຖານນີຂົນສົ່ງໂດຍສານສາຍໃຕ້ເປັນບ່ອນບໍລິການຮັບ-ສົ່ງຜູ້ໂດຍສານ,
                ສິນຄ້າວັດຖຸສິ່ງຂອງ ແລະ
                ສັດຈາກຈຸດໜຶ່ງໄປຫາອີກຈຸດໜຶ່ງຊຶ່ງສະຖານນີຂົນສົ່ງໂດຍສານທາງໄກສາຍໃຕ້ນີ້ແມ່ນໄດ້ສ້າງຕັ້ງຂຶ້ນໃນວັນທີ
                1 ກັນຍາ 2016 ເຊິ່ງມີລາຍລະອຽດດັ່ງລຸ່ມນີ້: ທີ່ຕັ້ງ ແລະ ພາລະບົດບາດ
                ຂອງສະຖານນີຂົນສົ່ງທາງໄກສາຍໃຕ້ແມ່ນສະຖານນີໜຶ່ງຊຶ່ງຕັ້ງຢູ່ ບ້ານ
                ສະພັງມຶກ, ເມືອງ ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ, ຖະໜົນເລກທີ 450 ປີ
                ໃກ້ກັບສີ່ແຍກໄຟແດງດົງໂດກ.{" "}
              </h5>
              <h3 className="text-center lao mt-3">ຂໍ້ມູນຕິດຕໍ່</h3>
              <div className="footer-contant lao">
                <div>
                  <i className="fa fa-phone"></i> Call Us: 030 254 54825
                </div>
                <div>
                  <i className="fa fa-envelope-o"></i> Email Us:{" "}
                  <a href="#">sourthernbus@gmail.com</a>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
