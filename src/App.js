import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Image,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./App.css";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
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

      {/*sadfsad */}

      {/*      <Container className="mt-4 me-4  ">
        <Row>
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item>Item 1</ListGroup.Item>
              <ListGroup.Item>Item 2</ListGroup.Item>
              <ListGroup.Item>Item 3</ListGroup.Item>
              <ListGroup.Item>Item 4</ListGroup.Item>
              <ListGroup.Item>Item 5</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={5} className="order-md-2 order-1">
            <Image
              src="/images/Rectangle 7667.png"
              alt="Right Side Image"
              fluid
            />
          </Col>
        </Row>
  </Container>*/}

      {/* Sidebar */}

      {/*    <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <ListGroup className="sidebar-items ">
          {setShowSidebar && (
            <Button onClick={closeSidebar} className="close-button d-md-none">
              &times;sdaf
            </Button>
          )}
          <ListGroup.Item>Item A</ListGroup.Item>
          <ListGroup.Item>Item B</ListGroup.Item>
          <ListGroup.Item>Item C</ListGroup.Item>
          <ListGroup.Item>Item D</ListGroup.Item>
          <ListGroup.Item>Item E</ListGroup.Item>
        </ListGroup>
          </div>*/}
    </div>
  );
};

export default App;
