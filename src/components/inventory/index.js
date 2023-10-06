import { Col, Image, ListGroup, Row } from "react-bootstrap";
import Text from "../text";
import AppButton from "../app-button";
import "./inventory.css";

const Inventory = () => {
  return (
    <div>
      <Row className="m-0 p-0 align-items-center mb-5">
        <Col lg={7} md={12} className="m-0 p-0">
          <div className="">
            <ListGroup className="monthlyExpenses-section">
              <Text
                text="Monthly Expenses & Inventory"
                appearance="heading_m_medium"
                color="white"
              />
              <br />
              <Text
                text="Track your monthly expenses, including utilities,
        salaries, and supplies. Stay on top of finances and make
        informed decisions about budgeting and cost-cutting."
                appearance="body_s_regular"
                color="white"
                width="70%"
                className="mb-4 monthly-discription"
              />
              <Text
                text="Track product inventory, including the quantity, cost,
        and sales of each product & optimize your inventory
        levels and ensure that they you enough products to meet
        customer demand."
                appearance="body_s_regular"
                color="white"
                width="70%"
                className="mb-4 monthly-discription"
              />

              <AppButton
                label="Know More"
                size="medium"
                className="monthly-img-container "
              />
            </ListGroup>
          </div>
        </Col>

        <Col lg={5} md={12} className="m-0 p-0">
          <div className="">
            <Image src="/images/knowmore1.png" alt="Right Side Image" fluid />
          </div>
        </Col>
      </Row>
      <Row className="m-0 p-0 align-items-center">
        <Col lg={5} md={12} className="p-0 m-0 monthly-img-container">
          <div className="">
            <Image src="/images/knowmore2.png" alt="Right Side Image" fluid />
          </div>
        </Col>
        <Col lg={7} md={12} className="p-0 m-0">
          <div className="ms-4  monthly-discription">
            <ListGroup className="monthlyExpenses-section">
              <Text
                text="Monthly Expenses & Inventory"
                appearance="heading_m_medium"
                color="white"
              />
              <br />
              <Text
                text="Manage your employee information, including their
        salaries, commissions, and employment status. Also track
        commissions earned by each employee on each product or
        service they sell. This helps you to determine how much
        to pay each employee based on their sales performance."
                appearance="body_s_regular"
                color="white"
                width="70%"
                className="mb-4 monthly-discription"
              />

              <AppButton label="Know More" size="medium" />
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Inventory;
