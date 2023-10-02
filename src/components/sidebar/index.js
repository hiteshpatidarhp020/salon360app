import React, { useState } from "react";
import IcPlus from "../../design-system/icons/IcPlus/index";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Navbar,
} from "react-bootstrap";
import "./sidebar.css";
import "../../App.css";
import ButtonComponent from "../buttonC";
import { Icon } from "../icon/icon";
import Text from "../text";

function SideBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="app-main">
      <Navbar className="app-header">
        <Container fluid>
          <Image src="your-logo.png" alt="Logo" />
          <Navbar.Brand>
            <Button onClick={toggleSidebar} className="d-md-none">
              ☰
            </Button>
            <button>Click1</button>
            <button>Click2</button>
            <img src="user-profile.png" className="me-2" />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Row className="m-0">
        <Col md={2} className="col1 m-0 p-0">
          <div className="">
            <div className={`sidebar ${showSidebar ? "show" : ""}`}>
              <ListGroup className="sidebar-items ">
                {setShowSidebar && (
                  <Button
                    onClick={closeSidebar}
                    className="close-button d-md-none"
                  >
                    &times;
                  </Button>
                )}

                <ListGroup.Item className="d-flex mb-5 mt-1  sidebar-item">
                  <Icon ic={<IcPlus />} />{" "}
                  <div className="m-0 ">Add Parlour Icon </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcPlus />} /> <div className="m-0 ">Item A </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcPlus />} /> <div className="m-0 ">Item A </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <Icon ic={<IcPlus />} /> <div className="m-0 ">Item A </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex  sidebar-item">
                  <ButtonComponent
                    size="medium"
                    label="App Details"
                    prefix={<IcPlus />}
                    justifyContent="start"
                    gap="20px"
                    paddingLeft="10px"
                  />
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Col>

        <Col md={10} className=" m-0 mt-5  pt-2">
          <Text
            className="my-4 m-1 ps-2"
            appearance="heading_s_medium"
            color="#FFF"
            text="App Details"
          />
          <div className="app-details-section">
            <Row className="m-0 p-0 align-items-center mb-5 ">
              <Col sm={7} className="m-0">
                <div className="">
                  <ListGroup className="monthlyExpenses-section">
                    <h5>Monthly Expenses & Inventory</h5>
                    <p>
                      Track your monthly expenses, including utilities,
                      salaries, and supplies. Stay on top of finances and make
                      informed decisions about budgeting and cost-cutting.
                    </p>
                    <p>
                      Track product inventory, including the quantity, cost, and
                      sales of each product & optimize your inventory levels and
                      ensure that they you enough products to meet customer
                      demand.
                    </p>
                    <ButtonComponent
                      label="Know More"
                      size="medium"
                      className="monthly-img-container"
                    />
                  </ListGroup>
                </div>
              </Col>

              <Col sm={5} className="m-0">
                <div className="">
                  <Image
                    src="/images/Rectangle 7667.png"
                    alt="Right Side Image"
                    fluid
                  />
                </div>
              </Col>
            </Row>
            <Row className="m-0 p-0 align-items-center">
              <Col sm={5} className="m-0 monthly-img-container">
                <div className="">
                  <Image
                    src="/images/Rectangle 7667.png"
                    alt="Right Side Image"
                    fluid
                  />
                </div>
              </Col>
              <Col sm={7} className="m-0 ">
                <div className="">
                  <ListGroup className="monthlyExpenses-section">
                    <h5>Monthly Expenses & Inventory</h5>
                    <p>
                      Manage your employee information, including their
                      salaries, commissions, and employment status. Also track
                      commissions earned by each employee on each product or
                      service they sell. This helps you to determine how much to
                      pay each employee based on their sales performance.
                    </p>

                    <ButtonComponent
                      prefix={<IcPlus />}
                      suffix={<IcPlus />}
                      label="Know More"
                      size="medium"
                    />
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SideBar;
