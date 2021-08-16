import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

import step1 from "../assets/images/How/step1.png";
import step2 from "../assets/images/How/step2.png";
import step3 from "../assets/images/How/step3.png";
import step4 from "../assets/images/How/step4.png";

const HowToBook = () => {
  return (
    <div>
      <Card className="lao">
        <CardBody>
          <h2 className="text-center lao mt-3">ວິທີ່ດຳເນີນການຈອງປີ້</h2>
          <Row>
            <Col md="12">
              <Row>
                <Col md="2"></Col>
                <Col md="8">
                  <h3 className=" lao mt-3">
                    Step 1 : <span>ເລືອກສາຍທາງ ແລະ ວັນທີ່ເດີນທາງ</span>
                  </h3>
                  <img src={step1} alt="step1" className="img-thumbnail" />
                  <h4 className="lao mt-2">
                    ວິທີ່: ເລືອກສາຍທາງ ແລະ ວັນທີ່ເດີນທາງ ແລ້ວກົດຄົ້ນຫາ
                  </h4>
                  <h3 className=" lao mt-3">
                    Step 2 : <span>ເລືອກບ່ອນນັ່ງ</span>
                  </h3>
                  <img src={step2} alt="step1" className="img-thumbnail" />
                  <h4 className="lao mt-2">
                    ວິທີ່: ຈາກນັ້ນກົດທີ່ລາຍລະອຽດຂອງທ້ຽວທີ່ຕ້ອງການຈະຈອງ,
                    ເລືອກບ່ອນນັ່ງ ແລ້ວກົດທີ່ດຳເນີການຕໍ່
                  </h4>
                  <h3 className=" lao mt-3">
                    Step 3 : <span>ການຊຳລະ</span>
                  </h3>
                  <img src={step3} alt="step1" className="img-thumbnail" />
                  <h4 className="lao mt-2">
                    ວິທີ່: ກົດທີ່ຊ່ອງທາງຊຳລະ ແລ້ວ ອັບໂລດສະລິບການຊຳລະ
                  </h4>
                  <h3 className=" lao mt-3">
                    Step 4 : <span>ເບິງລາຍການປີ້ທີ່ຈອງ</span>
                  </h3>
                  <img src={step4} alt="step1" className="img-thumbnail" />
                  <h4 className="lao mt-2">
                    ວິທີ່: ຖ້າທ່ານຢາກເບິງລາຍການຈອງປີ້ຂອງທ່ານ ໃຫ້ກົດໄປທີ່
                    username ຂອງທ່ານ ແລ້ວເລືອກ ທີ່ເມນູ ປີ້ຂອງຂ້ອຍ
                  </h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default HowToBook;
