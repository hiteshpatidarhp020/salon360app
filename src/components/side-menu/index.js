import { Button, ListGroup } from "react-bootstrap";
import IcParlour from "../../design-system/icons/IcParlour";
import IcVectordash from "../../design-system/icons/IcVectordash";
import IcVectorreport from "../../design-system/icons/Icvectorreport";
import IcVectorservice from "../../design-system/icons/IcVectorservice";
import IcVectorpayment from "../../design-system/icons/IcVectorPayment";
import IcVectorstaff from "../../design-system/icons/IcVectorstaff";
import IcVectorstore from "../../design-system/icons/IcVectorstore";
import IcVectorsettings from "../../design-system/icons/IcVectorsettings";
import IcVectorrefferal from "../../design-system/icons/IcVectorrefferal";
import { Icon } from "../icon/icon";
import AppButton from "../app-button";
import { useState } from "react";
import IcPlus from "../../design-system/icons/IcPlus";
import Header from "../header";
import "./side-menu.css";

const SideMenu = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="">
      <Header onClick={toggleSidebar} />
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <ListGroup className="sidebar-items ">
          <ListGroup.Item className="d-flex mb-5 mt-2  sidebar-item">
            <Icon ic={<IcParlour />} />
            {setShowSidebar && (
              <Button onClick={closeSidebar} className="close-button d-md-none">
                &times;
              </Button>
            )}
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <Icon ic={<IcVectordash />} />{" "}
            <div className="m-0 ">Dashboard </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <Icon ic={<IcVectorreport />} /> <div className="m-0 ">Report</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <Icon ic={<IcVectorservice />} />{" "}
            <div className="m-0 ">Service </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <Icon ic={<IcVectorpayment />} />{" "}
            <div className="m-0 ">Payment Modes</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <Icon ic={<IcVectorstaff />} /> <div className="m-0 ">My Staff</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <Icon ic={<IcVectorstore />} /> <div className="m-0 ">My Store</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <Icon ic={<IcVectorsettings />} />{" "}
            <div className="m-0 ">Settings</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <Icon ic={<IcVectorrefferal />} />
            <div className="m-0 ">Referrel</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex  sidebar-item">
            <AppButton
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
  );
};
export default SideMenu;
