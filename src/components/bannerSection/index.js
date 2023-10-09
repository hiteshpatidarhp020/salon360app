import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
// import Text from "../components/text";
import "../bannerSection/bannersec.css";
import Text from "../text";
import { Icon } from "../icon/icon";
import IcBannersmicon from "../../design-system/icons/IcBannersmicon";
<<<<<<< HEAD

import AppButton from "../app-button";

const BannerSection = () => {
  return (
    <>
      <Row className="m-0 mb-5 bannermainrow">
        <Col lg={5}>
          <Image fluid src="/images/banner.png" />
        </Col>
        <Col lg={7} className="listcolumn">
          <Row className=" m-0    listcontent">
            <Col md={12} lg={6} className=" m-0 listcontentone">
              <ListGroup.Item className="listgroup">
                <div className="listcoltext">
                  <Icon ic={<IcBannersmicon />} />
                  <Text
                    text="Store & Staff Management"
                    appearance="body_m_regular"
                    color="#fff"
                  />
=======
import ButtonComponent from "../app-button"

const BannerSection = () =>{
    return(
        <>
            <Row className="m-0 bannermainrow">
                    <Col md={6}>
                       <Image fluid src="/images/bannerimage.png"/>
                   </Col>
                    <Col md={6} className="listcolumn">
                    <div className=" row d-flex listcontent">
                    <div className=" col-sm listcontentone">
                   <ListGroup.Item className="listgroup">
                    <div className="listcoltext">
                    <Icon className="listicon" ic={<IcBannersmicon />}/>
                    <Text
                        text="Store & Staff Management"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                     </div>
                     <div className="listcoltext">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="Performance Reports"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                       <div className="listcoltext">
                    <Icon ic={<IcBannersmicon />}/>
                       <Text
                        text="Customizable Services & Packages"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                      <div className="listcoltext">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="Offers & Promotions"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                      </ListGroup.Item>
                      </div>
                      <div className="listcontenttwo">
                <ListGroup.Item className=" listgroup ">
                    <div className="col-sm listcoltext">
                    <Icon className="listicon" ic={<IcBannersmicon />}/>
                    <Text
                        text="Commission Tracking"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                     </div>
                     <div className="listcoltext">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="Appointment scheduling"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                       <div className="listcoltext">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="Client Data Management"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                      
                      <div className="listcoltext">
                    <Icon ic={<IcBannersmicon />}/>
                      <Text
                        text="Inventory Tracking"
                        appearance="body_m_regular"
                        color="#fff"
                      />
                      </div>
                </ListGroup.Item>
>>>>>>> appv1
                </div>
                <div className="listcoltext">
                  <Icon ic={<IcBannersmicon />} />
                  <Text
                    text="Performance Reports"
                    appearance="body_m_regular"
                    color="#fff"
                  />
                </div>
                <div className="listcoltext">
                  <Icon ic={<IcBannersmicon />} />
                  <Text
                    text="Customizable Services & Packages"
                    appearance="body_m_regular"
                    color="#fff"
                  />
                </div>
                <div className="listcoltext">
                  <Icon ic={<IcBannersmicon />} />
                  <Text
                    text="Offers & Promotions"
                    appearance="body_m_regular"
                    color="#fff"
                  />
                </div>
              </ListGroup.Item>
            </Col>
            <Col md={12} lg={6} className="listcontenttwo">
              <ListGroup.Item className=" listgroup ">
                <div className="col-sm listcoltext">
                  <Icon ic={<IcBannersmicon />} />
                  <Text
                    text="Commission Tracking"
                    appearance="body_m_regular"
                    color="#fff"
                  />
                </div>
                <div className="listcoltext">
                  <Icon ic={<IcBannersmicon />} />
                  <Text
                    text="Appointment scheduling"
                    appearance="body_m_regular"
                    color="#fff"
                  />
                </div>
                <div className="listcoltext">
                  <Icon ic={<IcBannersmicon />} />
                  <Text
                    text="Client Data Management"
                    appearance="body_m_regular"
                    color="#fff"
                  />
                </div>
                <div className="listcoltext">
                  <Icon ic={<IcBannersmicon />} />
                  <Text
                    text="Inventory Tracking"
                    appearance="body_m_regular"
                    color="#fff"
                  />
                </div>
              </ListGroup.Item>
            </Col>
            <AppButton
              className="bannerbutton mb-4 mt-4 ms-3"
              size="medium"
              paddingLeft="15px"
              paddingRight="15px"
              label="Get in touch with us"
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default BannerSection;
