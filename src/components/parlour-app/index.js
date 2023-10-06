import { Row, Col } from "react-bootstrap";
import "./parlour-app.css";
import "../../App.css";
import "./parlour-app.css";

import Refer from "../refer";
import AccordionC from "../accordion";
import Text from "../text";
import About from "../about";
import Knowmore from "../knowmore";
import BannerSection from "../bannerSection";
import Inventory from "../inventory";
import SideMenu from "../side-menu";
// md={2} md={10}
const SideBar = () => {
  return (
    <div className="app-main">
      <Row className="m-0">
        <Col md={4} lg={2} className="col1 m-0 p-0">
          <SideMenu />
        </Col>
        <Col md={8} lg={10} className=" m-0  mt-2 parlour-items ">
          <Text
            className="mb-4 mt-4    ms-1 ps-2"
            appearance="heading_s_medium"
            color="#FFF"
            text="App Details"
          />

          <div className="app-details-section">
            <div className="appdetals-top">
              <BannerSection />
              <About />
              <Inventory />
            </div>
            <Knowmore />
            <div className="appdetals-top">
              <Refer />
              <AccordionC />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SideBar;
