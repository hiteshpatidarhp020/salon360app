import { Col, FloatingLabel, Form, Image, Row } from "react-bootstrap";
import ButtonComponent from "../app-button";
import "./refer.css";
import Text from "../text";

const Refer = () => {
  return (
    <Row className="m-0 mt-5 align-items-center">
      <Col lg={6} className="p-0  ">
        <div className="refer-section">
          <h5>Refer your Salon Business Partners</h5>
          <Text
            appearance="body_s_regular"
            color="rgba(255, 255, 255, 0.7)"
            className="mb-3"
            text=" Whether you are a small independent salon or a large spa chain, our
            salon management app can help you achieve your business goals by
            streamlining your operations, improving your customer engagement,
            and increasing your profitability."
          />
          <Text
            appearance="body_s_regular"
            color="rgba(255, 255, 255, 0.7)"
            text=" 
            Thank you for considering our software, and we look forward to
            helping you grow your business."
            className="scan-text-section"
          />

          <div className="scan-section">
            <div>
              <Text
                text="Scan QR to download App!"
                width="170px"
                appearance="heading_m_medium"
                className="iterested-heading"
              />
            </div>
            <Image src="/images/scan.png" />
          </div>
        </div>
      </Col>
      <Col lg={6} className="interested-section">
        <Text
          text="Know anyone who might be interested?"
          width="250px"
          appearance="heading_m_regular"
          className="iterested-heading"
        />
        <Form className="mb-5 mt-4">
          <div class="form-floating mb-2">
            <input
              type="name"
              class="form-control input-filed"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput" className="floatingInputlabel">
              Enter name
            </label>
          </div>
          <div class="form-floating">
            <input
              type="number"
              class="form-control input-filed"
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="floatingInputlabel">Mobile</label>
          </div>
        </Form>
        <ButtonComponent label="Submit" size="medium" />
      </Col>
    </Row>
  );
};
export default Refer;
